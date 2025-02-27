import { useColorMode } from "@chakra-ui/react";
import darkLogo from "../assets/listifyDark.webp";
import lightLogo from "../assets/listifyLight.webp";

const useThemeMode = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return { isDark, colorMode };
};

export const useLogo = () => {
  const { isDark } = useThemeMode();
  return { src: isDark ? lightLogo : darkLogo };
};

export const useBgColor = () => {
  const { isDark } = useThemeMode();
  return {
    bg: isDark ? "gray.700" : "gray.100",
    color: isDark ? "white" : "black",
  };
};

export const useTableContainer = () => {
  const { isDark } = useThemeMode();
  return {
    border: "1px solid",
    borderColor: isDark ? "gray.700" : "gray.100",
    borderRadius: "8px",
  };
};
