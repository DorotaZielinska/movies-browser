import { Warning, Container, Title, Info, Link, LinkContent } from "./styled";

export const Error = () => (
  <>
    <Warning />
    <Container>
      <Title>Ooops! Something went wrong... </Title>
      <Info>Please check your network connection and try again</Info>
      <Link to="/movies">
        <LinkContent>Back to home page</LinkContent>
      </Link>
    </Container>
  </>
);
