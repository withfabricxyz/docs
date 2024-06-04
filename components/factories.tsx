import { factories as _stpFactories } from '@withfabric/protocol-sdks/stpv1';
import { factories as _cfpFactories } from '@withfabric/protocol-sdks/cfpv1';
import { factoryAddresses as _stpV2Factories } from '@withfabric/protocol-sdks/stpv2';

import { extractChain, Chain } from 'viem';
import * as chains from 'viem/chains'

function getChain(chainId: number) : Chain | undefined {
  return extractChain({
    // @ts-ignore
    chains: Object.values(chains),
    id: chainId,
  });
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

export function stpV2Factories() {
  return factoryData(_stpV2Factories());
};

export function ChainList({ chains } : { chains: number[] }) {
  const basic = chains.map(x => getChain(x)?.name || x).join(', ');

  return <span>{basic}</span>
}

export function StpChainList() {
  return <ChainList chains={stpFactories().map(x => Number(x.chainId))} />
}

export function StpV2ChainList() {
  return <ChainList chains={stpV2Factories().map(x => Number(x.chainId))} />
}