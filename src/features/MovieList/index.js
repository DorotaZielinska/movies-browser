import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import {
  selectStatus,
  selectMoviesList,
  fetchMoviesListLoad,
  selectPage,
  fetchSearchMoviesLoad,
} from "../movieListSlice";
import { Error } from "../AsideActions/Error/error";
import { Pagination } from "../../common/Pagination";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { searchQueryParamName } from "../../common/Navigation/Search/searchQueryParamName";
import debounce from "lodash/debounce";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
 
  const debouncedLoad = useCallback(
    debounce((query) => {dispatch(fetchSearchMoviesLoad(query))}, 1000),
    [dispatch]
  );

  useEffect(() => {
    if (query !== "" && query !== null) {
      debouncedLoad(query);
    } else {
      debouncedLoad.cancel();
      dispatch(fetchMoviesListLoad(page));
    }
  }, [dispatch, query, debouncedLoad, page]);

  return status === "error" ? (
    <Error />
  ) : (
    <Container>
      <MovieListTitle>Popular movies</MovieListTitle>
      <MoviesList>
        {popularMovies.slice(0, 8).map((movie) => (
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
