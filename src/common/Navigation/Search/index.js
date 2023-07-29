import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Wrapper, Input } from "./styled";
import { pageQueryParamName, searchQueryParamName } from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameter";
import { resetPage } from "../../Pagination/paginationSlice";

export const Search = () => {
  const dispatch = useDispatch();
 // const moviesMatch = useRouteMatch("/movies");
 // const peopleMatch = useRouteMatch("/people");
 // const placeholder = moviesMatch
  //  ? "Search for movies..."
  //  : "Search for people...";
  const location = useLocation();

  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParameter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter([{
      key:searchQueryParamName,
      value:  target.value.trim() !== "" ? target.value : undefined,
    }, {
      key: pageQueryParamName,
      value:1,
    },
  ] //  peopleMatch ? "people" : undefined,
    //  moviesMatch ? "movies" : undefined
    );
    dispatch(resetPage());
  };

  return (
    <>
      <Wrapper>
        <Input
          placeholder={`${location.pathname.includes("movie")
        ? "Search for movies..."
        : "Search for people..."
        }`}
          value={query || ""}
          onChange={onInputChange}
        />
      </Wrapper>
    </>
  );
};
