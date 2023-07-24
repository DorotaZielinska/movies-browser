import { Container } from "../../Container";
import { CharacterName, PersonName, Wrapper, Content, GetDetailsPeopleLink } from "./styled";
import { PersonImage } from "./Image";

export const PeopleListTile = ({ name, poster, id }) => {
  return (
    <GetDetailsPeopleLink to={`/people/${id}`} key={id}>
      <Container>
        <Wrapper>
          <PersonImage poster={poster} />
          <Content>
            <PersonName>{name}</PersonName>
            <CharacterName></CharacterName>
          </Content>
        </Wrapper>
      </Container>
    </GetDetailsPeopleLink>
  );
};
