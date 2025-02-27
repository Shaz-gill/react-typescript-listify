import { HStack, Image } from "@chakra-ui/react";
import { useLogo, useBgColor } from "../hooks/useThemeStyles";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent="space-between" px={10} py={4} {...useBgColor()}>
      <Image {...useLogo()} width={180} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
