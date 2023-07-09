import { Container } from "../../common/Container";
import { TileList } from "../../common/TileList";
import { ItemMoviesList, MovieListTitle, MoviesList } from "./styled";

export const MovieList = () => (
    <Container>
        <MovieListTitle>Popular movies</MovieListTitle>
            <MoviesList>
                <ItemMoviesList>
                    <TileList />
                    <TileList />
                    <TileList />
                    <TileList />
                    <TileList />
                    <TileList />
                    <TileList />
                    <TileList />
                </ItemMoviesList>
            </MoviesList>
    </Container>
)