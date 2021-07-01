import Head from "next/head";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { CityBox } from "../components/CityBox";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continente</title>
      </Head>

      <Flex w="100vw" flexDir="column" bg="gray.50">
        <Header continent />

        <Image w="100vw" src="europeContinent.svg" alt="europeContinent" />
        <Text marginTop="-28" color="gray.10" fontSize="5xl" marginLeft="44">
          Europa
        </Text>

        <Flex
          align="center"
          justify="space-between"
          marginTop="36"
          paddingLeft="36"
          paddingRight="36"
        >
          <Text alignSelf="center" w="37.5rem" fontSize="2xl">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
          </Text>

          <Stack direction="row" spacing="10">
            <Stack align="center" justify="center" spacing="2">
              <Text color="yellow.500" fontSize="5xl" fontWeight="bold">
                50
              </Text>
              <Text color="gray.600" fontSize="2xl" fontWeight="bold">
                países
              </Text>
            </Stack>
            <Stack
              align="center"
              justify="center"
              spacing="2"
              fontWeight="bold"
            >
              <Text color="yellow.500" fontSize="5xl" fontWeight="bold">
                60
              </Text>
              <Text color="gray.600" fontSize="2xl" fontWeight="bold">
                línguas
              </Text>
            </Stack>
            <Stack
              align="center"
              justify="center"
              spacing="2"
              fontWeight="bold"
            >
              <Text color="yellow.500" fontSize="5xl" fontWeight="bold">
                27
              </Text>
              <Text color="gray.600" fontSize="2xl" fontWeight="bold">
                cidades +100
              </Text>
            </Stack>
          </Stack>
        </Flex>

        <Text
          color="gray.600"
          fontSize="5xl"
          fontWeight="bold"
          marginLeft="36"
          marginTop="20"
        >
          Cidades +100
        </Text>
        <Flex flexWrap="wrap" align="center" padding="36" paddingTop="10">
          <CityBox
            imageUrl="london.svg"
            altImage="london"
            city="Londres"
            country="Reino Unido"
            flagImage="londonFlag.svg"
          />
          <CityBox
            imageUrl="paris.svg"
            altImage="paris"
            city="Paris"
            country="França"
            flagImage="parisFlag.svg"
          />
          <CityBox
            imageUrl="paris.svg"
            altImage="paris"
            city="Paris"
            country="França"
            flagImage="parisFlag.svg"
          />
          <CityBox
            imageUrl="paris.svg"
            altImage="paris"
            city="Paris"
            country="França"
            flagImage="parisFlag.svg"
          />
          <CityBox
            imageUrl="paris.svg"
            altImage="paris"
            city="Paris"
            country="França"
            flagImage="parisFlag.svg"
          />
        </Flex>
      </Flex>
    </>
  );
}
