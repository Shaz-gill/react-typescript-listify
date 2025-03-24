import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#f9f9f9",
      100: "#ededed",
      200: "#d3d3d3",
      300: "#b3b3b3",
      400: "#a0a0a0",
      500: "#898989",
      600: "#6c6c6c",
      700: "#202020",
      800: "#121212",
      900: "#111111",
    },
  },
  components: {
    Footer: {
      baseStyle: {
        position: "fixed",
        bottom: 0,
        width: "100%",
        textAlign: "center",
        py: 3,
      },
      variants: {
        dark: {
          bg: "gray.700",
          color: "white",
        },
        light: {
          bg: "gray.100",
          color: "black",
        },
      },
      defaultProps: {
        variant: "dark",
      },
    },
  },
});

export default theme;
