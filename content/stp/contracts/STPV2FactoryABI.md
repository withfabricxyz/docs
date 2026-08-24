# STPv2 Factory ABI

```json copy
[
  {
    "type": "constructor",
    "inputs": [
      {
        "name": "stpImplementation",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "protocolFeeRecipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "acceptOwnership",
    "inputs": [],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "deploySubscription",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct DeployParams",
        "components": [
          {
            "name": "clientFeeBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientReferralShareBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientFeeRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "deployKey",
            "type": "bytes",
            "internalType": "bytes"
          },
          {
            "name": "initParams",
            "type": "tuple",
            "internalType": "struct InitParams",
            "components": [
              {
                "name": "name",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "symbol",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "contractUri",
                "type": "string",
                "internalType": "string"
              },
              {
                "name": "owner",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "currencyAddress",
                "type": "address",
                "internalType": "address"
              },
              {
                "name": "globalSupplyCap",
                "type": "uint64",
                "internalType": "uint64"
              }
            ]
          },
          {
            "name": "tierParams",
            "type": "tuple",
            "internalType": "struct Tier",
            "components": [
              {
                "name": "periodDurationSeconds",
                "type": "uint32",
                "internalType": "uint32"
              },
              {
                "name": "maxSupply",
                "type": "uint32",
                "internalType": "uint32"
              },
              {
                "name": "maxCommitmentSeconds",
                "type": "uint48",
                "internalType": "uint48"
              },
              {
                "name": "startTimestamp",
                "type": "uint48",
                "internalType": "uint48"
              },
              {
                "name": "endTimestamp",
                "type": "uint48",
                "internalType": "uint48"
              },
              {
                "name": "rewardCurveId",
                "type": "uint8",
                "internalType": "uint8"
              },
              {
                "name": "rewardBasisPoints",
                "type": "uint16",
                "internalType": "uint16"
              },
              {
                "name": "paused",
                "type": "bool",
                "internalType": "bool"
              },
              {
                "name": "transferrable",
                "type": "bool",
                "internalType": "bool"
              },
              {
                "name": "initialMintPrice",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "pricePerPeriod",
                "type": "uint256",
                "internalType": "uint256"
              },
              {
                "name": "gate",
                "type": "tuple",
                "internalType": "struct Gate",
                "components": [
                  {
                    "name": "gateType",
                    "type": "uint8",
                    "internalType": "enum GateType"
                  },
                  {
                    "name": "contractAddress",
                    "type": "address",
                    "internalType": "address"
                  },
                  {
                    "name": "componentId",
                    "type": "uint256",
                    "internalType": "uint256"
                  },
                  {
                    "name": "balanceMin",
                    "type": "uint256",
                    "internalType": "uint256"
                  }
                ]
              }
            ]
          },
          {
            "name": "rewardParams",
            "type": "tuple",
            "internalType": "struct RewardParams",
            "components": [
              {
                "name": "slashGracePeriod",
                "type": "uint32",
                "internalType": "uint32"
              },
              {
                "name": "slashable",
                "type": "bool",
                "internalType": "bool"
              }
            ]
          },
          {
            "name": "curveParams",
            "type": "tuple",
            "internalType": "struct CurveParams",
            "components": [
              {
                "name": "numPeriods",
                "type": "uint8",
                "internalType": "uint8"
              },
              {
                "name": "formulaBase",
                "type": "uint8",
                "internalType": "uint8"
              },
              {
                "name": "periodSeconds",
                "type": "uint48",
                "internalType": "uint48"
              },
              {
                "name": "startTimestamp",
                "type": "uint48",
                "internalType": "uint48"
              },
              {
                "name": "minMultiplier",
                "type": "uint8",
                "internalType": "uint8"
              }
            ]
          }
        ]
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "feeSchedule",
    "inputs": [],
    "outputs": [
      {
        "name": "schedule",
        "type": "tuple",
        "internalType": "struct FeeScheduleView",
        "components": [
          {
            "name": "deployFee",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "protocolFeeBps",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "multicall",
    "inputs": [
      {
        "name": "data",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bytes[]",
        "internalType": "bytes[]"
      }
    ],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "pendingOwner",
    "inputs": [],
    "outputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "rolesOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "roles",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "setDeployFee",
    "inputs": [
      {
        "name": "deployFeeWei",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setPendingOwner",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setProtocolFeeRecipient",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setRoles",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "roles",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateClientFeeRecipient",
    "inputs": [
      {
        "name": "deployment",
        "type": "address",
        "internalType": "address payable"
      },
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "updateProtocolFeeRecipient",
    "inputs": [
      {
        "name": "deployment",
        "type": "address",
        "internalType": "address payable"
      },
      {
        "name": "recipient",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "event",
    "name": "DeployFeeChange",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "DeployFeeTransfer",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Deployment",
    "inputs": [
      {
        "name": "deployment",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "deployKey",
        "type": "bytes",
        "indexed": false,
        "internalType": "bytes"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerChanged",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "OwnerProposed",
    "inputs": [
      {
        "name": "proposed",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ProtocolFeeRecipientChange",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": false,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RoleChanged",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "role",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "FeeInvalid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidAccount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidFeeRecipient",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidImplementation",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotAuthorized",
    "inputs": []
  }
]
```