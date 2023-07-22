import { useParams } from "react-router-dom";
import { Container } from "../../common/Container";
import { ActorDescriptionTile } from "../../common/TileList/PeopleDetailsTile";
import { MovieTileListPeople } from "../../common/TileList/TileMovie";
import {
  ItemPeopleDetails,
  ListPeopleDetails,
  TitlePeopleDetails,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getPersonId,
  selectDetailsStatus,
  selectPeopleCast,
  selectPeopleCrew,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";
import { useEffect } from "react";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPersonId({ personId: id }));
  }, [id, dispatch]);

  const status = useSelector(selectDetailsStatus);
  const cast = useSelector(selectPeopleCast);
  const details = useSelector(selectPeopleDetails);
  const crew = useSelector(selectPeopleCrew);

  return status === "error" ? (
    <Error />
  ) : status === "loading" ? (
    <Loading />
  ) : (
    <Container>
      <ActorDescriptionTile
        poster={details.profile_path}
        title={details.name}
        dateOfBirth={details.birthday}
        placeOfBirth={details.place_of_birth}
        overview={details.biography}
      />
      {cast.length > 0 && (
        <>
          <TitlePeopleDetails>{`Movies - cast (${cast.filter(movie => movie.title).length})`}</TitlePeopleDetails>
          <ListPeopleDetails>
            {cast.map((movie) => movie.title && (
              <ItemPeopleDetails key={movie.credit_id}>
                <MovieTileListPeople
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  character={movie.character}
                  year={movie.release_date}
                  vote={movie.vote_average}
                  votes={movie.vote_count}
                  genres={movie.genre_ids}
                />
              </ItemPeopleDetails>
            ))}
          </ListPeopleDetails>
        </>
      )}
      ;
      {crew.length > 0 && (
        <>
          <TitlePeopleDetails>{`Movies - crew (${crew.filter(movie => movie.title).length})`}</TitlePeopleDetails>
          <ListPeopleDetails>
            {crew.map((movie) => (
              <ItemPeopleDetails key={movie.credit_id}>
                <MovieTileListPeople
                  id={movie.id}
                  poster={movie.poster_path}
                  title={movie.title}
                  character={movie.character}
                  year={movie.release_date}
                  vote={movie.vote_average}
                  votes={movie.vote_count}
                  genres={movie.genre_ids}
                />
              </ItemPeopleDetails>
            ))}
          </ListPeopleDetails>
        </>
      )}
    </Container>
  );
};
