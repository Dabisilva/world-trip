import Head from "next/head";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Continent() {
  return (
    <>
      <Head>
        <title>Continente</title>
      </Head>

      <Flex w="100vw" h="100vh" flexDir="column">
        <Header continent />

        <Image src="Banner.svg" alt="banner" />
      </Flex>
    </>
  );
}
