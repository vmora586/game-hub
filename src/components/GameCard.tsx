import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface GameCardProps {
  game: Game;
}
function GameCard({ game }: GameCardProps) {
  return (
    <Card width='250px' borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImage(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize='2xl'>{game.name}</Heading>
        <HStack justifyContent='space-between'>
          <PlatformIconsList
            key={game.id}
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
}

export default GameCard;
