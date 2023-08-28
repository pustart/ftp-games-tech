import React from "react";
import { HeaderProps } from './Header.props';
import logo from '../../../assets/logos/ftp-logo.png';
import {
  Box,
  Container,
  Flex,
  Image,
  Button,
  ListItem,
  UnorderedList,
  Link,
} from '@chakra-ui/react';

function Header({ className, children, ...props }: HeaderProps): JSX.Element {
  return (
    <Box as="header" w="100vw">
      <Container p={4} maxW="desktopMax">
        <Flex alignItems="center" justifyContent="space-between">
          <Image
            src={logo}
            alt="Free-To-Play Games logotype."
            boxSize="3.5rem"
            objectFit="cover"
          />
          <Flex as="nav" gap="2.5rem">
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
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
