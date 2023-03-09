# CrowdFinancingV1.sol

**Inherits:**
Initializable, ReentrancyGuardUpgradeable, IERC20

**Author:**
Fabric Inc.

Each instance of a Crowd Financing Contract represents a single campaign with a goal
of raising funds for a specific purpose. The contract is deployed by the creator through
the CrowdFinancingV1Factory contract. The creator specifies the recipient address, the
token to use for payments, the minimum and maximum funding goals, the minimum and maximum
contribution amounts, and the start and end times.
The campaign is deemed successful if the minimum funding goal is met by the end time, or the
maximum funding goal is met before the end time.
If the campaign is successful funds can be transferred to the recipient address. If the
campaign is not successful the funds can be withdrawn by the contributors.


## State Variables
### MAX_DURATION_SECONDS
*Max campaign duration: 90 Days*


```solidity
uint256 private constant MAX_DURATION_SECONDS = 7776000;
```


### MIN_DURATION_SECONDS
*Min campaign duration: 30 minutes*


```solidity
uint256 private constant MIN_DURATION_SECONDS = 1800;
```


### PAST_START_TOLERANCE_SECONDS
*Allow a campaign to be deployed where the start time is up to one minute in the past*


```solidity
uint256 private constant PAST_START_TOLERANCE_SECONDS = 60;
```


### MAX_FEE_BIPS
*Maximum fee basis points*


```solidity
uint16 private constant MAX_FEE_BIPS = 2500;
```


### MAX_BIPS
*Maximum basis points*


```solidity
uint16 private constant MAX_BIPS = 10_000;
```


### _state
*The current state of the contract*


```solidity
State private _state;
```


### _recipientAddress
*The address of the recipient in the event of a successful campaign*


```solidity
address private _recipientAddress;
```


### _token
*The token used for payments (optional)*


```solidity
IERC20 private _token;
```


### _goalMin
*The minimum funding goal to meet for a successful campaign*


```solidity
uint256 private _goalMin;
```


### _goalMax
*The maximum funding goal. If this goal is met, funds can be transferred early*


```solidity
uint256 private _goalMax;
```


### _minContribution
*The minimum tokens an account can contribute*


```solidity
uint256 private _minContribution;
```


### _maxContribution
*The maximum tokens an account can contribute*


```solidity
uint256 private _maxContribution;
```


### _startTimestamp
*The start timestamp for the fund*


```solidity
uint256 private _startTimestamp;
```


### _endTimestamp
*The end timestamp for the fund*


```solidity
uint256 private _endTimestamp;
```


### _contributionTotal
*The total amount contributed by all accounts*


```solidity
uint256 private _contributionTotal;
```


### _withdrawTotal
*The total amount withdrawn by all accounts*


```solidity
uint256 private _withdrawTotal;
```


### _contributions
*The mapping from account to balance (contributions or transfers)*


```solidity
mapping(address => uint256) private _contributions;
```


### _withdraws
*The mapping from account to withdraws*


```solidity
mapping(address => uint256) private _withdraws;
```


### _allowances
*ERC20 allowances*


```solidity
mapping(address => mapping(address => uint256)) private _allowances;
```


### _feeRecipient
*The optional address of the fee recipient*


```solidity
address private _feeRecipient;
```


### _feeTransferBips
*The fee in basis points, transferred to the fee recipient upon transfer*


```solidity
uint16 private _feeTransferBips;
```


### _feeYieldBips
*The fee in basis points, used to dilute the cap table upon transfer*


```solidity
uint16 private _feeYieldBips;
```


### _yieldTotal
*Track the number of tokens sent via yield calls*


```solidity
uint256 private _yieldTotal;
```


### _erc20
*Flag indicating the contract works with ERC20 tokens rather than ETH*


```solidity
bool private _erc20;
```


## Functions
### erc20Only

*Guard to gate ERC20 specific functions*


```solidity
modifier erc20Only();
```

### ethOnly

*Guard to gate ETH specific functions*


```solidity
modifier ethOnly();
```

### yieldGuard

*Guard to ensure yields are allowed*


```solidity
modifier yieldGuard(uint256 amount);
```

### contributionGuard

*Guard to ensure contributions are allowed*


```solidity
modifier contributionGuard(uint256 amount);
```

### constructor

*This contract is intended for use with proxies, so we prevent direct
initialization. This contract will fail to function properly without a proxy*


```solidity
constructor();
```

### initialize

*Initialize acts as the constructor, as this contract is intended to work with proxy contracts.*


