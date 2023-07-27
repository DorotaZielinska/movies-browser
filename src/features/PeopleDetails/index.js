import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { ActorDescriptionTile } from "../../common/TileList/PeopleDetailsTile";
import { SubtitleBirth } from "./styled";
import {
  getPersonId,
  resetPeopleDetails,
  selectDetailsStatus,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectDetailsStatus);
  const details = useSelector((state) => selectPeopleDetails(state, id));
  const screenWidth = window.innerWidth;

  useEffect(() => {
    dispatch(getPersonId(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(resetPeopleDetails());
    };
  }, [dispatch]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" ||!details ? (
    <Loading />
  ) : (
    <>
      <Container>
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
      </Container>
    </>
  );
};
