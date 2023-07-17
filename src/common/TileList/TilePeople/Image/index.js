import { ImageWrapper, Poster } from "./style";

export const PersonImage = ({ poster }) => {
  const images = "https://image.tmdb.org/t/p/w154";

  return (
    <ImageWrapper>
      {poster === null ? (
        <Poster noMoviePoster />
      ) : (
        <Poster background={`${images}${poster}`} />
      )}
    </ImageWrapper>
  );
};
