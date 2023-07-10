import { GenresContainer, Genre } from "./styled";

export const Genres = ({ genres }) => (
    <GenresContainer>
        <Genre>{genres}</Genre>
    </GenresContainer>
);