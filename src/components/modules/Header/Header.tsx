import {
  Box,
  Container,
  Flex,
  Image,
  Button,
  ListItem,
  UnorderedList,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from '../../../assets/logos/ftp-logo.png';

function Header(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" w="100vw">
      <Container p={{base: "0.5rem 1rem", md: "1rem"}} maxW="desktopMax">
        <Flex alignItems="center" justifyContent="space-between">
          <Image
            zIndex={{ base: "1", md: "0" }}
            src={logo}
            alt="Free-To-Play Games logotype."
            boxSize="3.5rem"
            objectFit="cover"
          />
          <Flex as="nav" gap="2.5rem" display={{ base: "none", md: "flex" }}>
            <UnorderedList styleType="none" display="flex" alignItems="center" justifyContent="space-between" gap="2.5rem">
              <ListItem>
                <Link href="#">
                  Free Games
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  Browser Games
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  Special Offers
                </Link>
              </ListItem>
              <ListItem>
                <Link href="#">
                  Top 2023
                </Link>
              </ListItem>
            </UnorderedList>
            <Button
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
            >Join Free</Button>
          </Flex>

          <IconButton
            display={{ base: "block", md: "none" }}
            onClick={onOpen}
            mr="-0.5rem"
            colorScheme='white'
            aria-label='Open hamburger menu'
            icon={<HamburgerIcon w="1.75rem" h="1.75rem" />}
          />

          <Drawer onClose={onClose} isOpen={isOpen} size="full">
            <DrawerOverlay />
            <DrawerContent bg="gray.800">
              <DrawerCloseButton />
              <DrawerHeader mt="2.5rem" ml="1.75rem">Menu</DrawerHeader>
              <DrawerBody color="white" mx="1.75rem">
                <Flex as="nav" gap="2.5rem" display="flex" flexDirection="column">
                  <UnorderedList styleType="none" m="0" display="flex" flexDirection="column" justifyContent="space-between" gap="1.75rem">
                    <ListItem>
                      <Link href="#">
                        Free Games
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
                        Browser Games
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
                        Special Offers
                      </Link>
                    </ListItem>
                    <ListItem>
                      <Link href="#">
                        Top 2023
                      </Link>
                    </ListItem>
                  </UnorderedList>
                  <Button
                    maxW="9.875rem"
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
                  >Join Free</Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
