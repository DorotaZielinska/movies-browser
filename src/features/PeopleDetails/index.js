import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { Container } from "../../common/Container";
import {
  ActorDescriptionTile,
  MainHeader,
} from "../../common/TileList/PeopleDetailsTile";
import {
  ItemPeopleDetails,
  ListPeopleDetails,
  SubtitleBirth,
  TitlePeopleDetails,
} from "./styled";
import {
  getPersonId,
  resetPeopleDetails,
  selectDetailsStatus,
  selectPeopleCast,
  selectPeopleCredits,
  selectPeopleCrew,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { MovieTileListPeople } from "../../common/TileList/TileMovie";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectDetailsStatus);
  const details = useSelector((state) => selectPeopleDetails(state, id));
  const cast = useSelector((state) => selectPeopleCast(state, id));
  // const crew = useSelector((state) => selectPeopleCrew(state, id));
  const credits = useSelector((state) => selectPeopleCredits(state, id));
  console.log("credits", selectPeopleCredits);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    //
    dispatch(getPersonId(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetPeopleDetails());
    };
  }, [dispatch]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" || !details ? (
    <Loading />
  ) : (
    <>
      <Container>
        <>
          <ActorDescriptionTile
            poster={details.profile_path}
            name={details.name}
            birthday={
              <>
                <SubtitleBirth>
                  {screenWidth <= 450 ? "Birth: " : "Date of birth: "}{" "}
                </SubtitleBirth>
                {details.birthday === null
                  ? null
                  : details.birthday.split("-").reverse().join(".")}
              </>
            }
            birthPlace={
              <>
                <SubtitleBirth>Place of birth: </SubtitleBirth>
                {details.place_of_birth}
              </>
            }
            biography={details.biography}
          />
        </>

        <>
          <TitlePeopleDetails>{`Movies - cast ()`}</TitlePeopleDetails>
          <ListPeopleDetails>
            {cast.map((movie) => (
              <ItemPeopleDetails key={movie.credit_id}>
                <MovieTileListPeople
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  vote={movie.vote_average}
                  votes={movie.vote_count}
                  genres={movie.genre_ids}
                  character={movie.character}
                />
              </ItemPeopleDetails>
            ))}
          </ListPeopleDetails>
        </>
        <>
          <TitlePeopleDetails>{`Movies - crew ()`}</TitlePeopleDetails>
          <ListPeopleDetails>
            {credits.crew.map((movie) => (
              <ItemPeopleDetails key={movie.credit_id}>
                <MovieTileListPeople
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  vote={movie.vote_average}
                  votes={movie.vote_count}
                  genres={movie.genre_ids}
                  character={movie.character}
                />
              </ItemPeopleDetails>
            ))}
          </ListPeopleDetails>
        </>
      </Container>
    </>
  );
};
