import {
    Box,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
  import { ReactNode} from 'react';
  import Claim from "./Claim";
  import TotalDistributed from './TotalDistributed';
  import TotalDistributedAll from './TotalDistrubutedAll';


  interface PanelProps {
    title: string;
    stat: ReactNode;
    icon: string;
  }
  function Panel(props: PanelProps) {
    const { title, stat, icon } = props;
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
            <StatLabel textAlign={"center"} fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber textAlign={"center"} fontSize={'1xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
              <Image w='30%' src={icon}></Image>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics() {

    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <Panel
            title={'Your Pending Rewards'}

            stat={<Claim/>}
            icon ={"https://tomb.finance/static/media/tomb_ftm_lp.84532366.png"}

          />
          <Panel
            title={'Total Rewards Distributed'}
            stat={<TotalDistributed/>}
            icon ={"https://tomb.finance/static/media/crypto_tomb_share.bf1a6c52.svg"}
          />
          <Panel
            title={'Your Claimed Rewards'}
            stat={<TotalDistributedAll/>}
            icon ={"https://tomb.finance/static/media/crypto_tomb_cash.f2b44ef4.svg"}

          />
        </SimpleGrid>
      </Box>
    );
  }