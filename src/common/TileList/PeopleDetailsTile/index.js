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
  year,
  poster,
  place,
  content,
}) => {
  return (
    <Container>
      <ActorDetailsTile>
        <PersonDetailsImage poster={poster} />
        <ActorContent>
          <ActorTitle>Dorota Hoops</ActorTitle>
         <InfoDetails>
         <ActorSubTitle>Date of Birth: 2021-25-32</ActorSubTitle>
         </InfoDetails>
         <InfoDetails>
         <ActorSubTitle>Klorps, kalaka, dlald</ActorSubTitle>
         </InfoDetails>
        </ActorContent>
        <DescriptionPeople>lorem ipusumloremLiu Yifei was born in Wuhan, Hubei, Province of China on August 25th, 1987. She began modeling at the age of 8 and was trained in singing, dancing and the piano. Moving to the United States at 10 with her mother, Liu lived there for four years.
             </DescriptionPeople>
      </ActorDetailsTile>
    </Container>
  );
};
