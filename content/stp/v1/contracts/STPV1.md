# SubscriptionTokenV1
[Git Source](https://github.com/withfabricxyz/contracts/blob/741a39c08ae2e1b2f539fcc3fed35c233ae9056d/src/subscriptions/SubscriptionTokenV1.sol)

**Inherits:**
ERC721Upgradeable, Ownable2StepUpgradeable, ReentrancyGuardUpgradeable, PausableUpgradeable

**Author:**
Fabric Inc.

An NFT contract which allows users to mint time and access token gated content while time remains.

*The balanceOf function returns the number of seconds remaining in the subscription. Token gated systems leverage
the balanceOf function to determine if a user has the token, and if no time remains, the balance is 0. NFT holders
can mint additional time. The creator/owner of the contract can withdraw the funds at any point. There are
additional functionalities for granting time, refunding accounts, fees, rewards, etc. This contract is designed to be used with
Clones, but is not designed to be upgradeable. Added functionality will come with new versions.*


## State Variables
### _MAX_REWARD_HALVINGS
*The maximum number of reward halvings (limiting this prevents overflow)*


```solidity
uint256 private constant _MAX_REWARD_HALVINGS = 32;
```


### _MAX_FEE_BIPS
*Maximum protocol fee basis points (12.5%)*


```solidity
uint16 private constant _MAX_FEE_BIPS = 1250;
```


### _MAX_BIPS
*Maximum basis points (100%)*


```solidity
uint16 private constant _MAX_BIPS = 10000;
```


### _contractURI
*The metadata URI for the contract*


```solidity
string private _contractURI;
```


### _tokenURI
*The metadata URI for the tokens. Note: if it ends with /, then we append the tokenId*


```solidity
string private _tokenURI;
```


### _tokensPerSecond
*The cost of one second in denominated token (wei or other base unit)*


```solidity
uint256 private _tokensPerSecond;
```


### _minPurchaseSeconds
*Minimum number of seconds to purchase. Also, this is the number of seconds until the reward multiplier is halved.*


```solidity
uint256 private _minPurchaseSeconds;
```


### _minimumPurchase
*The minimum number of tokens accepted for a time purchase*


```solidity
uint256 private _minimumPurchase;
```


### _token
*The token contract address, or 0x0 for native tokens*


```solidity
IERC20 private _token;
```


### _tokensIn
*The total number of tokens transferred in (accounting)*


```solidity
uint256 private _tokensIn;
```


### _tokensOut
*The total number of tokens transferred out (accounting)*


```solidity
uint256 private _tokensOut;
```


### _tokenCounter
*The token counter for mint id generation and enforcing supply caps*


```solidity
uint256 private _tokenCounter;
```


### _feeBalance
*The total number of tokens allocated for the fee collector (accounting)*


```solidity
uint256 private _feeBalance;
```


### _feeBps
*The protocol fee basis points (10000 = 100%, max = _MAX_FEE_BIPS)*


```solidity
uint16 private _feeBps;
```


### _feeCollector
*The protocol fee collector address (for withdraws or sponsored transfers)*


```solidity
address private _feeCollector;
```


### _erc20
*Flag which determines if the contract is erc20 denominated*


```solidity
bool private _erc20;
```


### _deployBlockTime
*The block timestamp of the contract deployment (used for reward halvings)*


```solidity
uint256 private _deployBlockTime;
```


### _totalRewardPoints
*The reward pool size (used to calculate reward withdraws accurately)*


```solidity
uint256 private _totalRewardPoints;
```


### _rewardPoolBalance
*The reward pool balance (accounting)*


```solidity
uint256 private _rewardPoolBalance;
```


### _rewardPoolTotal
*The reward pool total (used to calculate reward withdraws accurately)*


```solidity
uint256 private _rewardPoolTotal;
```


### _rewardPoolSlashed
*The reward pool tokens slashed (used to calculate reward withdraws accurately)*


```solidity
uint256 private _rewardPoolSlashed;
```


### _rewardBps
*The basis points for reward allocations*


```solidity
uint16 private _rewardBps;
```


### _numRewardHalvings
*The number of reward halvings. This is used to calculate the reward multiplier for early supporters, if the creator chooses to reward them.*


```solidity
uint256 private _numRewardHalvings;
```


### _supplyCap
*The maximum number of tokens which can be minted (adjustable over time, but will not allow setting below current count)*


```solidity
uint256 private _supplyCap;
```


### _transferRecipient
*The address of the account which can receive transfers via sponsored calls*


```solidity
address private _transferRecipient;
```


### _subscriptions
*The subscription state for each account*


```solidity
mapping(address => Subscription) private _subscriptions;
```


### _referralCodes
*The collection of referral codes for referral rewards*


```solidity
mapping(uint256 => uint16) private _referralCodes;
```


## Functions
### validAmount

*Guard to ensure the purchase amount is valid*


```solidity
modifier validAmount(uint256 amount);
```

### constructor

*Disable initializers on the logic contract*


```solidity
constructor();
```

### receive

*Fallback function to mint time for native token contracts*


```solidity
receive() external payable;
```

### initialize

*Initialize acts as the constructor, as this contract is intended to work with proxy contracts.*


```solidity
function initialize(Shared.InitParams memory params) public initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`Shared.InitParams`|the init params (See Common.InitParams)|


### mint

Mint or renew a subscription for sender


```solidity
function mint(uint256 numTokens) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|


### mintWithReferral

Mint or renew a subscription for sender, with referral rewards for a referrer


```solidity
function mintWithReferral(uint256 numTokens, uint256 referralCode, address referrer) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|
|`referralCode`|`uint256`|the referral code to use|
|`referrer`|`address`|the referrer address and reward recipient|


### withdrawRewards

Withdraw available rewards. This is only possible if the subscription is active.


```solidity
function withdrawRewards() external;
```

### slashRewards

Slash the reward points for an expired subscription after a grace period which is 50% of the purchased time
Any slashable points are burned, increasing the value of remaining points.


```solidity
function slashRewards(address account) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account of the subscription to slash|


### withdraw

Withdraw available funds as the owner


```solidity
function withdraw() external;
```

### withdrawAndTransferFees

Withdraw available funds and transfer fees as the owner


```solidity
function withdrawAndTransferFees() external;
```

### withdrawTo

Withdraw available funds as the owner to a specific account


```solidity
function withdrawTo(address account) public onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to transfer funds to|


### refund

Refund one or more accounts remaining purchased time and revoke any granted time

*This refunds accounts using creator balance, and can also transfer in to top up the fund. Any excess value is withdrawable.*


```solidity
function refund(uint256 numTokensIn, address[] memory accounts) external payable onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokensIn`|`uint256`|an optional amount of tokens to transfer in before refunding|
|`accounts`|`address[]`|the list of accounts to refund and revoke grants for|


### updateMetadata

Update the contract metadata


```solidity
function updateMetadata(string memory contractUri, string memory tokenUri) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`contractUri`|`string`|the collection metadata URI|
|`tokenUri`|`string`|the token metadata URI|


### grantTime

Grant time to a list of accounts, so they can access content without paying


```solidity
function grantTime(address[] memory accounts, uint256 secondsToAdd) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`accounts`|`address[]`|the list of accounts to grant time to|
|`secondsToAdd`|`uint256`|the number of seconds to grant for each account|


### pause

Pause minting to allow for migrations or other actions


```solidity
function pause() external onlyOwner;
```

### unpause

Unpause to resume subscription minting


```solidity
function unpause() external onlyOwner;
```

### setSupplyCap

Update the maximum number of tokens (subscriptions)


```solidity
function setSupplyCap(uint256 supplyCap) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`supplyCap`|`uint256`|the new supply cap (must be greater than token count or 0 for unlimited)|


### setTransferRecipient

Set a transfer recipient for automated/sponsored transfers


```solidity
function setTransferRecipient(address recipient) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the recipient address|


### mintFor

Mint or renew a subscription for a specific account. Intended for automated renewals.


```solidity
function mintFor(address account, uint256 numTokens) public payable whenNotPaused validAmount(numTokens);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to mint or renew time for|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|


### mintWithReferralFor

Mint or renew a subscription for a specific account, with referral details


```solidity
function mintWithReferralFor(address account, uint256 numTokens, uint256 referralCode, address referrer)
    public
    payable
    whenNotPaused
    validAmount(numTokens);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to mint or renew time for|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|
|`referralCode`|`uint256`|the referral code to use for rewards|
|`referrer`|`address`|the referrer address and reward recipient|


### transferFees

Transfer any available fees to the fee collector


```solidity
function transferFees() external;
```

### transferAllBalances

Transfer all balances to the transfer recipient and fee collector (if applicable)

*This is a way for EOAs to pay gas fees on behalf of the creator (automation, etc)*


```solidity
function transferAllBalances() external;
```

### feeSchedule

Fetch the current fee schedule


```solidity
function feeSchedule() external view returns (address feeCollector, uint16 feeBps);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`feeCollector`|`address`|the feeCollector address|
|`feeBps`|`uint16`|the fee basis points|


### feeBalance

Fetch the accumulated fee balance


```solidity
function feeBalance() external view returns (uint256 balance);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balance`|`uint256`|the accumulated fees which have not yet been transferred|


### updateFeeRecipient

Update the fee collector address. Can be set to 0x0 to disable fees permanently.


```solidity
function updateFeeRecipient(address newCollector) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`newCollector`|`address`|the new fee collector address|


### createReferralCode

Create a referral code for giving rewards to referrers on mint


```solidity
function createReferralCode(uint256 code, uint16 bps) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`code`|`uint256`|the unique integer code for the referral|
|`bps`|`uint16`|the reward basis points|


### deleteReferralCode

Delete a referral code


```solidity
function deleteReferralCode(uint256 code) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`code`|`uint256`|the unique integer code for the referral|


### referralCodeBps

Fetch the reward basis points for a given referral code


```solidity
function referralCodeBps(uint256 code) external view returns (uint16 bps);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`code`|`uint256`|the unique integer code for the referral|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`bps`|`uint16`|the reward basis points|


### _purchaseTime

*Add time to a given account (transfer happens before this is called)*


```solidity
function _purchaseTime(address account, uint256 amount) internal returns (uint256);
```

### _fetchSubscription

*Get or build a new subscription*


```solidity
function _fetchSubscription(address account) internal returns (Subscription memory);
```

### _maybeMint

*Mint the NFT if it does not exist. Used after grant/purchase state changes (check effects)*


```solidity
function _maybeMint(address account, uint256 tokenId) private;
```

### _allocateFeesAndRewards

*If fees or rewards are present, allocate a portion of the amount to the relevant pools*


```solidity
function _allocateFeesAndRewards(uint256 amount) private;
```

### _allocateFees

*Allocate tokens to the fee collector*


```solidity
function _allocateFees(uint256 amount) internal returns (uint256);
```

### _allocateRewards

*Allocate tokens to the reward pool*


```solidity
function _allocateRewards(uint256 amount) internal returns (uint256);
```

### _transferIn

*Transfer tokens into the contract, either native or ERC20*


```solidity
function _transferIn(address from, uint256 amount) internal nonReentrant returns (uint256);
```

### _transferToCreator

*Transfer tokens to the creator, after allocating protocol fees and rewards*


```solidity
function _transferToCreator(address to, uint256 amount) internal;
```

### _transferOut

*Transfer tokens out of the contract, either native or ERC20*


```solidity
function _transferOut(address to, uint256 amount) internal nonReentrant;
```

### _transferFees

*Transfer fees to the fee collector*


```solidity
function _transferFees() internal;
```

### _transferAllBalances

*Transfer all remaining balances to the creator and fee collector (if applicable)*


```solidity
function _transferAllBalances(address balanceRecipient) internal;
```

### _grantTime

*Grant time to a given account*


```solidity
function _grantTime(address account, uint256 numSeconds) internal;
```

### _grantTimeRemaining

*The amount of granted time remaining for a given subscription*


```solidity
function _grantTimeRemaining(Subscription memory sub) internal view returns (uint256);
```

### _purchaseTimeRemaining

*The amount of purchased time remaining for a given subscription*


```solidity
function _purchaseTimeRemaining(Subscription memory sub) internal view returns (uint256);
```

### _refund

*Refund the remaining time for the given accounts subscription, and clear grants*


```solidity
function _refund(address account) internal;
```

### _referralAmount

*Compute the reward amount for a given token amount and referral code*


```solidity
function _referralAmount(uint256 tokenAmount, uint256 referralCode) internal view returns (uint256);
```

### _subscriptionExpiresAt

*The timestamp when the subscription expires*


```solidity
function _subscriptionExpiresAt(Subscription memory sub) internal pure returns (uint256);
```

### _rewardBalance

*The reward balance for a given subscription*


```solidity
function _rewardBalance(Subscription memory sub) internal view returns (uint256);
```

### _isActive

*Determine if a subscription is active*


```solidity
function _isActive(Subscription memory sub) internal view returns (bool);
```

### refundableTokenBalanceOfAll

Determine the total cost for refunding the given accounts

*The value will change from block to block, so this is only an estimate*


```solidity
function refundableTokenBalanceOfAll(address[] memory accounts) public view returns (uint256 numTokens);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`accounts`|`address[]`|the list of accounts to refund|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|total number of tokens for refund|


### canRefund

Determines if a refund can be processed for the given accounts with the current balance


```solidity
function canRefund(address[] memory accounts) public view returns (bool refundable);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`accounts`|`address[]`|the list of accounts to refund|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`refundable`|`bool`|true if the refund can be processed from the current balance|


### rewardMultiplier

The current reward multiplier used to calculate reward points on mint. This is halved every _minPurchaseSeconds and goes to 0 after N halvings.


```solidity
function rewardMultiplier() public view returns (uint256 multiplier);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`multiplier`|`uint256`|the current value|


### timeValue

The amount of time exchanged for the given number of tokens


```solidity
function timeValue(uint256 numTokens) public view returns (uint256 numSeconds);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|the number of tokens to exchange for time|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numSeconds`|`uint256`|the number of seconds purchased|


### creatorBalance

The creators withdrawable balance


```solidity
function creatorBalance() public view returns (uint256 balance);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`balance`|`uint256`|the number of tokens available for withdraw|


### totalCreatorEarnings

The sum of all deposited tokens over time. Fees and refunds are not accounted for.


```solidity
function totalCreatorEarnings() public view returns (uint256 total);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`total`|`uint256`|the total number of tokens deposited|


### subscriptionOf

Relevant subscription information for a given account


```solidity
function subscriptionOf(address account)
    external
    view
    returns (uint256 tokenId, uint256 refundableAmount, uint256 rewardPoints, uint256 expiresAt);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|the tokenId for the account|
|`refundableAmount`|`uint256`|the number of seconds which can be refunded|
|`rewardPoints`|`uint256`|the number of reward points earned|
|`expiresAt`|`uint256`|the timestamp when the subscription expires|


### rewardBps

The percentage (as basis points) of creator earnings which are rewarded to subscribers


```solidity
function rewardBps() external view returns (uint16 bps);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`bps`|`uint16`|reward basis points|


### totalRewardPoints

The number of reward points allocated to all subscribers (used to calculate rewards)


```solidity
function totalRewardPoints() external view returns (uint256 numPoints);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numPoints`|`uint256`|total number of reward points|


### rewardPoolBalance

The balance of the reward pool (for reward withdraws)


```solidity
function rewardPoolBalance() external view returns (uint256 numTokens);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|number of tokens in the reward pool|


### rewardBalanceOf

The number of tokens available to withdraw from the reward pool, for a given account


```solidity
function rewardBalanceOf(address account) external view returns (uint256 numTokens);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|number of tokens available to withdraw|


### erc20Address

The ERC-20 address used for purchases, or 0x0 for native


```solidity
function erc20Address() public view returns (address erc20);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`erc20`|`address`|address or 0x0 for native|


### refundableBalanceOf

The refundable time balance for a given account


```solidity
function refundableBalanceOf(address account) public view returns (uint256 numSeconds);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numSeconds`|`uint256`|the number of seconds which can be refunded|


### contractURI

The contract metadata URI for accessing collection metadata


```solidity
function contractURI() public view returns (string memory uri);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`uri`|`string`|the collection URI|


### baseTokenURI

The base token URI for accessing token metadata


```solidity
function baseTokenURI() public view returns (string memory uri);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`uri`|`string`|the base token URI|


### tps

The number of tokens required for a single second of time


```solidity
function tps() external view returns (uint256 numTokens);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|per second|


### minPurchaseSeconds

The minimum number of seconds required for a purchase


```solidity
function minPurchaseSeconds() external view returns (uint256 numSeconds);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numSeconds`|`uint256`|minimum|


### supplyDetail

Fetch the current supply cap (0 for unlimited)


```solidity
function supplyDetail() external view returns (uint256 count, uint256 cap);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`count`|`uint256`|the current number|
|`cap`|`uint256`|the max number of subscriptions|


### transferRecipient

Fetch the current transfer recipient address


```solidity
function transferRecipient() external view returns (address recipient);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the address or 0x0 address for none|


### tokenURI

Fetch the metadata URI for a given token

*If _tokenURI ends with a / then the tokenId is appended*


```solidity
function tokenURI(uint256 tokenId) public view override returns (string memory uri);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|the tokenId to fetch the metadata URI for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`uri`|`string`|the URI for the token|


### balanceOf

Override the default balanceOf behavior to account for time remaining


```solidity
function balanceOf(address account) public view override returns (uint256 numSeconds);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to fetch the balance of|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numSeconds`|`uint256`|the number of seconds remaining in the subscription|


### renounceOwnership

Renounce ownership of the contract, transferring all remaining funds to the creator and fee collector
and pausing the contract to prevent further inflows.


```solidity
function renounceOwnership() public override onlyOwner;
```

### _beforeTokenTransfer

*Transfers may occur if the destination does not have a subscription*


```solidity
function _beforeTokenTransfer(address from, address to, uint256, uint256) internal override;
```

### reconcileERC20Balance

Reconcile the ERC20 balance of the contract with the internal state

*The prevents lost funds if ERC20 tokens are transferred to the contract directly*


```solidity
function reconcileERC20Balance() external onlyOwner;
```

### recoverERC20

Recover ERC20 tokens which were accidentally sent to the contract


```solidity
function recoverERC20(address tokenAddress, address recipientAddress, uint256 tokenAmount) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenAddress`|`address`|the address of the token to recover|
|`recipientAddress`|`address`|the address to send the tokens to|
|`tokenAmount`|`uint256`|the amount of tokens to send|


### recoverNativeTokens

Recover native tokens which bypassed receive. Only callable for erc20 denominated contracts.


```solidity
function recoverNativeTokens(address recipient) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the address to send the tokens to|


### reconcileNativeBalance

Reconcile native tokens which bypassed receive/mint. Only callable for native denominated contracts.


```solidity
function reconcileNativeBalance() external onlyOwner;
```

## Events
### Withdraw
*Emitted when the owner withdraws available funds*


```solidity
event Withdraw(address indexed account, uint256 tokensTransferred);
```

### RewardWithdraw
*Emitted when a subscriber withdraws their rewards*


```solidity
event RewardWithdraw(address indexed account, uint256 tokensTransferred);
```

### RewardPointsSlashed
*Emitted when a subscriber slashed the rewards of another subscriber*


```solidity
event RewardPointsSlashed(address indexed account, address indexed slasher, uint256 rewardPointsSlashed);
```

### RewardsAllocated
*Emitted when tokens are allocated to the reward pool*


```solidity
event RewardsAllocated(uint256 tokens);
```

### Purchase
*Emitted when time is purchased (new nft or renewed)*


```solidity
event Purchase(
    address indexed account,
    uint256 indexed tokenId,
    uint256 tokensTransferred,
    uint256 timePurchased,
    uint256 rewardPoints,
    uint256 expiresAt
);
```

### Grant
*Emitted when a subscriber is granted time by the creator*


```solidity
event Grant(address indexed account, uint256 indexed tokenId, uint256 secondsGranted, uint256 expiresAt);
```

### Refund
*Emitted when the creator refunds a subscribers remaining time*


```solidity
event Refund(address indexed account, uint256 indexed tokenId, uint256 tokensTransferred, uint256 timeReclaimed);
```

### RefundTopUp
*Emitted when the creator tops up the contract balance on refund*


```solidity
event RefundTopUp(uint256 tokensIn);
```

### FeeTransfer
*Emitted when the fees are transferred to the collector*


```solidity
event FeeTransfer(address indexed from, address indexed to, uint256 tokensTransferred);
```

### FeeCollectorChange
*Emitted when the fee collector is updated*


```solidity
event FeeCollectorChange(address indexed from, address indexed to);
```

### FeeAllocated
*Emitted when tokens are allocated to the fee pool*


```solidity
event FeeAllocated(uint256 tokens);
```

### ReferralPayout
*Emitted when a referral fee is paid out*


```solidity
event ReferralPayout(
    uint256 indexed tokenId, address indexed referrer, uint256 indexed referralId, uint256 rewardAmount
);
```

### ReferralCreated
*Emitted when a new referral code is created*


```solidity
event ReferralCreated(uint256 id, uint16 rewardBps);
```

### ReferralDestroyed
*Emitted when a referral code is deleted*


```solidity
event ReferralDestroyed(uint256 id);
```

### SupplyCapChange
*Emitted when the supply cap is updated*


```solidity
event SupplyCapChange(uint256 supplyCap);
```

### TransferRecipientChange
*Emitted when the transfer recipient is updated*


```solidity
event TransferRecipientChange(address indexed recipient);
```

## Structs
### Subscription
*The subscription struct which holds the state of a subscription for an account*


```solidity
struct Subscription {
    uint256 tokenId;
    uint256 secondsPurchased;
    uint256 secondsGranted;
    uint256 grantOffset;
    uint256 purchaseOffset;
    uint256 rewardPoints;
    uint256 rewardsWithdrawn;
}
```

