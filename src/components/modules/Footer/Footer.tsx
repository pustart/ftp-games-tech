import logo from '../../../assets/logos/ftp-logo.png';
import twiIcon from '../../../assets/icons/twitter-icon.svg';
import fbIcon from '../../../assets/icons/facebook-icon.svg';
import ghIcon from '../../../assets/icons/gh-icon.svg';
import {
  Box,
  Container,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  Link,
  LinkBox,
  Heading,
  LinkOverlay,
} from '@chakra-ui/react';

function Footer(): JSX.Element {
  return (
    <Box as="footer" w="100vw" minH="16rem" bg="gray.800" py={{ base: "2rem", md: "4rem" }}>
      <Container maxW="desktopMax">
        <Flex flexDirection={{ base: "column", md: "row" }} alignItems={{ base: "center", md: "flex-start" }} justifyContent="space-between">
          <Flex flexDirection="column" mb={{ base: "2rem", md: "0" }} alignItems={{base: "center", md: "flex-start"}} justifyContent={{base: "center", md: "flex-start"}} gap={8}>
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
                      alignSelf="center"
                      src={twiIcon}
                      alt="Twitter icon."
                      boxSize="1.25rem"
                    />
                    <LinkOverlay href="https://twitter.com/FreeToGamecom" isExternal />
                  </LinkBox>
                </ListItem>
                <ListItem>
                  <LinkBox>
                    <Image
                      src={fbIcon}
                      alt="Facebook icon."
                      boxSize="1.25rem"
                    />
                    <LinkOverlay href="https://www.facebook.com/FreeToGameOfficial/" isExternal />
                  </LinkBox>
                </ListItem>
                <ListItem>
                  <LinkBox>
                    <Image
                      src={ghIcon}
                      alt="GitHub icon."
                      boxSize="1.25rem"
                    />
                    <LinkOverlay href="https://github.com/pustart/ftp-games-tech" isExternal />
                  </LinkBox>
                </ListItem>
              </UnorderedList>
            </Flex>
          </Flex>

          <Flex flexDirection={{ base: "column", md: "row" }} alignSelf="start" alignItems="flex-start" justifyContent="space-between" gap={{base: "2rem", md: "6rem"}}>
            <Box as="nav">
              <Heading as="h3" size="sm" mb="1rem">Information</Heading>

              <UnorderedList m="0" styleType="none" color="gray.100" display="flex" flexDirection="column" gap="0.75rem">
                <ListItem>
                  <Link href="#">
                    About Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Contact Us
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    API
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>

            <Box as="nav">
              <Heading as="h3" size="sm" mb="1rem">Support</Heading>

              <UnorderedList m="0" styleType="none" color="gray.100" display="flex" flexDirection="column" gap="0.75rem">
                <ListItem>
                  <Link href="#">
                    Help & FAQ
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Support & Bugs
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Sitemap
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>

            <Box as="nav">
              <Heading as="h3" size="sm" mb="1rem">Policy</Heading>

              <UnorderedList m="0" styleType="none" color="gray.100" display="flex" flexDirection="column" gap="0.75rem">
                <ListItem>
                  <Link href="#">
                    Terms of Use
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Privacy
                  </Link>
                </ListItem>
                <ListItem>
                  <Link href="#">
                    Cookies
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

export default Footer;
