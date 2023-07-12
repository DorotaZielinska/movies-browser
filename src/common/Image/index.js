import { ImageWrapper, Poster } from "./styled";

export const MovieImage = ({ poster }) => {
    const images = "https://image.tmdb.org/t/p/w300";

    return (
        <ImageWrapper>
            {!poster ?
                <Poster noMoviePoster />
                : <Poster background={`${images}${poster}`} />}
        </ImageWrapper>
    );
};