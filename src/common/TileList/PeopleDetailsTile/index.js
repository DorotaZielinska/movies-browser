import { Container } from "../../Container";
import { PersonDetailsImage } from "./Image";
import {
  ActorContent,
  ActorDetailsTile,
  ActorSubTitle,
  ActorTitle,
  DescriptionPeople,
  InfoDetails,
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
          <ActorTitle>title={title}</ActorTitle>
          <InfoDetails>
            <ActorSubTitle>dateOfBirth={dateOfBirth}</ActorSubTitle>
          </InfoDetails>
          <InfoDetails>
            <ActorSubTitle>placeOfBirth={placeOfBirth}</ActorSubTitle>
          </InfoDetails>
        </ActorContent>
        <DescriptionPeople>{overview}</DescriptionPeople>
      </ActorDetailsTile>
    </Container>
  );
};
