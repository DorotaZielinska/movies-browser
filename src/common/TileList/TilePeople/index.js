import { Container } from "../../Container";
import { CharacterName, PersonName, Wrapper, Content } from "./styled";
import { PersonImage } from "./Image";

export const PeopleListTile = ({ name, poster, character }) => {
  return (
    <Container>
      <Wrapper>
        <PersonImage poster={poster} />
        <Content>
          <PersonName>{name}</PersonName>
          <CharacterName>{character}</CharacterName>
        </Content>
      </Wrapper>
    </Container>
  );
};
