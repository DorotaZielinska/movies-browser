import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Wrapper, Input } from "./styled";
import { searchQueryParamName } from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameter";
import { setSearchQuery } from "../../../features/movieListSlice"

export const Search = () => {
    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const placeholder = moviesMatch ? "Search for movies..." : "Search for people...";
    const dispatch = useDispatch();

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter(
            searchQueryParamName,
            target.value.trim() !== "" ? target.value : undefined,
            peopleMatch ? 'people' : undefined,
            moviesMatch ? 'movies' : undefined,
        );
        console.log("Testing dispatch value ", target.value);
        dispatch(setSearchQuery(target.value))
    };


    return (
        <>
            <Wrapper>
                <Input
                    placeholder={placeholder}
                    value={query || ""}
                    onChange={onInputChange}
                />
            </Wrapper>
        </>
    );
};