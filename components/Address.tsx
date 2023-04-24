
const networks = {
  mainnet: {
    factory: '0x8e78d80599197c501353453f73b0b92a402077d6',
    logic: '0x4abd5d3af06ce5356a455eb5ecdc1f07aa9c083a',
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