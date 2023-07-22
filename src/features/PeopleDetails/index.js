import { Container } from "../../common/Container";
import { ActorDescriptionTile } from "../../common/TileList/PeopleDetailsTile";
import { MovieTileListPeople } from "../../common/TileList/TileMovie";
import {
  ItemPeopleDetails,
  ListPeopleDetails,
  TitlePeopleDetails,
} from "./styled";

export const PeopleDetails = () => {

  

  return (
    <Container>
        <ActorDescriptionTile />
      <>
        <TitlePeopleDetails>{`Movies - cast ()`}</TitlePeopleDetails>
        <ListPeopleDetails>
          <ItemPeopleDetails>
            <MovieTileListPeople />
          </ItemPeopleDetails>
        </ListPeopleDetails>
      </>
      <>
        <Container>
          <>
            <TitlePeopleDetails>{`Movies - crew ()`}</TitlePeopleDetails>
            <ListPeopleDetails>
              <ItemPeopleDetails>
                <MovieTileListPeople />
              </ItemPeopleDetails>
            </ListPeopleDetails>
          </>
        </Container>
      </>
    </Container>
  );
};
