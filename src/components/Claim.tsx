import { Flex, Text, Button } from "@chakra-ui/react";
import { useClaimDividend } from "../hooks";

export default function Claim() {
    const { state, send: claimDividend } = useClaimDividend();

  function handleClaim() {
    claimDividend();
  }
        
  return (
    <Flex direction="column" align="center" mt="4">
      <Text color="white" fontSize="8xl"></Text>
      <Button colorScheme="purple" size="lg" onClick={handleClaim}>
        Claim
      </Button>
    </Flex>
  );
}