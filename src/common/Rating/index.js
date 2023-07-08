import { RatingContainter, RatingIcon, Vote, Votes } from "./styled";
import shape from "./shape-star.svg";

export const Rating = () => (
    <RatingContainter>
        <RatingIcon src= {shape} alt="star" />
        <Vote>7,8</Vote>
        <Votes>35 votes</Votes>
    </RatingContainter>
);