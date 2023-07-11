import {
  Container,
  Wrapper,
  Button,
  ButtonText,
  BackIcon,
  NextIcon,
  Counter,
  Page,
} from "./styled";

export const Pagination = () => {
  return (
    <Container>
      <Wrapper>
        <Button disabled>
          <ButtonText>
            <BackIcon disabled />
            First
          </ButtonText>
        </Button>
        <Button disabled>
          <ButtonText>
            <BackIcon disabled />
            Previous
          </ButtonText>
        </Button>
      </Wrapper>
      <Counter>
        <span>Page</span>
        <Page>1</Page>
        <span>of</span>
        <Page>500</Page>
      </Counter>
      <Wrapper>
        <Button>
          <ButtonText>
            Next
            <NextIcon />
          </ButtonText>
        </Button>
        <Button>
          <ButtonText>
            Last
            <NextIcon />
          </ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
};
