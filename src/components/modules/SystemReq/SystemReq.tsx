import {
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import InfoCard from '../../elements/InfoCard/InfoCard';
import pieIcon from "../../../assets/icons/pie-icon.png";


function SystemReq(): JSX.Element {
  const icon: JSX.Element = <Image
    ml="-0.5rem"
    src={pieIcon}
  />

  return (
    <SimpleGrid
      as="article"
      m={{ base: "2.75rem 1rem", md: "3.25rem 1rem" }}
      columns={{ base: 1, md: 2 }}
      justifyContent="space-between"
      gap="1.5rem"
      borderRadius="1rem"
    >
      <InfoCard icon={icon} bg="transparent" border={false} title="OS" text="Windows XP, Windows Vista, or Windows 7" />
      <InfoCard icon={icon} bg="transparent" border={false} title="Processor" text="Core2 Duo E6750 (Pentium 4 2.4GHz or Athlon XP 3100+)" />
      <InfoCard icon={icon} bg="transparent" border={false} title="Memory & Storage" text="4GB DDR2, 30 GB" />
      <InfoCard icon={icon} bg="transparent" border={false} title="Graphics" text="GeForce 9600GT (512 Mb) / GeForce 6800 GT or Radeon X800 GT" />

    </SimpleGrid>
  );
}

export default SystemReq;
