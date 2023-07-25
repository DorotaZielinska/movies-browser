import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getMovieId,
  resetMovieDetails,
  selectCredits,
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
  CastList,
  SectionTitle,
  CrewList,
  Country,
  Date,
  TotalVotes,
  Vote,
  CountryShort,
} from "./styled";
import { MovieDetailsTile } from "../../common/TileList/MovieDetailsTile";
import { PeopleListTile } from "../../common/TileList/TilePeople";
const image = "https://image.tmdb.org/t/p/original/";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectMovieState);
  const details = useSelector(selectDetails);
  const credits = useSelector(selectCredits);

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
          poster={details.poster_path}
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
              <TotalVotes>{details.vote_count} votes </TotalVotes>
            </>
          }
          genres={details.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
        />
      </Container>
      <Container>
        <SectionTitle>Cast</SectionTitle>
        <CastList>
          {credits.cast.slice(0, 12).map((person) => (
            <li key={person.id}>
              <PeopleListTile
                name={person.name}
                poster={person.profile_path}
                character={person.character}
              />
            </li>
          ))}
        </CastList>
      </Container>
      <Container>
        <SectionTitle>Crew</SectionTitle>
        <CrewList>
          {credits.crew.slice(0, 6).map((person) => (
            <li key={person.id}>
              <PeopleListTile
                name={person.name}
                poster={person.profile_path}
                character={person.job}
              />
            </li>
          ))}
        </CrewList>
      </Container>
    </>
  );
};
