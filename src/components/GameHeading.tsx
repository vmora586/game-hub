import {Heading} from "@chakra-ui/react";
import { GameQuery } from "../App";

interface GameHeadingProps{
    gameQuery:GameQuery;
}
const GameHeading = ({gameQuery: GameQuery}:GameHeadingProps) => {
    const heading = `${GameQuery.platform?.name || ''} ${GameQuery.genre?.name || ''} Games `
    return (
        <Heading as="h2" marginY={5} textAlign="left">{heading}</Heading>
      );
}
 
export default GameHeading;