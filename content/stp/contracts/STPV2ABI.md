# STPv2 ABI

```json copy
[
  {
    "type": "constructor",
    "inputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "receive",
    "stateMutability": "payable"
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
    "name": "approve",
    "inputs": [
      {
        "name": "spender",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "balanceOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "numSeconds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractDetail",
    "inputs": [],
    "outputs": [
      {
        "name": "detail",
        "type": "tuple",
        "internalType": "struct ContractView",
        "components": [
          {
            "name": "tierCount",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "subCount",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "supplyCap",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "transferRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "currency",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "creatorBalance",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "numCurves",
            "type": "uint8",
            "internalType": "uint8"
          },
          {
            "name": "rewardShares",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "rewardBalance",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "rewardSlashGracePeriod",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "rewardSlashable",
            "type": "bool",
            "internalType": "bool"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "contractURI",
    "inputs": [],
    "outputs": [
      {
        "name": "uri",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "createRewardCurve",
    "inputs": [
      {
        "name": "curve",
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
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "createTier",
    "inputs": [
      {
        "name": "params",
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
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "curveDetail",
    "inputs": [
      {
        "name": "curveId",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "outputs": [
      {
        "name": "curve",
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
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "deactivateSubscription",
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
    "name": "feeDetail",
    "inputs": [],
    "outputs": [
      {
        "name": "fee",
        "type": "tuple",
        "internalType": "struct FeeParams",
        "components": [
          {
            "name": "protocolRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "protocolBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientReferralBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientRecipient",
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
    "name": "getApproved",
    "inputs": [
      {
        "name": "",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "grantTime",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "numSeconds",
        "type": "uint48",
        "internalType": "uint48"
      },
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "initialize",
    "inputs": [
      {
        "name": "params",
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
        "name": "tier",
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
        "name": "rewards",
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
        "name": "curve",
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
      },
      {
        "name": "fees",
        "type": "tuple",
        "internalType": "struct FeeParams",
        "components": [
          {
            "name": "protocolRecipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "protocolBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientReferralBps",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "clientRecipient",
            "type": "address",
            "internalType": "address"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "isApprovedForAll",
    "inputs": [
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "issueRewardShares",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "numShares",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "name": "numTokens",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "mintAdvanced",
    "inputs": [
      {
        "name": "params",
        "type": "tuple",
        "internalType": "struct MintParams",
        "components": [
          {
            "name": "tierId",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "recipient",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "referrer",
            "type": "address",
            "internalType": "address"
          },
          {
            "name": "referralCode",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "purchaseValue",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "mintFor",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "numTokens",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
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
    "name": "name",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
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
    "name": "ownerOf",
    "inputs": [
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "owner",
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
    "name": "recoverCurrency",
    "inputs": [
      {
        "name": "tokenAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "recipientAddress",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "tokenAmount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "referralDetail",
    "inputs": [
      {
        "name": "code",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "value",
        "type": "tuple",
        "internalType": "struct ReferralLib.Code",
        "components": [
          {
            "name": "basisPoints",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "permanent",
            "type": "bool",
            "internalType": "bool"
          },
          {
            "name": "referrer",
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
    "name": "refund",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "numTokens",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "revokeTime",
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
    "name": "safeTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "safeTransferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "data",
        "type": "bytes",
        "internalType": "bytes"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setApprovalForAll",
    "inputs": [
      {
        "name": "operator",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "setGlobalSupplyCap",
    "inputs": [
      {
        "name": "supplyCap",
        "type": "uint64",
        "internalType": "uint64"
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
    "name": "setReferralCode",
    "inputs": [
      {
        "name": "code",
        "type": "uint256",
        "internalType": "uint256"
      },
      {
        "name": "basisPoints",
        "type": "uint16",
        "internalType": "uint16"
      },
      {
        "name": "permanent",
        "type": "bool",
        "internalType": "bool"
      },
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
    "name": "setTransferRecipient",
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
    "name": "slash",
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
    "name": "stpVersion",
    "inputs": [],
    "outputs": [
      {
        "name": "version",
        "type": "uint8",
        "internalType": "uint8"
      }
    ],
    "stateMutability": "pure"
  },
  {
    "type": "function",
    "name": "subscriptionOf",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "subscription",
        "type": "tuple",
        "internalType": "struct SubscriberView",
        "components": [
          {
            "name": "tierId",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "tokenId",
            "type": "uint64",
            "internalType": "uint64"
          },
          {
            "name": "expiresAt",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "purchaseExpiresAt",
            "type": "uint48",
            "internalType": "uint48"
          },
          {
            "name": "rewardShares",
            "type": "uint256",
            "internalType": "uint256"
          },
          {
            "name": "rewardBalance",
            "type": "uint256",
            "internalType": "uint256"
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "supportsInterface",
    "inputs": [
      {
        "name": "interfaceId",
        "type": "bytes4",
        "internalType": "bytes4"
      }
    ],
    "outputs": [
      {
        "name": "",
        "type": "bool",
        "internalType": "bool"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "symbol",
    "inputs": [],
    "outputs": [
      {
        "name": "",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tierBalanceOf",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      },
      {
        "name": "account",
        "type": "address",
        "internalType": "address"
      }
    ],
    "outputs": [
      {
        "name": "numSeconds",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tierDetail",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      }
    ],
    "outputs": [
      {
        "name": "tier",
        "type": "tuple",
        "internalType": "struct TierLib.State",
        "components": [
          {
            "name": "subCount",
            "type": "uint32",
            "internalType": "uint32"
          },
          {
            "name": "id",
            "type": "uint16",
            "internalType": "uint16"
          },
          {
            "name": "params",
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
          }
        ]
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "tokenURI",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [
      {
        "name": "uri",
        "type": "string",
        "internalType": "string"
      }
    ],
    "stateMutability": "view"
  },
  {
    "type": "function",
    "name": "topUp",
    "inputs": [
      {
        "name": "numTokens",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "function",
    "name": "transferFrom",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferFunds",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "internalType": "address"
      },
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "transferRewardsFor",
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
    "name": "updateClientFeeRecipient",
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
    "name": "updateMetadata",
    "inputs": [
      {
        "name": "uri",
        "type": "string",
        "internalType": "string"
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
    "name": "updateTier",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      },
      {
        "name": "params",
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
      }
    ],
    "outputs": [],
    "stateMutability": "nonpayable"
  },
  {
    "type": "function",
    "name": "yieldRewards",
    "inputs": [
      {
        "name": "amount",
        "type": "uint256",
        "internalType": "uint256"
      }
    ],
    "outputs": [],
    "stateMutability": "payable"
  },
  {
    "type": "event",
    "name": "Approval",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "spender",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ApprovalForAll",
    "inputs": [
      {
        "name": "owner",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "operator",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "approved",
        "type": "bool",
        "indexed": false,
        "internalType": "bool"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "BatchMetadataUpdate",
    "inputs": [
      {
        "name": "_fromTokenId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "_toTokenId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ClientFeeRecipientChange",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "CurveCreated",
    "inputs": [
      {
        "name": "curveId",
        "type": "uint8",
        "indexed": false,
        "internalType": "uint8"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "FeeTransfer",
    "inputs": [
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "tokensTransferred",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GlobalSupplyCapChange",
    "inputs": [
      {
        "name": "supplyCap",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Grant",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint64",
        "indexed": true,
        "internalType": "uint64"
      },
      {
        "name": "secondsGranted",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      },
      {
        "name": "expiresAt",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "GrantRevoke",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint64",
        "indexed": true,
        "internalType": "uint64"
      },
      {
        "name": "time",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      },
      {
        "name": "expiresAt",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Initialized",
    "inputs": [
      {
        "name": "version",
        "type": "uint64",
        "indexed": false,
        "internalType": "uint64"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "MetadataUpdate",
    "inputs": [
      {
        "name": "_tokenId",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
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
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Purchase",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint64",
        "indexed": true,
        "internalType": "uint64"
      },
      {
        "name": "tokensTransferred",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "timePurchased",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      },
      {
        "name": "expiresAt",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReferralDestroyed",
    "inputs": [
      {
        "name": "code",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReferralPayout",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "referrer",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "referralId",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      },
      {
        "name": "rewardAmount",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "ReferralSet",
    "inputs": [
      {
        "name": "code",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Refund",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint64",
        "indexed": true,
        "internalType": "uint64"
      },
      {
        "name": "tokensTransferred",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      },
      {
        "name": "timeReclaimed",
        "type": "uint48",
        "indexed": false,
        "internalType": "uint48"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "RewardsAllocated",
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
    "name": "RewardsClaimed",
    "inputs": [
      {
        "name": "account",
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
    "type": "event",
    "name": "SharesBurned",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "numShares",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SharesIssued",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "numShares",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "SlashTransferFallback",
    "inputs": [
      {
        "name": "account",
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
    "name": "SwitchTier",
    "inputs": [
      {
        "name": "tokenId",
        "type": "uint64",
        "indexed": true,
        "internalType": "uint64"
      },
      {
        "name": "oldTier",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16"
      },
      {
        "name": "newTier",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TierCreated",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TierUpdated",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "indexed": false,
        "internalType": "uint16"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TopUp",
    "inputs": [
      {
        "name": "tokensIn",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Transfer",
    "inputs": [
      {
        "name": "from",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "to",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "id",
        "type": "uint256",
        "indexed": true,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "TransferRecipientChange",
    "inputs": [
      {
        "name": "recipient",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      }
    ],
    "anonymous": false
  },
  {
    "type": "event",
    "name": "Withdraw",
    "inputs": [
      {
        "name": "account",
        "type": "address",
        "indexed": true,
        "internalType": "address"
      },
      {
        "name": "tokensTransferred",
        "type": "uint256",
        "indexed": false,
        "internalType": "uint256"
      }
    ],
    "anonymous": false
  },
  {
    "type": "error",
    "name": "AllocationWithoutShares",
    "inputs": []
  },
  {
    "type": "error",
    "name": "DeactivationFailure",
    "inputs": []
  },
  {
    "type": "error",
    "name": "GateCheckFailure",
    "inputs": []
  },
  {
    "type": "error",
    "name": "GateInvalid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "GlobalSupplyLimitExceeded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InsufficientBalance",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidAccount",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidBasisPoints",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidCapture",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidCurve",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidFeeParams",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidHolder",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidInitialization",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidOwner",
    "inputs": []
  },
  {
    "type": "error",
    "name": "InvalidTokenParams",
    "inputs": []
  },
  {
    "type": "error",
    "name": "MaxCommitmentExceeded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NoRewardsToClaim",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NoSharesToBurn",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotAuthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotInitializing",
    "inputs": []
  },
  {
    "type": "error",
    "name": "NotSlashable",
    "inputs": []
  },
  {
    "type": "error",
    "name": "Reentrancy",
    "inputs": []
  },
  {
    "type": "error",
    "name": "ReferralLocked",
    "inputs": []
  },
  {
    "type": "error",
    "name": "SubscriptionNotFound",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierEndExceeded",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierHasNoSupply",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      }
    ]
  },
  {
    "type": "error",
    "name": "TierInvalidDuration",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierInvalidMintPrice",
    "inputs": [
      {
        "name": "mintPrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "TierInvalidRenewalPrice",
    "inputs": [
      {
        "name": "renewalPrice",
        "type": "uint256",
        "internalType": "uint256"
      }
    ]
  },
  {
    "type": "error",
    "name": "TierInvalidSupplyCap",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierInvalidSwitch",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierNotFound",
    "inputs": [
      {
        "name": "tierId",
        "type": "uint16",
        "internalType": "uint16"
      }
    ]
  },
  {
    "type": "error",
    "name": "TierNotStarted",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierRenewalsPaused",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierTimingInvalid",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TierTransferDisabled",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TokenAlreadyExists",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TokenDoesNotExist",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TokenNotAuthorized",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TransferToExistingSubscriber",
    "inputs": []
  },
  {
    "type": "error",
    "name": "TransferToZeroAddress",
    "inputs": []
  }
]
```