# DataQuiltRegistryV1
[Git Source](https://github.com/withfabricxyz/contracts/blob/278bdebcf91ed312b0e42a13dea32dd48dd6b6b8/src/finance/DataQuiltRegistryV1.sol)

**Inherits:**
ERC721

**Author:**
Fabric Inc.
ERC721 + Metadata, with custom minting functions for accounts which contributed to
a Fabric campaign.


## State Variables
### _baseUri
*Base URI for which we generate URIs for NFTs*


```solidity
string private _baseUri;
```


### _campaignMints
*Campaign specific double mint guard*


```solidity
mapping(address => mapping(address => bool)) private _campaignMints;
```


## Functions
### constructor


```solidity
constructor(string memory name, string memory symbol, string memory baseUri) ERC721(name, symbol);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`name`|`string`|the name of the token|
|`symbol`|`string`|the symbol of hte token|
|`baseUri`|`string`|the base URI, such as: `https://somehost.com/`|


### mint

*Mint a contribution token using a tokenId, which encodes the campaign address and pattern configuration*


```solidity
function mint(uint256 tokenId) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`tokenId`|`uint256`|the id of the token, which is an abi packed [campaign address, uint64(0), uint32(variant)]|


### canMint

*Check if an account can mint a token for a campaign*


```solidity
function canMint(address campaignAddress, address account) public view returns (bool);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`campaignAddress`|`address`|the address of the campaign|
|`account`|`address`|the account to check|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`bool`|true if the account can mint a token for the campaign|


### _baseURI

*See {IERC721Metadata-tokenURI}.*


```solidity
function _baseURI() internal view override returns (string memory);
```

