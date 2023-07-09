
import { Genres } from "../Genres"
import { Rating } from "../Rating"
import { Content, MovieTileList, Poster, StyledSubbTitle, StyledTitle } from "./styled"

export const TileList = ({ title, year, poster}) => (
    <MovieTileList>
        <Poster />
        <Content>
            <div>
                <StyledTitle>{title}</StyledTitle>
                <StyledSubbTitle>{year}</StyledSubbTitle>
                <Genres />
            </div>
            <div>
                <Rating />
            </div>

        </Content>
    </MovieTileList>
)