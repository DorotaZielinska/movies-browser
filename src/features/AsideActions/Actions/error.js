import { Warning, Container, Title, Button, Content } from "../styled";

const Error = () => (
  <>
    <Warning />
    <Container>
      <Title>Ooops! Something went wrong... </Title>
      <span>Please check your network connection and try again</span>
      <Button>
        <Content>Back to home page</Content>
      </Button>
    </Container>
  </>
);

export default Error;
