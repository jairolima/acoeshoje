import {
  Heading, Grid, Flex, Box, Stat, Icon, Center,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup, Button, Slide, Skeleton, useDisclosure
} from "@chakra-ui/react";

import css from '@styled-system/css'

import { ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons'

import { useFetch } from '../hooks/useFetch'

declare module B3 {

  export interface Ibovespa {
    cotacao: string;
    porcentagem: string;
  }

  export interface ITSA4 {
    cotacao: string;
    porcentagem: string;
  }

  export interface RootObject {
    ibovespa: Ibovespa;
    ITSA4: ITSA4;
  }

}

const Home: React.FC = () => {

  const { data } = useFetch<B3.RootObject>('/b3')

  return (
    <>

      <Box
        bgSize="100% 100%"
        bgImage="url('/wave2.svg')"
        bgPosition="center"
        bgRepeat="no-repeat"
      >
        <Box w="100vw" h="100vh">


          <Flex pt="150px" maxW={{ base: "100%", lg: "60%" }} mx="auto" direction={{ base: "column", lg: "row" }} justifyContent="space-between" alignItems="flex-center">
            <Box>
              <Heading fontSize="56px" lineHeight="shorter" fontWeight="bold" color="black.800">IBOVESPA</Heading>
            </Box>

            <Flex direction="row">
              {!data ? <Skeleton height="60px" width="1px" /> :
                <>
                  {data?.ibovespa.porcentagem.indexOf('+') > -1 ?
                    <ArrowUpIcon mt={3} mr={3} bg="#48BB78" lineHeight="shorter" boxSize="42px" color="white" />
                    :
                    <ArrowDownIcon mt={3} mr={3} bg="#F56565" lineHeight="shorter" boxSize="42px" color="white" />
                  }
                </>
              }
              <Box>
                <Heading size="2xl" lineHeight="shorter" fontWeight="bold" color="black.400">
                  {!data ?
                    <Skeleton height="60px" width="200px" /> :
                    <Box css={css({
                      color: '#000',
                      animation: 'change 3s step-end both',
                    })}
                    >
                      {data?.ibovespa.cotacao}
                    </Box>
                  }
                </Heading>
                <Heading size="sm" ml={2} lineHeight="shorter" fontWeight="normal" color="black.800">Pontos</Heading>
              </Box>

            </Flex>
            <Box>


              {!data ? <Skeleton height="60px" width="100px" /> :

                <>
                  {data?.ibovespa.porcentagem.indexOf('+') > -1 ?
                    <Heading animation="fade" size="2xl" lineHeight="shorter" fontWeight="bold" color="green.400">
                      {data?.ibovespa.porcentagem}
                    </Heading>
                    :
                    <Heading animation="fade" size="2xl" lineHeight="shorter" fontWeight="bold" color="red.400">
                      {data?.ibovespa.porcentagem}
                    </Heading>
                  }
                </>
              }

              <Heading size="sm" ml={2} lineHeight="shorter" fontWeight="normal" color="gray.600">variação (hoje)</Heading>
            </Box>
          </Flex>


          <Center mt="100px" maxW="100%">
            <Flex w={{ base: "100%", lg: "60%" }} flexDir={{ base: "column", lg: "row" }} alignItems="flex-center">
              <Box w="100%">


                <Heading size="md">Maiores Altas</Heading>
                <StatGroup mt={6} display="flex">
                  <Stat maxW="82px">
                    <StatLabel>Sent</StatLabel>
                    <StatNumber fontSize="2xl">5,67</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Sent</StatLabel>
                    <StatNumber fontSize="2xl">245,67</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Sent</StatLabel>
                    <StatNumber fontSize="2xl">45,67</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Sent</StatLabel>
                    <StatNumber fontSize="2xl">75,67</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Sent</StatLabel>
                    <StatNumber fontSize="2xl">45,67</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="increase" />
                    23.36%
                  </StatHelpText>
                  </Stat>
                </StatGroup>


              </Box>
              <Box w="100%" ml={{ base: '0px', lg: '40px' }}>


                <Heading alignSelf="flex-start" size="md">Maiores Quedas</Heading>
                <StatGroup mt={6}>
                  <Stat maxW="82px">
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber fontSize="2xl">145,00</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber fontSize="2xl">45,94</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber fontSize="2xl">45,93</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber fontSize="2xl">45,34</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                  </Stat>

                  <Stat maxW="82px">
                    <StatLabel>Clicked</StatLabel>
                    <StatNumber fontSize="2xl">5,03</StatNumber>
                    <StatHelpText fontSize="xs">
                      <StatArrow type="decrease" />
                    9.05%
                  </StatHelpText>
                  </Stat>
                </StatGroup>


              </Box>
            </Flex>
          </Center>


        </Box>
      </Box>

    </>
  )
}


export default Home;