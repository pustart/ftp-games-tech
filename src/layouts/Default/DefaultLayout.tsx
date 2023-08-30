import React, { FunctionComponent } from "react";
import { Box } from '@chakra-ui/react';
import Header from '../../components/modules/Header/Header';
import Footer from '../../components/modules/Footer/Footer';
import { DefaultLayoutProps } from './DefaultLayout.props';
import styles from "./DefaultLayout.module.scss"

function DefaultLayout({ children, fancyBackground }: DefaultLayoutProps): JSX.Element {
  const bgColor: string = fancyBackground ? "radial-gradient(55.85% 58.02% at 62.94% 12.65%, rgba(66, 20, 159, 0.36) 0%, rgba(0, 0, 0, 0.00) 48.46%), radial-gradient(57.48% 56.51% at 37.29% 6.42%, rgba(20, 29, 111, 0.64) 0.92%, rgba(0, 0, 0, 0.00) 59.80%)" : "black";

  return (
    <div className={styles["default-wrapper"]} style={{ background: bgColor }}>
      {
        fancyBackground ? (<>
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
