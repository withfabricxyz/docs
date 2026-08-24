# CrowdFi V1 Factory ABI

```json
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      }
    ],
    "name": "DeployFeeChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "fee",
        "type": "uint256"
      }
    ],
    "name": "DeployFeeTransfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "deployment",
        "type": "address"
      }
    ],
    "name": "Deployment",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "feeCollector",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "upfrontBips",
        "type": "uint16"
      },
      {
        "indexed": false,
        "internalType": "uint16",
        "name": "payoutBips",
        "type": "uint16"
      }
    ],
    "name": "FeeScheduleChange",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "minGoal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxGoal",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "minContribution",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "maxContribution",
        "type": "uint256"
      },
      {
        "internalType": "uint32",
        "name": "holdOff",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "duration",
        "type": "uint32"
      },
      {
        "internalType": "address",
        "name": "erc20TokenAddr",
        "type": "address"
      }
    ],
    "name": "deployCampaign",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeSchedule",
    "outputs": [
      {
        "internalType": "address",
        "name": "collector",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "transferFee",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "yieldFee",
        "type": "uint16"
      },
      {
        "internalType": "uint256",
        "name": "deployFee",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "transferDeployFees",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "feeCollector",
        "type": "address"
      },
      {
        "internalType": "uint16",
        "name": "feeTransferBips",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "feeYieldBips",
        "type": "uint16"
      }
    ],
    "name": "updateFeeSchedule",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "minFeeAmount",
        "type": "uint256"
      }
    ],
    "name": "updateMinimumDeployFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]
```