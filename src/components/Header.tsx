import { HStack, Image } from "@chakra-ui/react";
import { logo } from "../hooks/useThemeStyles";
import ColorModeSwitch from "./ColorModeSwitch";
import { useThemeStyles } from "../hooks/useThemeStyles";

const Header = () => {
  const headerStyle = useThemeStyles();

  return (
    <HStack justifyContent="space-between" px={12} py={4} {...headerStyle}>
      <Image {...logo()} width={180} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
