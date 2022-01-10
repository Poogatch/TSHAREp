import theme from "./theme";
import Layout from "./components/Layout";
import {
  Box,
  Center,
  SimpleGrid,
  Flex,
  ChakraProvider,
  useDisclosure,
  chakra,
  Stack,
  Text
} from "@chakra-ui/react";

import "@fontsource/inter";
import BasicStatistics from "./components/Panels";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <ChakraProvider theme={theme}>
      <Layout>
      </Layout>
      
      <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    padding={6}
      h="100vh"
      bg="gray.800"
    >
      
    <Center color="white" w="full" h="full" 
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://tomb.finance/static/media/cemetery.10f2f6b9.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundClip="fill">
        <Box
          position="absolute"
          top="10%"
          transform="translateY(-50%, -50%)"
        >
          <Box>
            < chakra.h1
              textAlign={'center'}
              fontSize={'4xl'}
              py={0}
              fontWeight={'bold'}>
              TSHAREp Dashboard
            </chakra.h1>
          </Box>
          <BasicStatistics></BasicStatistics>
            <Stack pt={10} spacing={5} align={"center"} textAlign={"center"} >
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>TSHAREP  live on Spooky Swap - Reflecting TSHARE</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}} >Contract:</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{base:'sm'}} >0x146A1af5eA6088839695383E94D34BD88e5E388b</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}></Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}></Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Tokenomics:</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Sell tax 15% split up:</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Auto Liquidity 4%</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Reflections of $TSHARE 8%</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Marketing 3%</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}></Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}>Set slippage to 15-20% depending on current volume</Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}}></Text>
              <Text color={"white"} textShadow='1px 1px purple' fontSize={{sm:'sm', lg:'2x1'}} w={"50%"}>Dashboard/general site improvements are in development but while you wait feel free to connect your MetaMask and click the claim button to get your rewards without having to buy or sell the token as is common with most circulating printer tokens.</Text>
            </Stack>
        </Box>
    </Center>

    </Flex>
      
    </ChakraProvider>
  );
}

export default App;
