import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/listify.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent="space-between" px={12} pt={7}>
      <Image src={logo} width={180} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
