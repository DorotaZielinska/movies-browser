import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import { selectStatus, selectMoviesList } from "../movieListSlice";
import { Error } from "../AsideActions/Error/error";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);

  return status === "error" ? (
    <Error />
  ) : (
    <Container>
      <MovieListTitle>Popular movies</MovieListTitle>
      <MoviesList>
        {popularMovies.map((movie) => (
          <ItemMoviesList key={movie.id}>
            <TileList
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              vote={movie.vote_average}
              votes={movie.vote_count}
              genres={movie.genres_ids}
            />
          </ItemMoviesList>
        ))}
      </MoviesList>
    </Container>
  );
};

export default MovieList;
