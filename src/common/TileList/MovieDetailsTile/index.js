import {
  Description,
  Details,
  MovieDescription,
  Production,
  Title,
  Wrapper,
  Year,
} from "./styled";
import { Rating } from "../../Rating";
import { MovieImage } from "./Image";

export const MovieDetailsTile = ({
  poster,
  content,
  title,
  year,
  production,
  releaseDate,
  vote,
  votes,
  genres,
}) => {
  const getYear = (string) => {
    return string.split("-")[0];
  };
  return (
    <Wrapper>
      <MovieImage poster={poster} />
      <Details>
        <Title>{title}</Title>
        {year && <Year>{getYear(year)}</Year>}
        <Production>
          <Description>Production:</Description> {production}
          <br /> <Description>Release date:</Description> {releaseDate}
        </Production>
        <span> {genres}</span>
        <Rating vote={`${vote}/10`} votes={votes} />
        <MovieDescription>{content}</MovieDescription>
      </Details>
    </Wrapper>
  );
};
