import { Genres } from "../Genres"
import { Rating } from "../Rating"
import { Content, MovieTileList, Poster, StyledSubbTitle, StyledTitle } from "./styled"
import poster from "./poster.png"

export const TileList = () => (
    <MovieTileList>
        <Poster src={poster} alt="" />
        <Content>
            <div>
                <StyledTitle>Mulan</StyledTitle>
                <StyledSubbTitle>2020</StyledSubbTitle>
                <Genres />
            </div>
            <div>
                <Rating />
            </div>

        </Content>
    </MovieTileList>
)