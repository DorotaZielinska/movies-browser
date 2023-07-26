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
  // selectPeopleCredits,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";

export const PeopleDetails = () => {
  const { id } = useParams();
  console.log("id", id);
  const dispatch = useDispatch();
  const status = useSelector(selectDetailsStatus);
  const details = useSelector((state) => selectPeopleDetails(state, id));
  //const credits = useSelector(state => selectPeopleCredits(state,id));

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
  ) : status === "loading" ? (
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
                {screenWidth <= 450 ? "Birth: " : "Date of Birth: "}{" "}
              </SubtitleBirth>
              {details.birthday.split("-").reverse().join(".")}
            </>
          }
          birthPlace={
            <>
              <SubtitleBirth>Place of Birth: </SubtitleBirth>
              {details.place_of_birth}
            </>
          }
          biography={details.biography}
        />
      </Container>
    </>
  );
};
