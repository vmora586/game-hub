import { Genre } from "../hooks/useGenres";
import { Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import getCroppedImage from "../services/image-url";

interface GenreListProps {
  genres: Genre[];
  onSelectGenre(genre: Genre | null): void;
  selectedGenre: Genre | null;
}

const GenreList = ({
  genres,
  onSelectGenre,
  selectedGenre,
}: GenreListProps) => {
  return (
    <>
    <Heading as="h2" fontSize="2xl" marginBottom={5} textAlign="left">Genres</Heading>
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
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => {
                onSelectGenre(genre);
              }}
              whiteSpace="normal"
              textAlign="left">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
