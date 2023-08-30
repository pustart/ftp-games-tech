import { extendTheme } from '@chakra-ui/react'

const colors = {
    black: "#000000",
    white: "#FFFFFF",
    gray: {
      100: "#AEAEB2",
      300: "#718096",
      700: "#151E2B",
      800: "#111315",
      900: "#070707",
    },
    blue: {
      200: "#95BBF2",
      300: "#91B7F0",
      400: "#3385FF",
      500: "#410AB6",
      600: "#141D6F",
    },
    purple: {
      200: "#BAA2D4",
      800: "#805AA8",
    },
    green: {
      500: "#5BFF40",
    },
    blueAlpha: {
      600: "rgba(20, 29, 111, 0.60)",
    },
    blackAlpha: {
      600: "rgba(0, 0, 0, 0.40)",
    },
    whiteAlpha: {
      500: "rgba(255, 255, 255, 0.20)",
      600: "rgba(255, 255, 255, 0.08)",
    },
};

const styles = {
    global: {
      body: {
        bg: "black",
        color: "white",
      },
    },
};

const sizes = {
  desktopMax: "1138px",
  mobileMin: "360px",
};

const fonts = {
  heading: `'Inter Variable', sans-serif`,
  body: `'Inter Variable', sans-serif`,
}

export const THEME = extendTheme({ colors, styles, sizes, fonts });
