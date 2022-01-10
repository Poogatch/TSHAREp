import { Flex, Text, Button } from "@chakra-ui/react";
import { useClaimDividend } from "../hooks";
import { useEthers } from "@usedapp/core";
import { useCheckEarnings } from "../hooks";
import { useCoingeckoTokenPrice } from '@usedapp/coingecko'

export default function Claim() {
    const { send: claimDividend } = useClaimDividend();
    const { account } = useEthers()
    const pendingRewards = useCheckEarnings(account);
    const TSHARE_CONTRACT = "0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37"
    const tsharePrice = useCoingeckoTokenPrice(TSHARE_CONTRACT, 'usd', 'fantom')

  function handleClaim() {
    claimDividend();
  }
        
  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="sm">{pendingRewards ? pendingRewards.toNumber() * 0.000000000000000001 : 0}</Text>
      <Text color="white" fontSize="sm">{"$" + (Math.round((pendingRewards ? pendingRewards.toNumber() * 0.000000000000000001 : 0) * Number(tsharePrice) * 100) / 100).toFixed(2)}</Text>
      <Button colorScheme="purple" size="lg" onClick={handleClaim}>
        Claim
      </Button>
    </Flex>
  );
}