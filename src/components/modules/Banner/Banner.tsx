import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
  Button,
} from '@chakra-ui/react';
import decorativeGrid from "../../../assets/images/bg-grid.svg";
import illustration from "../../../assets/images/banner-illustration.png";

function Banner(): JSX.Element {
  const lightningIcon: JSX.Element = <Icon viewBox='0 0 14 21' color='inherit'>
    <path
      fill='currentColor'
      d="M11.064.386a.625.625 0 0 1 .284.725L9.096 8.426h4.154a.625.625 0 0 1 .455 1.053l-10 10.625a.625.625 0 0 1-1.052-.612l2.25-7.317H.75a.625.625 0 0 1-.455-1.053l10-10.625a.625.625 0 0 1 .769-.113v.002Zm-8.868 10.54H5.75a.626.626 0 0 1 .598.808l-1.71 5.554 7.165-7.612H8.25a.625.625 0 0 1-.597-.81l1.71-5.553-7.167 7.612Z"
    />
  </Icon>;

  return (
    <Container pt="3.75rem" maxW="desktopMax" mb="2rem">
      <Flex mb={{ base: "4rem", md: "6rem"}} justifyContent="space-between">
        <Box maxW={{ base: "100%", md: "38.5rem"}}>
          <Heading as="h1" fontSize={{ base: "3rem", md: "4rem" }}>Discover the best free-to-play games!</Heading>
          <Text as="p" fontSize="lg" my="2rem" lineHeight="2rem" maxW="30rem">
            Track what you've played and search for what to play next!
            Plus get free premium loot!
          </Text>

          <Flex w="100%" maxW={{ base: "100%", md: "39rem" }} gap="1rem" flexDirection={{ base: "column", md: "row" }} justifyContent="stretch">
            <Button
              leftIcon={lightningIcon}
              py="1rem"
              h="3.5rem"
              flexGrow="1"
              fontSize="1.25rem"
              variant='solid'
              colorScheme="white"
              bg="white"
              color="black"
              _hover={{
                bg: "blue.200"
              }}
              _active={{
                bg: "blue.200",
                transform: 'scale(0.98)',
              }}
            >
              Get Started
              <sub style={{ marginLeft: "0.3rem", fontSize: "0.75rem" }}>it`s free</sub>
            </Button>

            <Button
              h="3.5rem"
              fontSize="1.25rem"
              flexGrow="1"
              variant='outline'
              colorScheme="white"
              color="white"
              bg="whiteAlpha.600"
              borderColor="whiteAlpha.500"
              _hover={{
                color: "blue.200",
                borderColor: "blue.200",
              }}
              _active={{
                transform: 'scale(0.98)',
              }}
            >
              Browse Games
            </Button>
          </Flex>
        </Box>

        <Box as="aside" display={{ base: "none", md: "block" }}>
          <Image
            src={illustration}
            alt="Banner illustration."
          />
        </Box>
      </Flex>

      <Image
        src={decorativeGrid}
        alt="Decorative grid image."
      />
    </Container>
  );
}

export default Banner;
