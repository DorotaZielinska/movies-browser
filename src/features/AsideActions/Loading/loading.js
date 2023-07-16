import { Container } from "../../../common/Container";
import { Spinner, Title } from "../styled";

export const Loading = ({ query }) => (
  <Container>
    <Title>{query ? `Search results for "${query}"` : ""}</Title>
    <Spinner />
  </Container>
);
