import Head from "next/head";
import { Flex, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { RiErrorWarningLine } from "react-icons/ri";
import { Header } from "../components/Header";
import { CityBox } from "../components/CityBox";
import { useContinent } from "../context/continent";

export default function Continent() {
  const { continent } = useContinent();

  return (
    <>
      <Head>
        <title>Continente</title>
      </Head>

      <Flex w="100vw" flexDir="column" bg="gray.50">
        <Header continent />

        <Image
          w="100vw"
          src={continent.image}
          h="30rem"
          alt={continent.title}
        />
        <Text marginTop="-28" color="gray.10" fontSize="5xl" marginLeft="44">
          {continent.title}
        </Text>

        <Flex
          align="center"
          justify="space-between"
          marginTop="36"
          paddingLeft="36"
          paddingRight="36"
        >
          <Text alignSelf="center" w="37.5rem" fontSize="2xl">
            {continent.resume}
          </Text>

          <Stack direction="row" spacing="10">
            <Stack align="center" justify="center" spacing="2">
              <Text color="yellow.500" fontSize="5xl" fontWeight="bold">
                {continent.countries}
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
                {continent.languages}
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
                {continent.citys.length}
              </Text>
              <Stack
                direction="row"
                spacing="1"
                align="center"
                justify="center"
              >
                <Text color="gray.600" fontSize="2xl" fontWeight="bold">
                  cidades +100
                </Text>
                <Tooltip
                  hasArrow
                  label="+ 100 cidades"
                  bg="gray.10"
                  color="gray.600"
                >
                  <Text>
                    <RiErrorWarningLine size={16} color="#999999" />
                  </Text>
                </Tooltip>
              </Stack>
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
          {continent.citys.map((city) => (
            <CityBox
              key={city.name}
              imageUrl="london.svg"
              altImage="london"
              city={city.name}
              country={city.country}
              flagImage="londonFlag.svg"
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
