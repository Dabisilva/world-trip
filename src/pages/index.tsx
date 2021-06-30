import Head from "next/head";
import Link from "next/link";
import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";
import { Header } from "../components/Header";

export default function Home() {
  SwiperCore.use([Navigation, Pagination]);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Flex w="100vw" flexDir="column">
        <Header />

        <Image w="100vw" src="Banner.svg" alt="banner" />

        <Stack
          direction="row"
          spacing={36}
          align="center"
          justify="center"
          marginTop={20}
        >
          <Stack direction="column" spacing={6} align="center">
            <Image h={20} w={20} src="cocktail.svg" alt="cocktail" />
            <Text fontWeight="medium" fontSize="2xl">
              vida noturna
            </Text>
          </Stack>
          <Stack direction="column" spacing={6} align="center">
            <Image h={20} w={20} src="surf.svg" alt="surf" />
            <Text fontWeight="medium" fontSize="2xl">
              praia
            </Text>
          </Stack>
          <Stack direction="column" spacing={6} align="center">
            <Image h={20} w={20} src="building.svg" alt="building" />
            <Text fontWeight="medium" fontSize="2xl">
              moderno
            </Text>
          </Stack>
          <Stack direction="column" spacing={6} align="center">
            <Image h={20} w={20} src="museum.svg" alt="museum" />
            <Text fontWeight="medium" fontSize="2xl">
              clássico
            </Text>
          </Stack>
          <Stack direction="column" spacing={6} align="center">
            <Image h={20} w={20} src="earth.svg" alt="earth" />
            <Text fontWeight="medium" fontSize="2xl">
              e mais...
            </Text>
          </Stack>
        </Stack>

        <Flex align="center" justify="center" mt={20} mb={20}>
          <Flex w={24} h="px" bg="gray.600" />
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
          <Flex w="78rem" p={2}>
            <Swiper
              navigation={true}
              pagination={{
                clickable: true,
              }}
              spaceBetween={50}
              centeredSlides={true}
            >
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link href="/continent">
                  <Image
                    cursor="pointer"
                    h="28rem"
                    w="77.5rem"
                    src="europeSwiper.svg"
                    alt="europe"
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
