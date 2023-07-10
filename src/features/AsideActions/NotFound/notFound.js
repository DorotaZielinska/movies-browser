import { Container, Image, Title } from "../styled";

export const NotFound = ({ props }) => (
  <Container>
    <Title>{`Sorry, there are no results for "${props}"`}</Title>
    <Image />
  </Container>
);
