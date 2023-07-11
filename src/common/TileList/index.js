
import { Genres } from "../Genres"
import { Rating } from "../Rating"
import { Content, MovieTileList, Poster, StyledSubTitle, StyledTitle } from "./styled"
 
const images = "https://image.tmdb.org/t/p/w300";

export const TileList = ({ title, year, genres, vote, votes, poster }) => {
    const getYear = (string) => {
        return string.split("-")[0];
    }

    return(
        (
            <MovieTileList>
                <Poster src={`${images}${poster}`} alt="photo"/>
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
        )
    )
}