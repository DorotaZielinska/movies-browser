import { Container } from "../../Container";
import { CharacterName, PersonName, Wrapper, Content } from "./styled";
import { PersonImage } from "./Image";
import { GetDetailsLink } from "../TileMovie/styled";

export const PeopleListTile = ({ name, poster, id }) => {
  return (
    <GetDetailsLink to={`/people/${id}`} key={id}>
      <Container>
        <Wrapper>
          <PersonImage poster={poster} />
          <Content>
            <PersonName>{name}</PersonName>
            <CharacterName></CharacterName>
          </Content>
        </Wrapper>
      </Container>
    </GetDetailsLink>
  );
};
