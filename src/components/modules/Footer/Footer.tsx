import React from "react";
import logo from '../../../assets/logos/ftp-logo.png';
import twiIcon from '../../../assets/icons/twitter-icon.svg';
import ytIcon from '../../../assets/icons/youtube-icon.svg';
import instIcon from '../../../assets/icons/instagram-icon.svg';
import ghIcon from '../../../assets/icons/gh-icon.svg';
import {
  Box,
  Container,
  Flex,
  Image,
  Button,
  ListItem,
  UnorderedList,
  Link,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';

function Footer(): JSX.Element {
  return (
    <Box as="footer" w="100vw" h="400px" bg="gray.800" py={16}>
      <Container maxW="desktopMax">
        <Flex alignItems="flex-start" justifyContent="space-between">
          <Flex flexDirection="column" justifyContent="flex-start" gap={8}>
            <Image
              src={logo}
              alt="Free-To-Play Games logotype."
              boxSize="3.5rem"
              objectFit="cover"
            />
            <Flex>
              <UnorderedList m="0" styleType="none" display="flex" alignItems="center" justifyContent="space-between" gap="1.75rem">
                <ListItem>
                  <LinkBox>
                    <Image
                      src={twiIcon}
                      alt="Twitter icon."
                      boxSize="1.25rem"
                      objectFit="cover"
                    />
                    <LinkOverlay href="https://github.com/pustart/ftp-games-tech" isExternal />
                  </LinkBox>
                </ListItem>
                <ListItem>
                  <LinkBox>
                    <Image
                      src={ytIcon}
                      alt="Youtube icon."
                      boxSize="1.25rem"
                    />
                    <LinkOverlay href="https://github.com/pustart/ftp-games-tech" isExternal />
                  </LinkBox>
                </ListItem>
                <ListItem>
                  <LinkBox>
                    <Image
                      src={instIcon}
                      alt="Instagram icon."
                      boxSize="1.25rem"
                    />
                    <LinkOverlay href="https://github.com/pustart/ftp-games-tech" isExternal />
                  </LinkBox>
                </ListItem>
                <ListItem>
                  <LinkBox>
                    <Image
                      src={ghIcon}
                      alt="GitHub icon."
                      boxSize="1.25rem"
                      objectFit="cover"
                    />
                    <LinkOverlay href="https://github.com/pustart/ftp-games-tech" isExternal />
                  </LinkBox>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
