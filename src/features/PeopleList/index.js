import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";
import { useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import { ItemPeopleList, PeopleListTitle, PeopleList } from "./styled";
import { PeopleListTile } from "../../common/TileList/TilePeople/index";
import { Container } from "../../common/Container";
import {
  selectPeopleList,
  selectStatus,
  selectTotalResult,
  fetchSearchPeopleLoad,
  fetchPeopleListLoad,
} from "./peopleSlice";
import { searchQueryParamName } from "../../common/Navigation/Search/searchQueryParamName";
import { Loading } from "../AsideActions/Loading/loading";
import { NotFound } from "../AsideActions/NotFound/notFound";
import { Error } from "../AsideActions/Error/error";
import { Pagination } from "../../common/Pagination";
import { resetPage, selectPage } from "../../common/Pagination/paginationSlice";

export const PeopleLists = () => {
  const popularPeople = useSelector(selectPeopleList);
  const status = useSelector(selectStatus);
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);
  const totalResults = useSelector(selectTotalResult);
  const isLoad = useRef(true);

  const debouncedLoad = useCallback(
    debounce((query) => {
      isLoad.current = false;
      dispatch(fetchSearchPeopleLoad(query));
    }, 1000),
    [dispatch]
  );

  useEffect(() => {
    if (query !== "" && query !== null) {
      debouncedLoad(query);
    } else {
      debouncedLoad.cancel();
      isLoad.current = true;
      dispatch(fetchPeopleListLoad(page));
    }
  }, [dispatch, query, debouncedLoad, page]);

  useEffect(() => {
    dispatch(resetPage());
  }, [dispatch]);

  return status === "error" ? (
    <Error />
  ) : status === "loading" ? (
    <Loading query={query} />
  ) : totalResults === 0 ? (
    <NotFound query={query} />
  ) : (
    <Container>
      <PeopleListTitle>
        {!isLoad.current
          ? `Search results for "${query}" (${totalResults})`
          : "Popular People"}
      </PeopleListTitle>
      <PeopleList>
        {popularPeople.map((people) => (
          <ItemPeopleList key={people.id}>
            <PeopleListTile
              id={people.id}
              poster={people.profile_path}
              name={people.name}
            />
          </ItemPeopleList>
        ))}
      </PeopleList>
      <Pagination />
    </Container>
  );
};
