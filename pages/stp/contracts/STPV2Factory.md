# STPV2Factory
[Git Source](https://github.com/withfabricxyz/stp-v2/blob/f6a2ed435a4537171d4c26339732ad3838efe3b9/src/STPV2Factory.sol)

**Inherits:**
[AccessControlled](/src/abstracts/AccessControlled.sol/abstract.AccessControlled.md), Multicallable

**Author:**
Fabric Inc.

*A factory which leverages Clones to deploy Fabric Subscription Token Contracts*


## State Variables
### IMPLEMENTATION
*The STP contract implementation address*


```solidity
address private immutable IMPLEMENTATION;
```


### _protocolFeeRecipient
*The protocol fee recipient*


```solidity
address private _protocolFeeRecipient;
```


### _deployFee
*The deploy fee (how much to charge for deployment)*


```solidity
uint256 private _deployFee;
```


## Functions
### constructor

Construct a new Factory contract


```solidity
constructor(address stpImplementation, address protocolFeeRecipient);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`stpImplementation`|`address`|the STPV2 implementation address|
|`protocolFeeRecipient`|`address`||


### deploySubscription

Deploy a new Clone of a STPV2 contract


```solidity
function deploySubscription(DeployParams memory params) public payable returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`params`|`DeployParams`|the initialization parameters for the contract (@see DeloyParams)|


### _transferDeployFee

*Transfer the deploy fee to the collector (if configured)*


```solidity
function _transferDeployFee() internal;
```

### setProtocolFeeRecipient

Set the protocol recipient for deployed contracts


```solidity
function setProtocolFeeRecipient(address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the new recipient|


### setDeployFee

Set the deploy fee (wei)


```solidity
function setDeployFee(uint256 deployFeeWei) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deployFeeWei`|`uint256`|the new deploy fee|


### feeSchedule

Get the current fee schedule


```solidity
function feeSchedule() external view returns (FeeScheduleView memory schedule);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`schedule`|`FeeScheduleView`|the fee schedule|


### updateClientFeeRecipient

Update the client fee recipient for a list of deployments

*requires the sender to be the current recipient*


```solidity
function updateClientFeeRecipient(address payable deployment, address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deployment`|`address payable`|the deployment to update|
|`recipient`|`address`|the new recipient|


### updateProtocolFeeRecipient

Update the protocol fee recipient for a list of deployments

*requires the sender to be the current recipient*


```solidity
function updateProtocolFeeRecipient(address payable deployment, address recipient) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`deployment`|`address payable`|the deployment to update|
|`recipient`|`address`|the new recipient|


## Events
### Deployment
*Emitted upon a successful subscription contract deployment*


```solidity
event Deployment(address indexed deployment, bytes deployKey);
```

### DeployFeeTransfer
*Emitted when the deploy fees are collected by the owner*


```solidity
event DeployFeeTransfer(address indexed recipient, uint256 amount);
```

### DeployFeeChange
*Emitted when a deploy fee is set*


```solidity
event DeployFeeChange(uint256 amount);
```

### ProtocolFeeRecipientChange
*Emitted when the protocol fee recipient is set*


```solidity
event ProtocolFeeRecipientChange(address account);
```

## Errors
### InvalidImplementation
*Error when the implementation address is invalid*


```solidity
error InvalidImplementation();
```

### InvalidFeeRecipient
*Error when a fee collector is invalid (0 address)*


```solidity
error InvalidFeeRecipient();
```

### FeeInvalid
*Error when the fee paid for deployment is insufficient*


```solidity
error FeeInvalid();
```

