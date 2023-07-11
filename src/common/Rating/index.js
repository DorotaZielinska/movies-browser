import { RatingContainer, Vote, Votes } from "./styled";
import { ReactComponent as RatingIcon } from "./shape-star.svg";

export const Rating = ({ vote, votes}) => (
    <RatingContainer>
        <RatingIcon />
        <Vote>{ vote }</Vote>
        <Votes>{ votes } votes</Votes>
    </RatingContainer>
);