import { Flex, Text } from "@chakra-ui/react";
import { useDividendsPerShare, useDividendsPerShareAccuracyFactor, useShares } from "../hooks";
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'
import { useEthers } from "@usedapp/core";

export default function TotalDistributedAll() {
    const { account } = useEthers()
    const dividendsPerShare = useDividendsPerShare();
    const dividendsPerShareAccuracyFactor = useDividendsPerShareAccuracyFactor();
    const shares = useShares(account);
    const TSHARE_CONTRACT = "0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37";
    const tsharePrice = useCoingeckoTokenPrice(TSHARE_CONTRACT, 'usd', 'fantom');
    const totalDistributed = shares * (dividendsPerShare / dividendsPerShareAccuracyFactor)
        
  return(
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="sm">{totalDistributed ? totalDistributed * 0.000000000000000001 : 0}</Text>
      <Text color="white" fontSize="sm">{"$" + (Math.round((totalDistributed ? totalDistributed * 0.000000000000000001 : 0) * Number(tsharePrice) * 100) / 100).toFixed(2)}</Text>
    </Flex>
  );
}