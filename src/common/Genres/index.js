import { useSelector } from "react-redux";
import { GenresContainer, Genre } from "./styled";
import { selectGenres } from "../../features/MovieList/movieListSlice";

export const Genres = ({ genres }) => {
    const genresId = useSelector(selectGenres)

    const getGenresId = (ids, id) => {
        return ids.map((ids) => id.filter(({ id }) => id === ids)[0].name);
    };

    return (
       genres && (
        <GenresContainer>
            {getGenresId(genres, genresId).map((genre) => (
                <Genre key={genre}>{genre}</Genre>
            ))}
        </GenresContainer>
       )
    );
};