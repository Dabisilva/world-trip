import Head from "next/head";
import { Flex, Image } from "@chakra-ui/react";
import { Header } from "../components/Header";
export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Flex w="100vw" h="100vh" flexDir="column">
        <Header />

        <Image src="Banner.svg" alt="banner" />
      </Flex>
    </>
  );
}
