import { HStack, Image } from "@chakra-ui/react";
import { useBgColor, useLogo } from "../hooks/useThemeStyles";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent="space-between" px={7} py={3} {...useBgColor()}>
      <Image {...useLogo()} width={180} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
