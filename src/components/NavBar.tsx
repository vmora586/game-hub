import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorSwitchMode from "./ColorSwitchMode";
const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <ColorSwitchMode />
    </HStack>
  );
};

export default NavBar;
