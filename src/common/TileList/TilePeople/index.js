import { Container } from "../../Container";
import { CharacterName, PersonName, Wrapper, Content, GetDetailsPeopleLink } from "./styled";
import { PersonImage } from "./Image";

export const PeopleListTile = ({ name, poster, id, character }) => {
  return (
    <GetDetailsPeopleLink to={`/people/${id}`} key={id}>
      
        <Wrapper>
          <PersonImage poster={poster} />
          
            <PersonName>{name}</PersonName>
            
            <CharacterName>{character}</CharacterName>
         
        </Wrapper>
      
    </GetDetailsPeopleLink>
  );
};
