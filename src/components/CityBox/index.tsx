import { Flex, Image, Box } from "@chakra-ui/react";

interface CityBoxProps {
  imageUrl: string;
  altImage?: string;
  city: string;
  country: string;
  flagImage: string;
}

export function CityBox({
  imageUrl,
  city,
  country,
  altImage,
  flagImage,
}: CityBoxProps) {
  return (
    <Box
      maxW="64"
      h="72"
      borderWidth="1px"
      borderColor="yellow.500"
      borderRadius="lg"
      overflow="hidden"
      marginRight="12"
      marginBottom="12"
    >
      <Image src={imageUrl} alt={altImage} />

      <Flex align="center" justify="space-between" padding="6">
        <Flex flexDir="column">
          <Box
            color="gray.600"
            fontWeight="bold"
            letterSpacing="wide"
            fontSize="xl"
            textTransform="uppercase"
            marginBottom="3"
          >
            {city}
          </Box>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
          >
            {country}
          </Box>
        </Flex>
        <Image src={flagImage} alt="flag" />
      </Flex>
    </Box>
  );
}
