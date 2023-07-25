import { SubtitleBirth } from "../../../features/PeopleDetails/styled";
import { Container } from "../../Container";
import { PersonDetailsImage } from "./Image";
import {
  ActorContent,
  ActorDetailsTile,
  ActorSubTitle,
  ActorTitle,
  DescriptionPeople,
  InfoDetails,
  PlaceSubTitle,
} from "./styled";

export const ActorDescriptionTile = ({
  name,
  birthday,
  poster,
  biography,
  birthPlace,
}) => {

  return (
    <Container>
      <ActorDetailsTile>
        <PersonDetailsImage poster={poster} />
        <ActorContent>
          <ActorTitle>{name}</ActorTitle>
          {birthday && (
            <InfoDetails>
              <SubtitleBirth>Date of Birth: </SubtitleBirth>
              <ActorSubTitle>{birthday}</ActorSubTitle>
            </InfoDetails>
          )}
          {birthPlace && (
            <InfoDetails>
              <PlaceSubTitle>{birthPlace}</PlaceSubTitle>
            </InfoDetails>
          )}
        </ActorContent>
        {biography && <DescriptionPeople>{biography}</DescriptionPeople>}
      </ActorDetailsTile>
    </Container>
  );
};
