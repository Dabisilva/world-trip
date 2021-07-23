import { ReactNode } from "react";
import { Image, Stack, Text } from "@chakra-ui/react";

interface TravelTypeProps {
  children: ReactNode;
  image: string;
}

export function TravelType({ children, image }: TravelTypeProps) {
  return (
    <Stack direction="column" spacing={6} align="center">
      <Image h={20} w={20} src={`${image}.svg`} alt="cocktail" />
      <Text fontWeight="medium" fontSize="2xl">
        {children}
      </Text>
    </Stack>
  );
}
