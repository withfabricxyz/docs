# CrowdFi V1 Factory Reference

[Git Source](https://github.com/withfabricxyz/contracts/blob/b1d8186ade935688a2ee8457124c53f640092408/src/finance/CrowdFinancingV1Factory.sol)

**Inherits:**
Ownable

**Author:**
Fabric Inc.

*A factory which leverages Clones to deploy Fabric Crowd Financing contracts*


## State Variables
### _implementation
*The campaign contract implementation address*


```solidity
address immutable _implementation;
```


### _feeCollector
*The fee collector address (can be 0, no fees are collected)*


```solidity
address private _feeCollector;
```


### _feeTransferBips
*The upfront fee (See CrowdFinancingV1)*


```solidity
uint16 private _feeTransferBips;
```


### _feeYieldBips
*The payout fee (See CrowdFinancingV1)*


```solidity
uint16 private _feeYieldBips;
```


### _feeDeployMin
*Fee to collect upon deployment*


```solidity
uint256 private _feeDeployMin;
```


## Functions
### feeRequired


```solidity
modifier feeRequired();
```

### constructor


```solidity
constructor(address implementation) Ownable;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`implementation`|`address`|the CrowdFinancingV1 implementation address|


### deployCampaign

*Deploys a new CrowdFinancingV1 contract*


```solidity
function deployCampaign(
    address recipient,
    uint256 minGoal,
    uint256 maxGoal,
    uint256 minContribution,
    uint256 maxContribution,
    uint32 holdOff,
    uint32 duration,
    address erc20TokenAddr
) external payable feeRequired returns (address);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`recipient`|`address`|the address of the recipient, where funds are sent on success|
|`minGoal`|`uint256`|the minimum funding amount acceptable for successful financing|
|`maxGoal`|`uint256`|the maximum funding amount accepted for the financing round|
|`minContribution`|`uint256`|the minimum deposit an account can make in one deposit|
|`maxContribution`|`uint256`|the maximum deposit an account can make in one or more deposits|
|`holdOff`|`uint32`|the number of seconds to wait until the fund starts|
|`duration`|`uint32`|the runtime of the campaign, in seconds|
|`erc20TokenAddr`|`address`|the address of the ERC20 token used for payments, or 0 address for native token|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`address`|the address of the deployed CrowdFinancingV1 contract|


### transferDeployFees

*Owner Only: Transfer accumulated fees*


```solidity
function transferDeployFees(address recipient) external onlyOwner;
```

### updateFeeSchedule

*Owner Only: Update the fee schedule for future deployments*


```solidity
function updateFeeSchedule(address feeCollector, uint16 feeTransferBips, uint16 feeYieldBips) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`feeCollector`|`address`|the address of the fee collector, or the 0 address if no fees are collected|
|`feeTransferBips`|`uint16`|the upfront fee in basis points, calculated during processing|
|`feeYieldBips`|`uint16`|the payout fee in basis points. Dilutes the cap table for fee collection|


### updateMinimumDeployFee

*Owner Only: Update the deploy fee.*


```solidity
function updateMinimumDeployFee(uint256 minFeeAmount) external onlyOwner;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`minFeeAmount`|`uint256`|the amount of wei required to deploy a campaign|


### feeSchedule

*Fetch the fee schedule for campaigns and the deploy fee*


```solidity
function feeSchedule()
    external
    view
    returns (address collector, uint16 transferFee, uint16 yieldFee, uint256 deployFee);
```
**Returns**

|Name|Type|Description|
|----|----|-----------|
|`collector`|`address`|the address of the fee collector, or the 0 address if no fees are collected|
|`transferFee`|`uint16`|the upfront fee in basis points, calculated during transfer|
|`yieldFee`|`uint16`|the payout fee in basis points. Dilutes the cap table for fee collection|
|`deployFee`|`uint256`|the amount of wei required to deploy a campaign|


## Events
### Deployment
*Emitted upon a successful Campaign deployment*


```solidity
event Deployment(address indexed deployment);
```

### FeeScheduleChange
*Emitted when the fee collector or schedule changes*


```solidity
event FeeScheduleChange(address feeCollector, uint16 upfrontBips, uint16 payoutBips);
```

### DeployFeeChange
*Emitted when the creation fee minium changes*


```solidity
event DeployFeeChange(uint256 fee);
```

### DeployFeeTransfer
*Emitted when the deploy fees are collected by the owner*


```solidity
event DeployFeeTransfer(address indexed recipient, uint256 fee);
```

