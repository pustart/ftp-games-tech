import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import stockImg from "../../../assets/images/stock.png";
import styles from "./GameBanner.module.scss";

function GameBanner() {
  const lightningIcon: JSX.Element = <Icon viewBox='0 0 14 21' color='green.500'>
    <path
      fill='currentColor'
      d="M9.72141 0.0684417C9.81929 0.12518 9.89502 0.213432 9.93625 0.318779C9.97749 0.424127 9.98177 0.540343 9.94841 0.648442L8.14741 6.50044H11.4704C11.5681 6.5004 11.6636 6.52896 11.7452 6.58259C11.8268 6.63622 11.8909 6.71258 11.9296 6.80223C11.9684 6.89189 11.98 6.99092 11.963 7.08709C11.9461 7.18327 11.9014 7.27239 11.8344 7.34344L3.83441 15.8434C3.75701 15.9258 3.654 15.9794 3.54219 15.9957C3.43037 16.012 3.31634 15.9899 3.21868 15.9331C3.12103 15.8762 3.0455 15.788 3.00441 15.6827C2.96332 15.5775 2.95909 15.4614 2.99241 15.3534L4.79341 9.50044H1.47041C1.37276 9.50048 1.27723 9.47192 1.19562 9.41829C1.11401 9.36466 1.04989 9.2883 1.01118 9.19865C0.972467 9.109 0.960857 9.00997 0.977781 8.91379C0.994705 8.81761 1.03942 8.7285 1.10641 8.65744L9.10641 0.157442C9.18373 0.0752409 9.28657 0.0216103 9.39823 0.00527029C9.50989 -0.0110698 9.62379 0.0108416 9.72141 0.0674417V0.0684417Z"
    />
  </Icon>;

  return (
    <Container as="article" p={{ base: "6rem 1rem 2rem 1rem", md: "3rem 0 3rem 3rem" }} maxW="desktopMax" mb="3.5rem" mx={{ base: "0", md: "1rem" }} mt={{ base: "-4.5rem", md: "0" }} borderRadius={{ base: "0", md: "1.5rem" }} bg="gradient.green">
      <Flex flexDirection={{base: "column", md: "row"}} justifyContent="space-between" alignItems="flex-start" gap="1rem">
        <Box>
          <Breadcrumb spacing='0.3rem' mb={{ base: "0.5rem", md: "2.25rem" }} color="gray.100" separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
              <BreadcrumbLink href='#'>Home Page</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href='#'>Game</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Heading as="h1" fontSize={{ base: "3rem", md: "3rem" }}>World Of Warships </Heading>
          <Text as="p" fontSize="1.25rem" m="0.5rem 0 2.5rem 0" lineHeight="2rem" maxW="40.5rem">
            World of Warships is a 3D free to play naval action-themed MMO (massively multiplayer online) from the creators of World of Tanks and World of Warplanes. The high seas cry out as the mightiest warships in history are brought back for a final round of all-out battle to the death in Wargaming’s free-to-play World of Warships!
          </Text>

          <Flex as="footer" mb={{ base: "2rem", md: "0" }} gap="1rem" flexDirection={{ base: "column", md: "row" }} justifyContent="stretch">
            <Button
              leftIcon={lightningIcon}
              py="1rem"
              h="3rem"
              maxW={{ base: "100%", md: "12.875rem" }}
              flexGrow="1"
              fontSize="1.25rem"
              variant='solid'
              colorScheme="white"
              bg="white"
              color="black"
              _hover={{
                color: "green.400",
                transform: 'scale(1.03)',
              }}
              _active={{
                transform: 'scale(0.98)',
              }}
            >
              Play Now
            </Button>

            <Button
              h="3rem"
              cursor="default"
              fontSize="1.25rem"
              maxW={{ base: "100%", md: "12.875rem" }}
              flexGrow="1"
              variant='outline'
              colorScheme="white"
              color="white"
              bg="whiteAlpha.600"
              borderColor="whiteAlpha.500"
              textTransform="uppercase"
              _hover={{
                color: "green.400",
                borderColor: "green.400",
              }}
            >
              Free
            </Button>
          </Flex>
        </Box>

        <Box as="aside">
          <Image
            className={styles["banner-mask"]}
            maxW="40rem"
            minH="28.5rem"
            src={stockImg}
            alt="Game main image."
          />
        </Box>
      </Flex>
    </Container>
  );
}

export default GameBanner;
