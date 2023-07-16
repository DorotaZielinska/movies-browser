import { Container } from "../../Container";
import { CharacterName, PersonName, Wrapper, Content, PersonPoster } from "./styled";

export const PeopleListTile = ({name, poster}) => {
  return (
    <Container>
      <Wrapper>
        <PersonPoster poster={poster}/>
        <Content>
          <PersonName>{name}</PersonName>
          <CharacterName></CharacterName>
        </Content>
      </Wrapper>
    </Container>
  );
};
