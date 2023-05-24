import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";
import GenreSkeleton from "./GenreSkeleton";

interface GenreContainerProps {
  onSelectGenre(genre: Genre): void;
  selectedGenre: Genre | null;
}
function GenreContainer({ selectedGenre, onSelectGenre }: GenreContainerProps) {
  const { data, isLoading, error } = useGenres();
  {
    if (error) return null;
  }
  return (
    <>
      {isLoading && <GenreSkeleton />}
      <GenreList
        genres={data}
        onSelectGenre={onSelectGenre}
        selectedGenre={selectedGenre}
      />
    </>
  );
}

export default GenreContainer;
