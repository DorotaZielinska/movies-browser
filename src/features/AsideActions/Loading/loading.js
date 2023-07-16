import { Container } from "../../../common/Container";
import { Spinner, Title } from "../styled";

export const Loading = ({ query, totalResults }) => (
  <Container>
    <Title>
      {" "}
      {query ? `Search results for "${query}" (${totalResults})` : ""}
    </Title>
    <Spinner />
  </Container>
);
