# STPV2
[Git Source](https://github.com/withfabricxyz/stp-v2/blob/f6a2ed435a4537171d4c26339732ad3838efe3b9/src/STPV2.sol)

**Inherits:**
[ERC721](/src/abstracts/ERC721.sol/abstract.ERC721.md), [AccessControlled](/src/abstracts/AccessControlled.sol/abstract.AccessControlled.md), Multicallable, Initializable, ReentrancyGuard

**Author:**
Fabric Inc.

An NFT contract which allows users to mint time and access token gated content while time remains.


## State Variables
### ROLE_MANAGER
*The manager role can do most things, except calls that involve money (except tier management with
rewardbps)*


```solidity
uint16 private constant ROLE_MANAGER = 1;
```


### ROLE_AGENT
*The agent can only grant and revoke time*


```solidity
uint16 private constant ROLE_AGENT = 2;
```


### ROLE_ISSUER
*The issuer role can issue shares*


```solidity
uint16 private constant ROLE_ISSUER = 4;
```


### _contractURI
*The metadata URI for the contract (tokenUri is derived from this)*


```solidity
string private _contractURI;
```


### _name
*The name of the token*


```solidity
string private _name;
```


### _symbol
*The symbol of the token*


```solidity
string private _symbol;
```


### _rewardParams
*The reward parameters (slash params)*


```solidity
RewardParams private _rewardParams;
```


### _feeParams
*The fee parameters (collector, bips)*


```solidity
FeeParams private _feeParams;
```


### _currency
*The denomination of the token (0 for native)*


```solidity
Currency private _currency;
```


### _state
*The subscription state (subscribers, tiers, etc)*


```solidity
SubscriptionLib.State private _state;
```


### _referrals
*Referral codes and rewards*


```solidity
ReferralLib.State private _referrals;
```


### _rewards
*The reward pool state (holders, balances, etc)*


```solidity
RewardPoolLib.State private _rewards;
```


### _transferRecipient
*The address of the account which can receive transfers via sponsored calls*


```solidity
address private _transferRecipient;
```


### _factoryAddress
*The address of the factory which created this contract*


```solidity
address private _factoryAddress;
```


## Functions
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

Initialize the contract with the core parameters


```solidity
function initialize(
    InitParams memory params,
    Tier memory tier,
    RewardParams memory rewards,
    CurveParams memory curve,
    FeeParams memory fees
) public initializer;
```

### mint

Mint or renew a subscription for sender

*This is backwards compatible with the original mint function (default tier or subscribers current tier)*


```solidity
function mint(uint256 numTokens) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|


### mintFor

Mint or renew a subscription for a specific account. Intended for automated renewals.

*This is backwards compatible with the original mint function (default tier or subscribers current tier)*


```solidity
function mintFor(address account, uint256 numTokens) public payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to mint or renew time for|
|`numTokens`|`uint256`|the amount of ERC20 tokens or native tokens to transfer|


### mintAdvanced

Mint a subscription with advanced settings

*This is the advanced minting function, which allows for setting a specific tier, referral code, and referrer*


```solidity
function mintAdvanced(MintParams calldata params) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`MintParams`|the minting parameters|


### refund

Refund an account, clearing the subscription and revoking any grants, and paying out a set amount

*This refunds using the creator balance. If there is not enough balance, it will fail.*


```solidity
function refund(address account, uint256 numTokens) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to refund|
|`numTokens`|`uint256`|the amount of tokens to refund|


### grantTime

Grant time to a given account


```solidity
function grantTime(address account, uint48 numSeconds, uint16 tierId) external nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to grant time to|
|`numSeconds`|`uint48`|the number of seconds to grant|
|`tierId`|`uint16`|the tier id to grant time to (0 to match current tier, or default for new)|


### revokeTime

Revoke time from a given account


```solidity
function revokeTime(address account) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to revoke time from|


### deactivateSubscription

Deactivate a sub, kicking them out of their tier to the 0 tier

*The intent here is to help with supply capped tiers and subscription lapses*


```solidity
function deactivateSubscription(address account) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to deactivate|


### transferFunds


```solidity
function transferFunds(address to, uint256 amount) external;
```

### topUp

Top up the creator balance. Useful for refunds, tips, etc.


```solidity
function topUp(uint256 numTokens) external payable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`numTokens`|`uint256`|the amount of tokens to transfer|


### updateMetadata

Update the contract metadata


```solidity
function updateMetadata(string memory uri) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`uri`|`string`|the collection metadata URI|


### setTransferRecipient

Set a transfer recipient for automated/sponsored transfers


```solidity
function setTransferRecipient(address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the recipient address|


### setGlobalSupplyCap

Set the global supply cap for all tiers


```solidity
function setGlobalSupplyCap(uint64 supplyCap) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`supplyCap`|`uint64`|the new supply cap|


### createTier

Create a new tier


```solidity
function createTier(Tier memory params) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`Tier`|the tier parameters|


### updateTier

Update an existing tier

*This will overwrite all existing tier parameters, so care should be taken with single field intents*


```solidity
function updateTier(uint16 tierId, Tier memory params) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tierId`|`uint16`|the id of the tier to update|
|`params`|`Tier`|the new tier parameters|


### updateProtocolFeeRecipient

Update the protocol fee collector address (must be called from the factory)


```solidity
function updateProtocolFeeRecipient(address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the new fee recipient address|


### updateClientFeeRecipient

Update the client fee collector address (must be called from the factory)


```solidity
function updateClientFeeRecipient(address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the new fee recipient address|


### setReferralCode

Create or update a referral code for giving rewards to referrers on mint


```solidity
function setReferralCode(uint256 code, uint16 basisPoints, bool permanent, address account) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`code`|`uint256`|the unique integer code for the referral|
|`basisPoints`|`uint16`|the reward basis points (max = 50% = 5000 bps)|
|`permanent`|`bool`|whether the referral code is locked (immutable after set)|
|`account`|`address`|the specific account to reward (0x0 for any account)|


### referralDetail

Fetch the reward basis points for a given referral code


```solidity
function referralDetail(uint256 code) external view returns (ReferralLib.Code memory value);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`code`|`uint256`|the unique integer code for the referral|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`value`|`ReferralLib.Code`|the reward basis points and permanence|


### _purchase

*Purchase a subscription, minting a token if necessary, switching tiers if necessary*


```solidity
function _purchase(
    address account,
    uint16 tierId,
    uint256 numTokens,
    uint256 code,
    address referrer
) private nonReentrant;
```

### _transferFee

*Transfer a fee to a recipient, returning the amount transferred*


```solidity
function _transferFee(uint256 amount, uint16 bps, address recipient) private returns (uint256 fee);
```

### _checkCreatorBalance

*Ensure the contract has a creator balance to cover the transfer, without dipping into rewards*


```solidity
function _checkCreatorBalance(uint256 amount) private view;
```

### _issueAndAllocateRewards

*Issue rewards to an account and allocate funds to the pool (if configured)*


```solidity
function _issueAndAllocateRewards(address account, uint256 amount, uint16 tierId) private;
```

### issueRewardShares

Mint tokens to an account without payment (used for migrations, tips, etc)


```solidity
function issueRewardShares(address account, uint256 numShares) external;
```

### yieldRewards

Allocate rewards to the pool in the denominated currency


```solidity
function yieldRewards(uint256 amount) external payable nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|the amount of tokens (native or ERC20) to allocate|


### createRewardCurve

Create a new reward curve


```solidity
function createRewardCurve(CurveParams memory curve) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curve`|`CurveParams`|the curve parameters. The id is set automatically (monotonic)|


### transferRewardsFor

Transfer rewards for a given account, if any are available

*Permissionless to allow the creator or agents to transfer rewards on behalf of users*


```solidity
function transferRewardsFor(address account) public;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account of the reward holder|


### slash

Slash the reward shares for a given account if the subscription has expired and the grace period ended.

*This rebalances share value and is intended to incentivize users to renew subscriptions.*


```solidity
function slash(address account) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to slash|


### curveDetail

Get details about a given reward curve


```solidity
function curveDetail(uint8 curveId) external view returns (CurveParams memory curve);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`curveId`|`uint8`|the curve id to fetch|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`curve`|`CurveParams`|the curve details|


### subscriptionOf

Get details about a particular subscription


```solidity
function subscriptionOf(address account) external view returns (SubscriberView memory subscription);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to fetch the subscription for|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`subscription`|`SubscriberView`|the relevant information for a subscription|


### contractDetail

Get details about the contract state


```solidity
function contractDetail() external view returns (ContractView memory detail);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`detail`|`ContractView`|the contract details|


### feeDetail

Get details about the fee structure


```solidity
function feeDetail() external view returns (FeeParams memory fee);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`fee`|`FeeParams`|the fee details|


### tierDetail

Get details about a given tier


```solidity
function tierDetail(uint16 tierId) external view returns (TierLib.State memory tier);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tierId`|`uint16`|the tier id to fetch|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`tier`|`TierLib.State`|the tier details|


### stpVersion

Get the version of the protocol


```solidity
function stpVersion() external pure returns (uint8 version);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`version`|`uint8`|the protocol version|


### tierBalanceOf

Fetch the balance of a given account in a specific tier (0 if they are not in the tier)


```solidity
function tierBalanceOf(uint16 tierId, address account) external view returns (uint256 numSeconds);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tierId`|`uint16`|the tier id to fetch the balance for|
|`account`|`address`|the account to fetch the balance of|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`numSeconds`|`uint256`|the number of seconds remaining in the subscription|


### name

Fetch the name of the token


```solidity
function name() public view override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|name the name of the token|


### symbol

Fetch the symbol of the token


```solidity
function symbol() public view override returns (string memory);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|symbol the symbol of the token|


### contractURI

Fetch the contract metadata URI


```solidity
function contractURI() public view returns (string memory uri);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`uri`|`string`|the URI for the contract|


### tokenURI

Fetch the metadata URI for a given token

*The metadata host must be able to resolve the token ID as a path part (contractURI/${tokenId})*


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


### _beforeTokenTransfer

*Prevent burning, handle soulbound tiers, and transfer subscription/reward state*


```solidity
function _beforeTokenTransfer(address from, address to, uint256) internal override;
```

### recoverCurrency

Recover a token from the contract (unless it is the contracts denominated token)


```solidity
function recoverCurrency(address tokenAddress, address recipientAddress, uint256 tokenAmount) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenAddress`|`address`|the address of the token to recover|
|`recipientAddress`|`address`|the address to send the tokens to|
|`tokenAmount`|`uint256`|the amount of tokens to send|


## Events
### Withdraw
*Emitted when the owner withdraws available funds*


```solidity
event Withdraw(address indexed account, uint256 tokensTransferred);
```

### TopUp
*Emitted when the creator tops up the contract balance on refund*


```solidity
event TopUp(uint256 tokensIn);
```

### FeeTransfer
*Emitted when the fees are transferred to the collector*


```solidity
event FeeTransfer(address indexed to, uint256 tokensTransferred);
```

### ProtocolFeeRecipientChange
*Emitted when the protocol fee recipient is updated*


```solidity
event ProtocolFeeRecipientChange(address indexed account);
```

### ClientFeeRecipientChange
*Emitted when the client fee recipient is updated*


```solidity
event ClientFeeRecipientChange(address indexed account);
```

### ReferralPayout
*Emitted when a referral fee is paid out*


```solidity
event ReferralPayout(
    uint256 indexed tokenId, address indexed referrer, uint256 indexed referralId, uint256 rewardAmount
);
```

### GlobalSupplyCapChange
*Emitted when the supply cap is updated*


```solidity
event GlobalSupplyCapChange(uint256 supplyCap);
```

### TransferRecipientChange
*Emitted when the transfer recipient is updated*


```solidity
event TransferRecipientChange(address indexed recipient);
```

### SlashTransferFallback
*Emitted when slashing and the reward transfer fails. The balance is reallocated to the creator*


```solidity
event SlashTransferFallback(address indexed account, uint256 amount);
```

## Errors
### InvalidOwner
Error when the owner is invalid


```solidity
error InvalidOwner();
```

### InvalidTokenParams
Error when the token params are invalid


```solidity
error InvalidTokenParams();
```

### InvalidFeeParams
Error when the fee params are invalid


```solidity
error InvalidFeeParams();
```

### TransferToExistingSubscriber
Error when a transfer fails due to the recipient having a subscription


```solidity
error TransferToExistingSubscriber();
```

### InsufficientBalance
Error when the balance is insufficient for a transfer


```solidity
error InsufficientBalance();
```

### NotSlashable
Error when slashing fails due to constraints


```solidity
error NotSlashable();
```

