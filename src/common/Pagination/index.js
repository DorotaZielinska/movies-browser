import {
  firstPage,
  lastPage,
  nextPage,
  previousPage,
} from "../../features/movieListSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectPage } from "../../features/movieListSlice";
import { getPopularMovies } from "../../features/getDataApi";
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
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPage);
  console.log(currentPage);
  return (
    <Container>
      <Wrapper>
        <Button
          disabled={currentPage <= 1}
          onClick={() => dispatch(firstPage(currentPage))}
        >
          <ButtonText>
            <BackIcon disabled={currentPage <= 1} />
            First
          </ButtonText>
        </Button>
        <Button
          disabled={currentPage <= 1}
          onClick={() => dispatch(previousPage(currentPage))}
        >
          <ButtonText>
            <BackIcon disabled={currentPage <= 1} />
            Previous
          </ButtonText>
        </Button>
      </Wrapper>
      <Counter>
        <span>Page</span>
        <Page>{currentPage}</Page>
        <span>of</span>
        <Page>500</Page>
      </Counter>
      <Wrapper>
        <Button
          onClick={() => dispatch(nextPage(currentPage))}
          disabled={currentPage >= 500}
        >
          <ButtonText>
            Next
            <NextIcon disabled={currentPage >= 500} />
          </ButtonText>
        </Button>
        <Button
          disabled={currentPage >= 500}
          onClick={() => dispatch(lastPage(currentPage))}
        >
          <ButtonText>
            Last
            <NextIcon disabled={currentPage >= 500} />
          </ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
};
