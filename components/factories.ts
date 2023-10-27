import { factories as _stpFactories } from '@withfabric/protocol-sdks/stpv1';
import { factories as _cfpFactories } from '@withfabric/protocol-sdks/cfpv1';

import * as chains from 'viem/chains'
import { Chain } from 'viem';

function getChain(chainId: number) : Chain | undefined {
  return Object.values(chains).find(x => x.id === chainId);
}

function factoryData(factories: any) {
  return Object.entries(factories).map(([chainId, address]) => {
    const chain = getChain(Number(chainId));
    const name = chain?.name || chainId;
    const explorer = chain?.blockExplorers?.default?.url || `https://${name.toLowerCase()}.etherscan.io`;
    const href = `${explorer}/address/${address}`;
    return {
      chainId,
      name: name,
      address,
      href,
    }
  });
}
export function cfpFactories() {
  return factoryData(_cfpFactories);
};

export function stpFactories() {
  return factoryData(_stpFactories);
};