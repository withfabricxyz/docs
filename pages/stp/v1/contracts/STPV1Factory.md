# SubscriptionTokenV1Factory
[Git Source](https://github.com/withfabricxyz/contracts/blob/741a39c08ae2e1b2f539fcc3fed35c233ae9056d/src/subscriptions/SubscriptionTokenV1Factory.sol)

**Inherits:**
Ownable2Step

**Author:**
Fabric Inc.

*A factory which leverages Clones to deploy Fabric Subscription Token Contracts*


## State Variables
### _MAX_FEE_BIPS
*The maximum fee that can be charged for a subscription contract*


```solidity
uint16 private constant _MAX_FEE_BIPS = 1250;
```


### _DEFAULT_REWARD_HALVINGS
*The number of reward halvings*


```solidity
uint8 private constant _DEFAULT_REWARD_HALVINGS = 6;
```


### _implementation
*The campaign contract implementation address*


```solidity
address immutable _implementation;
```


### _feeConfigs
*Configured fee ids and their config*


```solidity
mapping(uint256 => FeeConfig) private _feeConfigs;
```


### _feeDeployMin
*Fee to collect upon deployment*


```solidity
uint256 private _feeDeployMin;
```


## Functions
### feeRequired

*Guard to ensure the deploy fee is met*


```solidity
modifier feeRequired();
```

### constructor


```solidity
constructor(address implementation) Ownable2Step;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implementation`|`address`|the SubscriptionTokenV1 implementation address|


### deploySubscription

Deploy a new Clone of a SubscriptionTokenV1 contract


```solidity
function deploySubscription(
    string memory name,
    string memory symbol,
    string memory contractURI,
    string memory tokenURI,
    uint256 tokensPerSecond,
    uint256 minimumPurchaseSeconds,
    uint16 rewardBps,
    address erc20TokenAddr,
    uint256 feeConfigId
) public payable feeRequired returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|the name of the collection|
|`symbol`|`string`|the symbol of the collection|
|`contractURI`|`string`|the metadata URI for the collection|
|`tokenURI`|`string`|the metadata URI for the tokens|
|`tokensPerSecond`|`uint256`|the number of base tokens required for a single second of time|
|`minimumPurchaseSeconds`|`uint256`|the minimum number of seconds an account can purchase|
|`rewardBps`|`uint16`|the basis points for reward allocations|
|`erc20TokenAddr`|`address`|the address of the ERC20 token used for purchases, or the 0x0 for native|
|`feeConfigId`|`uint256`|the fee configuration id to use for this deployment (if the id is invalid, the default fee is used)|


### transferDeployFees

*Owner Only: Transfer accumulated fees*


```solidity
function transferDeployFees(address recipient) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the address to transfer the fees to|


### createFee

Create a fee for future deployments using that fee id


```solidity
function createFee(uint256 id, address collector, uint16 bips) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|the id of the fee for future deployments|
|`collector`|`address`|the address of the fee collector|
|`bips`|`uint16`|the fee in basis points, allocated during withdraw|


### destroyFee

Destroy a fee schedule


```solidity
function destroyFee(uint256 id) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`id`|`uint256`|the id of the fee to destroy|


### updateMinimumDeployFee

Update the deploy fee (wei)


```solidity
function updateMinimumDeployFee(uint256 minFeeAmount) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`minFeeAmount`|`uint256`|the amount of wei required to deploy a campaign|


### feeInfo

Fetch the fee schedule for a given fee id


```solidity
function feeInfo(uint256 feeId) external view returns (address collector, uint16 bips, uint256 deployFeeWei);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`collector`|`address`|the address of the fee collector, or the 0 address if no fees are collected|
|`bips`|`uint16`|the fee in basis points, allocated during withdraw|
|`deployFeeWei`|`uint256`|the amount of wei required to deploy a campaign|


## Events
### Deployment
*Emitted upon a successful contract deployment*


```solidity
event Deployment(address indexed deployment, uint256 feeId);
```

### FeeCreated
*Emitted when a new fee is created*


```solidity
event FeeCreated(uint256 indexed id, address collector, uint16 bips);
```

### FeeDestroyed
*Emitted when a fee is destroyed*


```solidity
event FeeDestroyed(uint256 indexed id);
```

### DeployFeeChange
*Emitted when the deployment fee changes*


```solidity
event DeployFeeChange(uint256 amount);
```

### DeployFeeTransfer
*Emitted when the deploy fees are collected by the owner*


```solidity
event DeployFeeTransfer(address indexed recipient, uint256 amount);
```

## Structs
### FeeConfig
*Fee configuration for agreements and revshare*


```solidity
struct FeeConfig {
    address collector;
    uint16 basisPoints;
}
```

