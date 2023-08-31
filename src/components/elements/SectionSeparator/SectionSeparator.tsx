import {
  Box,
  Heading,
} from '@chakra-ui/react';
import { SectionSeparatorProps } from './SectionSeparator.props';
import styles from "./SectionSeparator.module.scss";

function SectionSeparator({ title }: SectionSeparatorProps): JSX.Element {
  return (
    <Box className={styles.title}>
      {
        title ? (
          <Heading as="h2" textAlign="center" fontSize={{ base: "2rem", md: "3rem" }} mb="1rem">
            {title}
          </Heading>
        )
        :
        null
      }
    </Box>
  );
}

export default SectionSeparator;
