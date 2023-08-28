import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import {THEME} from './theme/Theme';
import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footer/Footer';

function App() {
  return (
      <ChakraProvider theme={THEME}>
          <Box zIndex="-1" w="112.5rem" h="124rem" position="fixed" left="-34.3rem" top="-51.8rem" bg="radial-gradient(70.71% 70.71% at 50% 50%, rgba(20, 29, 111, 0.64) 0%, rgba(0, 0, 0, 0.00) 60.00%)"/>
          <Box zIndex="-1" w="87.5rem" h="96rem" position="fixed" right="-23.7rem" top="-22.8rem" bg="radial-gradient(70.71% 70.71% at 50% 50%, rgba(66, 20, 159, 0.30) 0%, rgba(0, 0, 0, 0.00) 60.00%)"/>
          <Header/>
          <Footer/>
      </ChakraProvider>
  );
}

export default App;
