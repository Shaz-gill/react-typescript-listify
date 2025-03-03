import { Box, Text } from "@chakra-ui/react";
import { useBgColor } from "../hooks/useThemeStyles";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      width="100%"
      textAlign="center"
      py={3}
      {...useBgColor()}
    >
      <Text>
        &copy; {new Date().getFullYear()} Shahzad Tariq. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
