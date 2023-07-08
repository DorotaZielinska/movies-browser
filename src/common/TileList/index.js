import { Genres } from "../Genres"
import { Rating } from "../Rating"
import { Content, MovieTileList, Poster, StyledSubbTitle, StyledTitle } from "./styled"

export const TileList = () => (
    <MovieTileList>
        <Poster />
        <Content>
            <StyledTitle />
            <StyledSubbTitle />
            <Genres />
            <Rating />
        </Content>
    </MovieTileList>
)