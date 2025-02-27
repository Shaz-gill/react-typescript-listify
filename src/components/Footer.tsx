import { Box, Text } from "@chakra-ui/react";
import { useThemeStyles } from "../hooks/useThemeStyles";

const Footer = () => {
  const footerStyle = useThemeStyles();

  return (
    <Box
      as="footer"
      position="fixed"
      bottom={0}
      width="100%"
      textAlign="center"
      py={3}
      {...footerStyle}
    >
      <Text>
        &copy; {new Date().getFullYear()} @ShahzadTariq. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
