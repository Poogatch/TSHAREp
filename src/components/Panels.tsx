import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import { useEthers } from "@usedapp/core";
  import { useCheckEarnings } from "../hooks";
    import Claim from "./Claim";


  
  
  interface PanelProps {
    title: string;
    stat: ReactNode;
  }
  function Panel(props: PanelProps) {
    const { title, stat } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {
    const { account } = useEthers()
    var earnings = '0';
    const checkEarnings = useCheckEarnings(account);
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          TSHAREp Dashboard
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Panel
            title={'Pending rewards'}

            stat={<Claim />}
            
          />
          <Panel
            title={'Total Rewards Distributed'}
            stat={'Coming Soon'}
          />
          <Panel
            title={'Your Claimed Rewards'}
            stat={'Cooming Soon'}
          />
        </SimpleGrid>
      </Box>
    );
  }