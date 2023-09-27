
const networks = {
  mainnet: {
    factory: '0x8e78d80599197c501353453f73b0b92a402077d6',
    logic: '0x4abd5d3af06ce5356a455eb5ecdc1f07aa9c083a',
  },
  sepolia: {
    factory: '0x83a322729C3172B0cc6Bf3a3204Fa83E683c584E',
    logic: '0x7A5433eD0f561D7c98Fe7133F584923d9552B0E1',
  },
  polygon: {
    factory: '0xf53e3729aC1caDd24D5986b2738D0DEE5f4eD30A',
    logic: '0x1754F361eEb79c778a92f656D3d72d528e579B1F',
  },
  arbitrum: {
    factory: '0x24379629781d03a0Fe67D9712FD2d76a92EfEF14',
    logic: '0xf53e3729aC1caDd24D5986b2738D0DEE5f4eD30A',
  },
  optimism: {
    factory: '0x19ead00ce8961cffca0551244dc07d87e6ff8f7e',
    logic: '0x24379629781d03a0fe67d9712fd2d76a92efef14',
  },
  zora: {
    factory: '0xf53e3729aC1caDd24D5986b2738D0DEE5f4eD30A',
    logic: '0x58E4036Fb5D169569627ef2F355de9d81e097E0b',
  },
};

export function explorerBaseUrl(chainName: string) : string {
  if(chainName === 'mainnet') {
    return 'https://etherscan.io';
  } else if(chainName === 'polygon') {
    return 'https://polygonscan.com';
  } else if(chainName === 'arbitrum') {
    return 'https://arbiscan.io';
  } else if(chainName === 'optimism') {
    return 'https://optimistic.etherscan.io';
  } else if(chainName === 'zora') {
    return 'https://explorer.zora.energy';
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