import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList/TileMovie";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import {
  selectStatus,
  selectMoviesList,
  fetchMoviesListLoad,
  fetchSearchMoviesLoad,
  selectTotalResult,
} from "../MovieList/movieListSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { NotFound } from "../AsideActions/NotFound/notFound";
import { Pagination } from "../../common/Pagination";
import { searchQueryParamName } from "../../common/Navigation/Search/searchQueryParamName";
import { selectPage } from "../../common/Pagination/paginationSlice";

const MovieList = () => {
  const popularMovies = useSelector(selectMoviesList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const totalResults = useSelector(selectTotalResult);

  const debouncedLoad = useCallback(
    debounce((query) => {
      dispatch(fetchSearchMoviesLoad(query));
    }, 1000),
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
  ) : status === "loading" ? (
    <Loading query={query} />
  ) : totalResults === 0 ? (
    <NotFound query={query} />
  ) : (
    <Container>
      <MovieListTitle>
        {query
          ? `Search results for "${query}" (${totalResults})`
          : "Popular Movies"}
      </MovieListTitle>
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
      <Pagination />
    </Container>
  );
};

export default MovieList;
