import { ImageWrapper, Poster, NoPerson } from "./styled";

export const PersonDetailsImage = ({ poster }) => {
  const images = "https://image.tmdb.org/t/p/w300";

  return (
    <ImageWrapper>
      {poster === null ? (
        <NoPerson />
      ) : (
        <Poster background={`${images}${poster}`} />
      )}
    </ImageWrapper>
  );
};
