import { Warning, Container, Title, Info, Button, Content } from "../styled";

export const Error = () => (
  <>
    <Warning />
    <Container>
      <Title>Ooops! Something went wrong... </Title>
      <Info>Please check your network connection and try again</Info>
      <Button>
        <Content>Back to home page</Content>
      </Button>
    </Container>
  </>
);
