import { RatingContainer, Vote, Votes } from "./styled";
import { ReactComponent as RatingIcon } from "./shape-star.svg";

export const Rating = () => (
    <RatingContainer>
        <RatingIcon />
        <Vote>7,8</Vote>
        <Votes>35 votes</Votes>
    </RatingContainer>
);