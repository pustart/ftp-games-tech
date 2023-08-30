import {
  Box,
  Container,
  Flex,
  Image,
  Heading,
  Text,
  Icon,
  Button,
  LinkBox,
  LinkOverlay,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import stock from "../../../assets/images/stock.png";
import { GameCardProps } from './GameCard.props';

function GameCard({ title = "World Of Warships", releaseDate = "17.09.2015", publisher = "Wargaming", genre = "Tactical Shooter", imgPath = stock, imgAlt = "Stock photo." }: GameCardProps): JSX.Element {
  return (
    <LinkBox as="article" borderRadius="0.625rem" my="2rem" minH="21.9rem" maxW="desktopMax" transition="all 0.2s ease" _hover={{ transform: 'scale(1.03)' }} bg="radial-gradient(263.39% 201.09% at 30.32% 43.02%, rgba(20, 29, 111, 0.44) 0%, rgba(0, 0, 0, 0.00) 36.90%), #070707">
      <LinkOverlay href='#' />
      <Flex h="100%" p="2.3rem" justifyContent="space-between">
        <Box>
          <Heading as="h3" bg="gradient.purple" backgroundClip="text">{title}</Heading>

          <UnorderedList m="1rem 0 0 0" styleType="none" display="flex" flexDir="column" justifyContent="space-between" gap="1.25rem" alignItems="flex-start">
            <ListItem>
              <Heading as="h4" fontSize="1.5rem">Release Date: </Heading>
              <Text as="p" color="gray.100" fontSize="1.25rem">{releaseDate}</Text>
            </ListItem>
            <ListItem>
              <Heading as="h4" fontSize="1.5rem">Publisher: </Heading>
              <Text as="p" color="gray.100" fontSize="1.25rem">{publisher}</Text>
            </ListItem>
            <ListItem>
              <Heading as="h4" fontSize="1.5rem">Genre: </Heading>
              <Text as="p" color="gray.100" fontSize="1.25rem">{genre}</Text>
            </ListItem>
          </UnorderedList>
        </Box>

        <Image
          borderRadius="0.375rem"
          h="17.25rem"
          objectFit="cover"
          src={stock}
          alt={imgAlt}
        />
      </Flex>
    </LinkBox>
  );
}

export default GameCard;
