import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/listify.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Header = () => {
  return (
    <HStack justifyContent="space-between" px={10} py={3} bg="gray.700">
      <Image src={logo} width={180} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Header;
