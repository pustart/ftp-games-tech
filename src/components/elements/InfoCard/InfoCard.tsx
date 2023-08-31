import {
  Heading,
  Flex,
  Text,
} from '@chakra-ui/react';
import { InfoCardProps } from './InfoCard.props';

function InfoCard({ title, text, bg, border, icon }: InfoCardProps): JSX.Element {
  const brdr: string = border ? "1px solid rgba(255, 255, 255, 0.08)" : "none";
  const background: string = bg === "solid" ? "whiteAlpha.600" : "transparent";

  return (
    <Flex
      as="section"
      p="1.5rem"
      minH="7rem"
      flexDirection="column"
      justifyContent="flex-start"
      gap="1rem"
      alignItems="flex-start"
      borderRadius="1rem"
      border={brdr}
      bg={background}
    >
      <Flex alignItems="center" gap="0.5rem">
        {
          icon ? icon : null
        }
        <Heading as="h3" textAlign="left" fontSize="1.25rem">
          {title}
        </Heading>
      </Flex>
      <Text as="p" color="gray.100">
        {text}
      </Text>
    </Flex>
  );
}

export default InfoCard;
