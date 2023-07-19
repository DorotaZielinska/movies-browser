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
import {
  MainInfo,
  PosterContainer,
  Poster,
  PosterGradient,
  Rating,
  Star,
  Title,
  Votes,
  Wrapper,
} from "./styled";
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
        <PosterContainer>
          <Poster src={`${image}${details.backdrop_path}`} alt="poster" />
          <PosterGradient />{" "}
          <MainInfo>
            <Title>{details.title}</Title>
            <Rating>
              <Star />
              {details.vote_average.toFixed(1)}
              <span>/10</span>
            </Rating>
            <Votes>{details.vote_count}votes</Votes>
          </MainInfo>
        </PosterContainer>
      </Wrapper>
      <Container>
        <p>{details.overview}</p>
      </Container>
    </>
  );
};
