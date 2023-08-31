import {
  SimpleGrid,
} from '@chakra-ui/react';
import InfoCard from '../../elements/InfoCard/InfoCard';

function AddInfo(): JSX.Element {
  return (
    <SimpleGrid
      as="article"
      m={{ base: "2.75rem 1rem", md: "3.25rem 1rem" }}
      columns={{base: 1, md: 3}}
      justifyContent="space-between"
      gap="1.5rem"
      borderRadius="1rem"
    >
      <InfoCard bg="solid" border={true} title="Title" text="World of Warships"/>
      <InfoCard bg="solid" border={true} title="Developer" text="Wargaming"/>
      <InfoCard bg="solid" border={true} title="Publisher" text="Wargaming"/>
      <InfoCard bg="solid" border={true} title="Release Date" text="02.07.2015"/>
      <InfoCard bg="solid" border={true} title="Genre" text="Shooter"/>
      <InfoCard bg="solid" border={true} title="Platform" text="Windows (Client)"/>
    </SimpleGrid>
  );
}

export default AddInfo;
