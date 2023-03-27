
const networks = {
  mainnet: {
    factory: '0xdeadbeef',
    logic: '0xdeadbeef',
  },
  sepolia: {
    factory: '0xsepdeadbeef',
    logic: '0xsepdeadbeef',
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