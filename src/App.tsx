import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {THEME} from './theme/Theme';
import Header from './components/modules/Header/Header';

function App() {
  return (
      <ChakraProvider theme={THEME}>
        <div>
          <Header/>
          Hello, world!
        </div>
      </ChakraProvider>
  );
}

export default App;
