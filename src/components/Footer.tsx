import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      width="100%"
      bg="gray.700"
      color="white"
      textAlign="center"
      py={3}
      data-testid="footer"
    >
      <Text>
        &copy; {new Date().getFullYear()} @ShahzadTariq. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
