import { Container, Spinner, Title } from "../styled";

export const Loading = ({ query }) => (
  <Container>
    <Title>{`Search results for "${query}"`} </Title>
    <Spinner />
  </Container>
);
