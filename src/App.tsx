import theme from "./theme";
import Layout from "./components/Layout";
import {
  Box,
  Center,
  Heading,
  Flex,
  ChakraProvider,
  useDisclosure
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
      backgroundImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url('https://tomb.finance/static/media/home.87c905bf.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundClip="fill">
        <Box
          position="absolute"
          top="10%"
          transform="translateY(-50%, -50%)"
        >
          <BasicStatistics></BasicStatistics>
        </Box>

        <Box>
        
        </Box>
      
    </Center>

    </Flex>
      
    </ChakraProvider>
  );
}

export default App;
