import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreList from "./GenreList";
import GenreSkeleton from "./GenreSkeleton";

function GenreContainer() {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <GenreSkeleton />}
      <GenreList genres={data} />
    </>
  );
}

export default GenreContainer;
