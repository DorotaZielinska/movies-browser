import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import { selectStatus, selectMoviesList, selectPage } from "../movieListSlice";
import { Error } from "../AsideActions/Error/error";
import { Pagination } from "../../common/Pagination";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);
  const currentPage = useSelector(selectPage);

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
              genres={movie.genre_ids}
            />
          </ItemMoviesList>
        ))}
      </MoviesList>
      <Pagination currentPage={currentPage} />
    </Container>
  );
};

export default MovieList;