```solidity
function initialize(
    address recipient,
    uint256 minGoal,
    uint256 maxGoal,
    uint256 minContribution,
    uint256 maxContribution,
    uint256 startTimestamp,
    uint256 endTimestamp,
    address erc20TokenAddr,
    address feeRecipientAddr,
    uint16 feeTransferBips,
    uint16 feeYieldBips
) external initializer;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the address of the recipient, where funds are transferred when conditions are met|
|`minGoal`|`uint256`|the minimum funding goal for the financing round|
|`maxGoal`|`uint256`|the maximum funding goal for the financing round|
|`minContribution`|`uint256`|the minimum contribution an account can make|
|`maxContribution`|`uint256`|the maximum contribution an account can make|
|`startTimestamp`|`uint256`|the UNIX time in seconds denoting when contributions can start|
|`endTimestamp`|`uint256`|the UNIX time in seconds denoting when contributions are no longer allowed|
|`erc20TokenAddr`|`address`|the address of the ERC20 token used for payments, or 0 address for native token (ETH)|
|`feeRecipientAddr`|`address`|the address of the fee recipient, or the 0 address if no fees are collected|
|`feeTransferBips`|`uint16`|the transfer fee in basis points, collected during the transfer call|
|`feeYieldBips`|`uint16`|the yield fee in basis points. Dilutes the cap table for the fee recipient.|


### contributeERC20

Contribute ERC20 tokens into the contract
#### Events
- Emits a {Contribution} event
#### Requirements
- `amount` must be within range of min and max contribution for account
- `amount` must not cause max goal to be exceeded
- `amount` must be approved for transfer by the caller
- contributions must be allowed
- the contract must be configured to work with ERC20 tokens


```solidity
function contributeERC20(uint256 amount) external erc20Only contributionGuard(amount) nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|the amount of ERC20 tokens to contribute|


### contributeEth

Contribute ETH into the contract
#### Events
- Emits a {Contribution} event
#### Requirements
- `msg.value` must be within range of min and max contribution for account
- `msg.value` must not cause max goal to be exceeded
- contributions must be allowed
- the contract must be configured to work with ETH


```solidity
function contributeEth() external payable ethOnly contributionGuard(msg.value);
```

### _addContribution

*Add a contribution to the account and update totals*


```solidity
function _addContribution(address account, uint256 amount) private;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the account to add the contribution to|
|`amount`|`uint256`|the amount of the contribution|


### isContributionAllowed


```solidity
function isContributionAllowed() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if contributions are allowed|


### isTransferAllowed

Check if the goal was met and funds can be transferred


```solidity
function isTransferAllowed() public view returns (bool);
```

### transferBalanceToRecipient

Transfer funds to the recipient and change the state
#### Events
Emits a {TransferContributions} event if the target was met and funds transferred


```solidity
function transferBalanceToRecipient() external;
```

### allocateYieldFee

*Dilutes supply by allocating tokens to the fee collector, allowing for
withdraws of yield*


```solidity
function allocateYieldFee() private returns (uint256);
```

### calculateTransferFee

*Calculates a fee to transfer to the fee collector upon processing*


```solidity
function calculateTransferFee() private view returns (uint256);
```

### isGoalMinMet


```solidity
function isGoalMinMet() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the minimum goal was met|


### isGoalMaxMet


```solidity
function isGoalMaxMet() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the maximum goal was met|


### yieldERC20

Yield ERC20 tokens to all token holders in proportion to their balance
#### Requirements
- `amount` must be greater than 0
- `amount` must be approved for transfer for the contract
#### Events
- Emits {Payout} event with amount = `amount`


```solidity
function yieldERC20(uint256 amount) external erc20Only yieldGuard(amount) nonReentrant;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`amount`|`uint256`|the amount of tokens to payout|


### yieldEth

Yield ETH to all token holders in proportion to their balance
#### Requirements
- `msg.value` must be greater than 0
#### Events
- Emits {Payout} event with amount = `msg.value`


```solidity
function yieldEth() external payable ethOnly yieldGuard(msg.value) nonReentrant;
```

### _trackYield

*Emit a Payout event and increase yield total*


```solidity
function _trackYield(address from, uint256 amount) private;
```

### yieldTotal


```solidity
function yieldTotal() public view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of tokens/wei paid back by the recipient|


### withdrawsOf


```solidity
function withdrawsOf(address account) public view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address of a contributor or token holder|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total tokens withdrawn for a given account|


### isWithdrawAllowed


```solidity
function isWithdrawAllowed() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the contract allows withdraws|


### payoutsMadeTo


```solidity
function payoutsMadeTo(address account) private view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of tokens paid back to a given contributor|


### yieldBalanceOf


```solidity
function yieldBalanceOf(address account) public view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address of a token holder|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The withdrawable amount of tokens for a given account, attributable to yield|


### yieldTotalOf


