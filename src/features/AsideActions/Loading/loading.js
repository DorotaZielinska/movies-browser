import { Container } from "../../../common/Container";
import { Spinner, Title } from "../styled";

export const Loading = () => (
  <Container>
    <Title>{`Search results for ""`} </Title>
    <Spinner />
  </Container>
);
