import { useSelector } from "react-redux";
import { GenresContainer, Genre } from "./styled";
import { selectGenres } from "../../features/MovieList/movieListSlice";
import { selectGenresDetails } from "../../features/PeopleDetails/peopleDetailsSlice";

export const Genres = ({ genres }) => {
  const genresId = useSelector(selectGenres);
  const genresIdDetails = useSelector(selectGenresDetails);
  const selectGenresId = genresId !== undefined ? genresId : genresIdDetails;
  const getGenresId = (ids, id) => {
    if (id) {
      return ids
        .map((ids) => id.filter(({ id }) => id === ids)[0]?.name)
        .filter(Boolean);
    }
    return [];
  };

  return (
    genres && (
      <GenresContainer>
        {getGenresId(genres, selectGenresId).map((genre) => (
          <Genre key={genre}>{genre}</Genre>
        ))}
      </GenresContainer>
    )
  );
};
