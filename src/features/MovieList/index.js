import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";
import { selectStatus, selectPage } from "../movieListSlice";
import { Error } from "../AsideActions/Error/error";
import { Pagination } from "../../common/Pagination";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const URL = "https://api.themoviedb.org/3";
  const API_KEY = "5d7b278fff9e1056c09e514d9f0bc9f3";
  const currentPage = useSelector(selectPage);
  const status = useSelector(selectStatus);

  useEffect(() => {
    const popularMovies = async () => {
      const response = await axios.get(
        `${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
      );
      setMovies(response.data.results);
    };
    popularMovies();
  }, [currentPage]);

  return status === "error" ? (
    <Error />
  ) : (
    <Container>
      <MovieListTitle>Popular movies</MovieListTitle>
      <MoviesList>
        {movies.slice(12).map((movie) => (
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
