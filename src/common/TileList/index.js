import { Genres } from "../Genres"
import { Rating } from "../Rating"
import { Content, Poster, StyledSubbTitle, StyledTitle, TileList } from "./styled"

export const TileList = () => (
    <TileList>
        <Poster />
        <Content>
            <StyledTitle />
            <StyledSubbTitle />
            <Genres />
            <Rating />
        </Content>
    </TileList>
)