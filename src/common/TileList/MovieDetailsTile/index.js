import {
  Details,
  About,
  Info,
  Title,
  Wrapper,
  Year,
  Genres,
  Rating,
  Star,
  Vote,
  Votes,
} from "./styled";

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
        <Genres> {genres}</Genres>
        <Rating>
          <Star />
          <Vote>{vote} </Vote>
          <Votes>{votes}</Votes>
        </Rating>
        <About>{content}</About>
      </Details>
    </Wrapper>
  );
};
