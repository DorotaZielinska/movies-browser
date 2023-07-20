import { Details, About, Info, Title, Wrapper, Year, Genres } from "./styled";
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
        <Genres> {genres}</Genres>
        <Rating vote={vote} votes={votes} />
        <About>{content}</About>
      </Details>
    </Wrapper>
  );
};
