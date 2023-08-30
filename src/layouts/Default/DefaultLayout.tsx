import React, { FunctionComponent } from "react";
import { Box } from '@chakra-ui/react';
import Header from '../../components/modules/Header/Header';
import Footer from '../../components/modules/Footer/Footer';
import { DefaultLayoutProps } from './DefaultLayout.props';
import styles from "./DefaultLayout.module.scss"

function DefaultLayout({ children, fancyBackground }: DefaultLayoutProps): JSX.Element {
  return (
    <div className={styles["default-wrapper"]}>
      {
        fancyBackground ? (<>
        <Box zIndex="-1" w="112.5rem" h="124rem" position="fixed" left="-34.3rem" top="-51.8rem" bg="radial-gradient(70.71% 70.71% at 50% 50%, rgba(20, 29, 111, 0.64) 0%, rgba(0, 0, 0, 0.00) 60.00%)" />
        <Box zIndex="-1" w="87.5rem" h="96rem" position="fixed" right="-23.7rem" top="-22.8rem" bg="radial-gradient(70.71% 70.71% at 50% 50%, rgba(66, 20, 159, 0.30) 0%, rgba(0, 0, 0, 0.00) 60.00%)" />
        </>) : null
      }
      <Header/>
      <div>{children}</div>
      <Footer/>
    </div>
  );
}

export const withDefaultLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>,
  fancyBackground: boolean,
) =>
  function withLayoutComponent(props: T): JSX.Element {
    return (
      <DefaultLayout fancyBackground={fancyBackground}>
        <Component {...props} />
      </DefaultLayout>
    );
  };

export default withDefaultLayout;
