import {
  Details,
  MovieDescription,
  Info,
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
  place,
  date,
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
        <Info>
          {place}
          <br /> {date}
        </Info>
        <span> {genres}</span>
        <Rating vote={`${vote}/10`} votes={votes} />
        <MovieDescription>{content}</MovieDescription>
      </Details>
    </Wrapper>
  );
};
