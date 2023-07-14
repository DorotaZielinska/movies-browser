import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import {
  selectStatus,
  selectMoviesList,
  fetchMoviesListLoad,
  selectPage,
} from "../movieListSlice";
import { Error } from "../AsideActions/Error/error";
import { Pagination } from "../../common/Pagination";
import { useEffect } from "react";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(fetchMoviesListLoad(page));
  }, [dispatch, page]);

  return status === "error" ? (
    <Error />
  ) : (
    <Container>
      <MovieListTitle>Popular movies</MovieListTitle>
      <MoviesList>
        {popularMovies.slice(12).map((movie) => (
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
      <Pagination />
    </Container>
  );
};

export default MovieList;
