import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Flex, Image, Stack, Text, Button } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { Continent, useContinent } from "../context/continent";

export default function Home() {
  SwiperCore.use([Navigation, Pagination]);
  const [continents, setContinents] = useState<Continent[]>();

  const { getContinent } = useContinent();

  async function getDataContinents() {
    await fetch("http://localhost:3000/api/continentsList")
      .then((response) => response.json())
      .then((data) => {
        setContinents(data);
      });
  }

  useEffect(() => {
    getDataContinents();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Flex w="100vw" flexDir="column" bg="gray.50">
        <Header />

        <Image w="100vw" src="Banner.svg" alt="banner" />

        <Stack
          direction="row"
          spacing="36"
          align="center"
          justify="center"
          marginTop="20"
        >
          <TravelType image="cocktail">vida noturna</TravelType>
          <TravelType image="surf">praia</TravelType>
          <TravelType image="building">moderno</TravelType>
          <TravelType image="museum">clássico</TravelType>
          <TravelType image="earth">e mais...</TravelType>
        </Stack>

        <Flex align="center" justify="center" mt="20" mb="20">
          <Flex w="24" h="px" bg="gray.600" />
        </Flex>

        <Text
          fontSize="4xl"
          fontWeight="medium"
          lineHeight="3.5rem"
          textAlign="center"
        >
          Vamos nessa?
        </Text>
        <Text
          fontSize="4xl"
          fontWeight="medium"
          lineHeight="3.5rem"
          textAlign="center"
        >
          Então escolha seu continente
        </Text>

        <Flex w="100vw" justify="center" align="center" mt={14} mb={10}>
          <Flex w="77rem" p={2}>
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={50}
              centeredSlides={true}
            >
              {continents?.map((continent) => (
                <SwiperSlide key={continent.id}>
                  <Link href="/continent">
                    <a>
                      <Button
                        onClick={() => getContinent(continent)}
                        backgroundImage={continent.image}
                        variant="ghost"
                        borderRadius="none"
                        flexDir="column"
                        _hover={{ bgImage: continent.image }}
                        align="center"
                        justify="center"
                        h="28rem"
                        w="77rem"
                      >
                        <Text
                          fontSize="4xl"
                          fontWeight="medium"
                          lineHeight="3.5rem"
                          textAlign="center"
                          color="gray.50"
                        >
                          {continent.title}
                        </Text>
                        <Text
                          fontSize="2xl"
                          fontWeight="medium"
                          lineHeight="3.5rem"
                          textAlign="center"
                          color="gray.100"
                        >
                          {continent.subtitle}
                        </Text>
                      </Button>
                    </a>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
