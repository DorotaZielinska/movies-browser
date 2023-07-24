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
  title,
  poster,
  overview,
  dateOfBirth,
  placeOfBirth,
}) => {
  return (
    <Container>
      <ActorDetailsTile>
        <PersonDetailsImage poster={poster} />
        <ActorContent>
          <ActorTitle>{title}</ActorTitle>
          <InfoDetails>
            <ActorSubTitle>{dateOfBirth}</ActorSubTitle>
          </InfoDetails>
          <InfoDetails>
            <PlaceSubTitle>{placeOfBirth}</PlaceSubTitle>
          </InfoDetails>
        </ActorContent>
        <DescriptionPeople>{overview}</DescriptionPeople>
      </ActorDetailsTile>
    </Container>
  );
};
