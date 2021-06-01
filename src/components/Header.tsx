import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

export function Header() {
  return (
    <Flex align="center" justify="space-around" h="28" w="6xl">
      <Link href="/">
        <IoIosArrowBack />
      </Link>
      <Image src="Logo.svg" alt="banner" />
    </Flex>
  );
}
