import { useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/listifyDark.webp";
import lightLogo from "../assets/listifyLight.webp";

export const useThemeStyles = (): {
  bg: string;
  color: string;
} => {
  const { colorMode } = useColorMode();

  return {
    bg: colorMode === "dark" ? "gray.700" : "gray.100",
    color: colorMode === "dark" ? "white" : "black",
  };
};

export const logo = (): {
  src: string;
} => {
  const { colorMode } = useColorMode();

  return colorMode === "dark" ? { src: lightLogo } : { src: darkLogo };
};
