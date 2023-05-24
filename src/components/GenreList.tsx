import { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";

interface GenreListProps {
  genres: Genre[];
  onSelectGenre(genre: Genre | null): void;
}

const GenreList = ({ genres, onSelectGenre }: GenreListProps) => {
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY='5px'>
          <HStack>
            <Image
              src={getCroppedImage(genre.image_background)}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button
              fontSize='lg'
              variant='link'
              onClick={() => {
                onSelectGenre(genre);
              }}>
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
