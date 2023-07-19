import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  getMovieId,
  resetMovieDetails,
  selectDetails,
  selectMovieState,
} from "./movieDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { Container } from "../../common/Container";
import { Poster, PosterGradient, Title, Wrapper } from "./styled";
const image = "https://image.tmdb.org/t/p/original/";

export const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectMovieState);
  const details = useSelector(selectDetails);

  useEffect(() => {
    dispatch(getMovieId(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetMovieDetails());
    };
  }, [dispatch]);

  return status === "loading" || !details ? (
    <Loading />
  ) : status === "error" ? (
    <Error />
  ) : (
    <>
      <Wrapper>
        <Container>
          <Poster src={`${image}${details.backdrop_path}`} alt="poster" />
          <Title>{details.title}</Title>
          <PosterGradient />
        </Container>
      </Wrapper>
      <Container>
        {/* hello {id} */}

        <p>{details.overview}</p>
        {details.vote_average}
      </Container>
    </>
  );
};
