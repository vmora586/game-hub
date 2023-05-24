import useGenres, { Genre } from "../hooks/useGenres";
import GenreList from "./GenreList";
import GenreSkeleton from "./GenreSkeleton";

interface GenreContainerProps {
  onSelectGenre(genre: Genre): void;
}
function GenreContainer({ onSelectGenre }: GenreContainerProps) {
  const { data, isLoading, error } = useGenres();
  {
    if (error) return null;
  }
  return (
    <>
      {isLoading && <GenreSkeleton />}
      <GenreList genres={data} onSelectGenre={onSelectGenre} />
    </>
  );
}

export default GenreContainer;
