import { Genres } from "../../Genres";
import { MovieImage } from "./Image/index";
import { Rating } from "../../Rating";
import { Content, MovieTileList, StyledSubTitle, StyledTitle } from "./styled";

export const TileList = ({ title, year, genres, vote, votes, poster }) => {
  const getYear = (string) => {
    return string.split("-")[0];
  };

  return (
    <MovieTileList>
      <MovieImage poster={poster} />
      <Content>
        <div>
          <StyledTitle>{title}</StyledTitle>
          {year && <StyledSubTitle>{getYear(year)}</StyledSubTitle>}
          <Genres genres={genres} />
        </div>
        <div>
          <Rating vote={vote} votes={votes} />
        </div>
      </Content>
    </MovieTileList>
  );
};
