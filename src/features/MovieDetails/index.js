import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getMovieId,
  resetMovieDetails,
  selectDetails,
  selectMovieState,
} from "./movieDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { Container } from "../../common/Container";
import {
  MainInfo,
  PosterContainer,
  Poster,
  PosterGradient,
  Rating,
  Star,
  Title,
  Votes,
  Wrapper,
  Description,
  Slash,
  Genre,
  Country,
  Date,
  TotalVotes,
  Vote,
  CountryShort,
} from "./styled";
import { MovieDetailsTile } from "../../common/TileList/MovieDetailsTile";

const image = "https://image.tmdb.org/t/p/original/";
const movieImage = "https://image.tmdb.org/t/p/w400/";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectMovieState);
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(getMovieId(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetMovieDetails());
    };
  }, [dispatch]);

  return status === "loading" || !details ? (
    <Loading />
  ) : status === "error" ? (
    <Error />
  ) : (
    <>
      <Wrapper>
        <PosterContainer>
          <Poster src={`${image}${details.backdrop_path}`} alt="poster" />
          <PosterGradient />{" "}
          <MainInfo>
            <Title>{details.title}</Title>
            <Rating>
              <Star />
              {details.vote_average.toFixed(1)}
              <Slash>/10</Slash>
            </Rating>
            <Votes>{details.vote_count} votes</Votes>
          </MainInfo>
        </PosterContainer>
      </Wrapper>
      <Container>
        <MovieDetailsTile
          content={details.overview}
          poster={`${movieImage}${details.poster_path}`}
          title={details.title}
          year={details.release_date}
          place={
            <>
              <Description>Production: </Description>
              <Country>
                {details.production_countries
                  .map((country) => country.name)
                  .join(", ")}
              </Country>
              <CountryShort>
                {details.production_countries
                  .map((country) => country.iso_3166_1)
                  .join(", ")}
              </CountryShort>
            </>
          }
          date={
            <>
              <Description>Release date: </Description>
              <Date>
                {" "}
                {details.release_date.split("-").reverse().join("-")}
              </Date>
            </>
          }
          vote={
            <>
              <Vote> {details.vote_average.toFixed(1)}</Vote> <Slash>/10</Slash>
            </>
          }
          votes={
            <>
              {" "}
              <TotalVotes>{details.vote_count} </TotalVotes>
            </>
          }

          genres={details.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        />
      </Container>
    </>
  );
};
