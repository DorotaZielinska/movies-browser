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
import { selectTotalPeoplePages } from "../../features/PeopleList/peopleSlice";

export const Pagination = () => {
  const page = useSelector(selectPage);
  const dispatch = useDispatch();
  const pageMovieState = useSelector(selectTotalPages);
  const pagePeopleState = useSelector(selectTotalPeoplePages);
  const screenWidth = window.innerWidth;
  const firstPage = 1;
  const nextPage = page + 1;
  const prevPage = page - 1;
  let lastPage;

  const location = useLocation();
  if (location.pathname === "/movies") {
    lastPage = pageMovieState > 500 ? 500 : pageMovieState;
  } else if (location.pathname === "/people") {
    lastPage = pagePeopleState > 500 ? 500 : pagePeopleState;
  }

  useEffect(() => {
    let newUrl;
    if (location.pathname === "/movies") {
      newUrl = `/${"popular/movies&language=en-US&page="}${page}`;
      window.history.pushState({ page }, "", newUrl);
    } else if (location.pathname === "/people") {
      newUrl = `/${"popular/people&language=en-US&page="}${page}`;
      window.history.pushState({ page }, "", newUrl);
    }
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
          disabled={page >= lastPage}
          onClick={() => dispatch(changePage(nextPage))}
        >
          <ButtonText>
            {screenWidth <= 767 ? "" : "Next"}
            <NextIcon disabled={page >= lastPage} />
          </ButtonText>
        </Button>
        <Button
          disabled={page >= 500 || page === lastPage}
          onClick={() => dispatch(changePage(lastPage))}
        >
          <ButtonText>
            {screenWidth <= 767 ? "" : "Last"}
            <NextIcon disabled={page >= lastPage} />
            {screenWidth <= 767 ? <NextIcon disabled={page <= 500} /> : ""}
          </ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
};
