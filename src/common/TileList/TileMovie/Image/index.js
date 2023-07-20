import { ImageWrapper, Poster, NoMoviePoster } from "./styled";

export const MovieImage = ({ poster }) => {
  const images = "https://image.tmdb.org/t/p/w400";

  return (
    <ImageWrapper>
      {poster === null ? (
        <NoMoviePoster />
      ) : (
        <Poster background={`${images}${poster}`} />
      )}
    </ImageWrapper>
  );
};
