import { Container, Spinner, Title } from "../styled";

const Loading = ({ query }) => (
  <Container>
    <Title>{`Search results for "${query}"`} </Title>
    <Spinner />
  </Container>
);

export default Loading;
