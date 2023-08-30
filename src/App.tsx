import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { THEME } from './theme/Theme';
import Header from './components/modules/Header/Header';
import Footer from './components/modules/Footer/Footer';
import withDefaultLayout from './layouts/Default/DefaultLayout';

function App() {
  return (
    <></>
  );
}

export default withDefaultLayout(App, true);
