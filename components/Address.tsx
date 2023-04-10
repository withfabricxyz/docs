
const networks = {
  mainnet: {
    factory: '0x1754F361eEb79c778a92f656D3d72d528e579B1F',
    logic: '0x58E4036Fb5D169569627ef2F355de9d81e097E0b',
  },
  sepolia: {
    factory: '0x04Ec36A3D4b162C4F4FB8471e3978fABBf882f40',
    logic: '0xBE4C766225a27F2643983ba58bAFc7996Bca5e51',
  },
};

export function explorerBaseUrl(chainName: string) : string {
  if(chainName === 'mainnet') {
    return 'https://etherscan.io';
  }
  return `https://${chainName}.etherscan.io`;
}

export function Address({ name, chain } : { name: string, chain?: string }) {
  let address = networks[chain || 'mainnet'][name];
  if(!chain) {
    return <span>{address}</span>
  }
  return <a href={`${explorerBaseUrl(chain)}/address/${address}`} target='_blank'>{address}</a>;
}