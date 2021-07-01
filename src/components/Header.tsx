import Link from "next/link";
import { Flex, Image } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";

interface HeaderProps {
  continent?: boolean;
}

export function Header({ continent }: HeaderProps) {
  return (
    <Flex
      align="center"
      justify={continent ? "space-around" : "center"}
      h="28"
      w="100vw"
      padding="6"
    >
      {continent && (
        <Link href="/">
          <IoIosArrowBack size={32} />
        </Link>
      )}
      <Image src="Logo.svg" alt="logo" />

      {continent && <div />}
    </Flex>
  );
}
