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
import { useSelector, useDispatch } from "react-redux";
import { changePage, selectPage } from "./paginationSlice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const screenWidth = window.innerWidth;
  const nextPage = page + 1;
  const prevPage = page - 1;
  const lastPage = 500;
  const firstPage = 1;

  return (
    <Container>
      <Wrapper>
        <Button
          disabled={page <= 1}
          onClick={() => dispatch(changePage(firstPage))}
        >
          <ButtonText>
            <BackIcon disabled={page <= 1} />
            {screenWidth <= 767 ? <BackIcon disabled={page <= 1} /> : ""}
            {screenWidth <= 767 ? "" : "First"}
          </ButtonText>
        </Button>
        <Button
          disabled={page <= 1}
          onClick={() => dispatch(changePage(prevPage))}
        >
          <ButtonText>
            <BackIcon disabled={page <= 1} />
            {screenWidth <= 767 ? "" : "Previous"}
          </ButtonText>
        </Button>
      </Wrapper>
      <Counter>
        <span>Page</span>
        <Page>{page}</Page>
        <span>of</span>
        <Page>500</Page>
      </Counter>
      <Wrapper>
        <Button
          disabled={page >= 500}
          onClick={() => dispatch(changePage(nextPage))}
        >
          <ButtonText>
            {screenWidth <= 767 ? "" : "Next"}
            <NextIcon disabled={page >= 500} />
          </ButtonText>
        </Button>
        <Button
          disabled={page >= 500}
          onClick={() => dispatch(changePage(lastPage))}
        >
          <ButtonText>
            {screenWidth <= 767 ? "" : "Last"}
            <NextIcon disabled={page >= 500} />
            {screenWidth <= 767 ? <NextIcon disabled={page >= 500} /> : ""}
          </ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
};
