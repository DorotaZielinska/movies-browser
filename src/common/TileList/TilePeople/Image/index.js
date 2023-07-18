import { ImageWrapper, Poster, NoPerson } from "./style";

export const PersonImage = ({ poster }) => {
  const images = "https://image.tmdb.org/t/p/w185";

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
