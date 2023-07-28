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
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { selectTotalPages } from "../../features/MovieList/movieListSlice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const pageState = useSelector(selectTotalPages);
  const screenWidth = window.innerWidth;
  const nextPage = page + 1;
  const prevPage = page - 1;
  const lastPage = pageState;
  const firstPage = 1;
  const location = useLocation();

  useEffect(() => {
    let newUrl;
    if (location.pathname === "/movies") {
      newUrl = `/${"movies/page="}${page}`;
      console.log(newUrl);
    } else {
      newUrl = `/${"people/page="}${page}`;
    }
    window.history.pushState({ page }, "", newUrl);

    return () => {
      window.history.replaceState({ page }, window.location.href);
    };
  }, [page, location.pathname]);

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
        <Page>{`${lastPage >= 500 ? 500 : lastPage}`}</Page>
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
