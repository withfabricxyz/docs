
const networks = {
  mainnet: {
    factory: '0x1754F361eEb79c778a92f656D3d72d528e579B1F',
    logic: '0x58E4036Fb5D169569627ef2F355de9d81e097E0b',
  },
  sepolia: {
    factory: '0x83a322729C3172B0cc6Bf3a3204Fa83E683c584E',
    logic: '0x7A5433eD0f561D7c98Fe7133F584923d9552B0E1',
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