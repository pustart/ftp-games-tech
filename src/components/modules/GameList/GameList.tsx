import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import GameCard from '../../elements/GameCard/GameCard';

function GameList(): JSX.Element {
  const filterIcon: JSX.Element = <Icon
    w="2.125rem"
    h="1.875rem"
    viewBox='0 0 34 20'
    color='inherit'
  >
    <path
      fill='currentColor'
      d="M11.333 18.163c0-.36.15-.705.415-.96a1.449 1.449 0 0 1 1.002-.397h8.5c.376 0 .736.143 1.002.397.265.255.415.6.415.96s-.15.705-.415.96a1.449 1.449 0 0 1-1.002.397h-8.5c-.376 0-.736-.143-1.002-.398a1.329 1.329 0 0 1-.415-.96ZM5.667 10.02c0-.36.149-.705.415-.96a1.449 1.449 0 0 1 1.001-.397h19.834c.375 0 .736.143 1.001.397.266.255.415.6.415.96s-.149.705-.415.96a1.449 1.449 0 0 1-1.001.397H7.083c-.375 0-.736-.143-1.001-.397a1.329 1.329 0 0 1-.415-.96ZM0 1.877c0-.36.15-.705.415-.96A1.449 1.449 0 0 1 1.417.52h31.166c.376 0 .736.143 1.002.397.266.255.415.6.415.96s-.15.705-.415.96a1.449 1.449 0 0 1-1.002.397H1.417c-.376 0-.736-.143-1.002-.397A1.329 1.329 0 0 1 0 1.877Z"
    />
  </Icon>;

  const sortIcon: JSX.Element = <Icon
    w="2.25rem"
    h="1.7rem"
    viewBox='0 0 36 28'
    color='inherit'
  >
    <path
      fill='currentColor'
      d="M7.45 1.747c0-.325-.131-.637-.364-.868a1.249 1.249 0 0 0-1.756 0 1.22 1.22 0 0 0-.363.868v21.58l-2.845-2.814a1.245 1.245 0 0 0-.88-.36 1.256 1.256 0 0 0-.878.36A1.228 1.228 0 0 0 0 21.38a1.216 1.216 0 0 0 .364.87l4.965 4.905.018.018a1.241 1.241 0 0 0 1.738-.015l4.965-4.909a1.221 1.221 0 0 0 .001-1.736 1.25 1.25 0 0 0-1.756-.001L7.45 23.328V1.748Zm9.93 1.227c-.33 0-.645-.129-.878-.36a1.22 1.22 0 0 1 0-1.735c.233-.23.549-.359.878-.359h2.483c.329 0 .645.13.878.36a1.22 1.22 0 0 1 0 1.735c-.233.23-.549.36-.878.36H17.38Zm0 7.363c-.33 0-.645-.13-.878-.36a1.22 1.22 0 0 1 0-1.735c.233-.23.549-.36.878-.36h7.448c.33 0 .645.13.878.36a1.22 1.22 0 0 1 0 1.736c-.233.23-.549.36-.878.36H17.38Zm0 7.363c-.33 0-.645-.13-.878-.36a1.22 1.22 0 0 1 0-1.735c.233-.23.549-.36.878-.36h12.413c.33 0 .645.13.878.36a1.22 1.22 0 0 1 0 1.736c-.233.23-.548.359-.878.359H17.38Zm-1.241 6.136c0 .325.13.637.363.867.233.23.549.36.878.36H34.76c.329 0 .645-.13.877-.36a1.22 1.22 0 0 0 0-1.735 1.248 1.248 0 0 0-.877-.36H17.38c-.33 0-.645.13-.878.36a1.22 1.22 0 0 0-.363.868Z"
    />
  </Icon>;

  return (
    <Box as="main" w="100vw">
      <Container px="1rem" maxW="desktopMax">
        <Flex justifyContent="space-between" alignItems="flex-end" h="6.24rem">
          <Menu>
            <MenuButton
              w="3.375rem"
              h="3.375rem"
              color="white"
              as={IconButton}
              icon={filterIcon}
              variant="outline"
              fontSize="1.25rem"
              colorScheme="white"
              bg="whiteAlpha.600"
              borderColor="whiteAlpha.500"
              _hover={{
                color: "blue.200",
                borderColor: "blue.200",
              }}
              _active={{
                transform: 'scale(0.98)',
              }}
            />
          </Menu>

          <Box>
            <Heading as="h2" textAlign="center">
              <Text as="span" bg="gradient.blue" backgroundClip="text" fontSize="2rem">Personalized</Text>
              <br />
              <Text as="span">Recommendations</Text>
            </Heading>
          </Box>

          <Menu>
            <MenuButton
              w="3.375rem"
              h="3.375rem"
              color="white"
              as={IconButton}
              icon={sortIcon}
              variant="outline"
              bg="whiteAlpha.600"
              borderColor="whiteAlpha.500"
              _hover={{
                color: "blue.200",
                borderColor: "blue.200",
              }}
              _active={{
                color: "blue.200",
                borderColor: "blue.200",
              }}
            />
            <MenuList color="black">
              <MenuOptionGroup title='Sort by' type='radio'>
                <MenuItemOption value='dateNew' _hover={{ background: "blue.100", }}>Release Date - NEW</MenuItemOption>
                <MenuItemOption value='dateOld' _hover={{ background: "blue.100", }}>Release Date - OLD</MenuItemOption>
                <MenuItemOption value='popularityMost' _hover={{ background: "blue.100", }}>Popularity - MOST</MenuItemOption>
                <MenuItemOption value='popularityLess' _hover={{ background: "blue.100", }}>Popularity - LESS</MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>

        <GameCard></GameCard>
        <GameCard></GameCard>
        <GameCard></GameCard>
        <GameCard></GameCard>

        <Flex w="100%" justifyContent="center">
          <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme='white'
          variant='ghost'
          mb="6rem"
          fontSize="1.25rem"
          transition="all 0.2s ease"
          _hover={{ color: "purple.100"}}
          >
            Load More
          </Button>
        </Flex>
      </Container>
    </Box>
  );
}

export default GameList;
