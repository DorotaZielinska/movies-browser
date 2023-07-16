import { Image, Title, Wrapper } from "../styled";
import { Container } from "../../../common/Container";

export const NotFound = ({ query }) => (
  <Container>
    <Title>{`Sorry, there are no results for "${query}"`}</Title>
    <Wrapper>
      <Image />
    </Wrapper>
  </Container>
);
