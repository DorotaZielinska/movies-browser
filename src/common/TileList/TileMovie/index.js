import { Genres } from "../../Genres";
import { MovieImage } from "./Image/index";
import { Rating } from "../../Rating";
import {
  Content,
  MovieTileList,
  StyledSubTitle,
  StyledTitle,
  GetDetailsLink,
} from "./styled";


export const TileList = ({ title, year, genres, vote, votes, poster, id }) => {
  const getYear = (string) => {
    return string.split("-")[0];
  };

  return (
    <GetDetailsLink to={`/movies/${id}`} key={id}>
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
    </GetDetailsLink>
  );
};

export const MovieTileListPeople = ({
  title,
  year,
  genres,
  vote,
  votes,
  poster,
  id,
  character,
}) => {
  const getYear = (string) => {
    return string.split("-")[0];
  };

  return (
    <GetDetailsLink to={`/movies/${id}`} key={id}>
      <MovieTileList>
        <MovieImage poster={poster} />
        <Content>
          <div>
            <StyledTitle  >{title}</StyledTitle>
            {character && year && <StyledSubTitle>{`${character} (${getYear(year)})`}</StyledSubTitle>}
           <Genres genres={genres} />
          </div>
          <div>
            <Rating vote={vote} votes={votes} />
          </div>
        </Content>
      </MovieTileList>
    </GetDetailsLink>
  );
};
