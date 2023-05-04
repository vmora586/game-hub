import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface GameContainerProps {
  children: ReactNode;
}

function GameCardContainer({ children }: GameContainerProps) {
  return (
    <Box width='250px' borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
}

export default GameCardContainer;