```solidity
function yieldTotalOf(address account) public view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`account`|`address`|the address of a contributor|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The total amount of tokens earned by the given account through yield|


### withdraw

Withdraw all available funds to the caller if withdraws are allowed and
the caller has a contribution balance (failed), or a yield balance (funded)
#### Events
- Emits a {Withdraw} event with amount = the amount withdrawn


```solidity
function withdraw() external;
```

### withdrawContribution

*Withdraw the initial contribution for the given account*


```solidity
function withdrawContribution(address account) private;
```

### withdrawYieldBalance

*Withdraw the available yield balance for the given account*


```solidity
function withdrawYieldBalance(address account) private;
```

### _transferSafe

this contract is not compatible with tokens that rebase

*Token transfer function which leverages allowance. Additionally, it accounts
for tokens which take fees on transfer. Fetch the balance of this contract
before and after transfer, to determine the real amount of tokens transferred.*


```solidity
function _transferSafe(address account, uint256 amount) private returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The amount of tokens transferred after fees|


### totalSupply

*Contributions mint tokens and increase the total supply*


```solidity
function totalSupply() external view returns (uint256);
```

### balanceOf


```solidity
function balanceOf(address account) external view returns (uint256);
```

### transfer


```solidity
function transfer(address to, uint256 amount) external returns (bool);
```

### _transfer

See ERC20._transfer

*The primary difference here is that we also need to adjust withdraws
to prevent over-withdrawal of yield/contribution*


```solidity
function _transfer(address from, address to, uint256 amount) internal virtual;
```

### allowance


```solidity
function allowance(address owner, address spender) public view returns (uint256);
```

### approve


```solidity
function approve(address spender, uint256 amount) external returns (bool);
```

### _spendAllowance

See ERC20._spendAllowance


```solidity
function _spendAllowance(address owner, address spender, uint256 amount) internal virtual;
```

### _approve

See ERC20._approve


```solidity
function _approve(address owner, address spender, uint256 amount) internal virtual;
```

### transferFrom


```solidity
function transferFrom(address from, address to, uint256 amount) external returns (bool);
```

### contributionRangeFor

*The values can be 0, indicating the account is not allowed to contribute.
This method is helpful for preflight checks to ensure the amount is within the range.*


```solidity
function contributionRangeFor(address account) external view returns (uint256 min, uint256 max);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`min`|`uint256`|The minimum contribution for the account|
|`max`|`uint256`|The maximum contribution for the account|


### state


```solidity
function state() public view returns (State);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`State`|The current state of the campaign|


### minAllowedContribution


```solidity
function minAllowedContribution() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum allowed contribution of ERC20 tokens or WEI|


### maxAllowedContribution


```solidity
function maxAllowedContribution() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum allowed contribution of ERC20 tokens or WEI|


### startsAt


```solidity
function startsAt() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The unix timestamp in seconds when the time window for contribution starts|


### isStarted


```solidity
function isStarted() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the time window for contribution has started|


### endsAt


```solidity
function endsAt() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The unix timestamp in seconds when the contribution window ends|


### isEnded


```solidity
function isEnded() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the time window for contribution has closed|


### recipientAddress


```solidity
function recipientAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the recipient|


### isEthDenominated


```solidity
function isEthDenominated() public view returns (bool);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the contract is ETH denominated|


### erc20Address


```solidity
function erc20Address() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address of the ERC20 Token, or 0x0 if ETH|


### goalMin


```solidity
function goalMin() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The minimum goal amount as ERC20 tokens or WEI|


### goalMax


```solidity
function goalMax() external view returns (uint256);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|The maximum goal amount as ERC20 tokens or WEI|


### transferFeeBips


```solidity
function transferFeeBips() external view returns (uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`|The transfer fee as basis points|


### yieldFeeBips


```solidity
function yieldFeeBips() external view returns (uint16);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint16`|The yield fee as basis points|


### feeRecipientAddress


```solidity
function feeRecipientAddress() external view returns (address);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|The address where the fees are transferred to, or 0x0 if no fees are collected|


## Events
### Contribution
*Emitted when an account contributions funds to the contract*


```solidity
event Contribution(address indexed account, uint256 numTokens);
```

### Withdraw
*Emitted when an account withdraws their initial contribution or yield balance*


```solidity
event Withdraw(address indexed account, uint256 numTokens);
```

### TransferContributions
*Emitted when the funds are transferred to the recipient and when
fees are transferred to the fee collector, if specified*


```solidity
event TransferContributions(address indexed account, uint256 numTokens);
```

### Fail
*Emitted on processing if time has elapsed and the target was not met*


```solidity
event Fail();
```

### Payout
*Emitted when makePayment is invoked by the recipient*


```solidity
event Payout(address indexed account, uint256 numTokens);
```

## Enums
### State
*A state enum to track the current state of the campaign*


```solidity
enum State {
    FUNDING,
    FAILED,
    FUNDED
}
```
