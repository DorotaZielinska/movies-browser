import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../common/Container";
import { ActorDescriptionTile } from "../../common/TileList/PeopleDetailsTile";
import { SubtitleBirth } from "./styled";
import {
  getPersonId,
  selectDetailsStatus,
  selectPeopleDetails,
} from "./peopleDetailsSlice";
import { Loading } from "../AsideActions/Loading/loading";
import { Error } from "../AsideActions/Error/error";

export const PeopleDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const status = useSelector(selectDetailsStatus);
  const details = useSelector(selectPeopleDetails);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    dispatch(getPersonId({ personId: id }));
  }, [id, dispatch]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" ? (
    <Loading />
  ) : (
    <Container>
      <ActorDescriptionTile
        poster={details.profile_path}
        title={details.name}
        dateOfBirth={
          <>
            <SubtitleBirth>
              {screenWidth < 450 ? "Birth: " : "Date of Birth: "}
            </SubtitleBirth>
            {details.birthday.split("-").reverse().join(".")}
          </>
        }
        placeOfBirth={
          <>
            <SubtitleBirth>Place of birth: </SubtitleBirth>
            {details.place_of_birth}
          </>
        }
        overview={details.biography}
      />
    </Container>
  );
};
