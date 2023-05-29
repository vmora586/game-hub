import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitchMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={"green"}
      />
      <Text whiteSpace='nowrap'>Dark mode</Text>
    </HStack>
  );
};

export default ColorSwitchMode;
