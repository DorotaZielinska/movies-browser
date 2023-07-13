import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { debounce } from 'lodash';


import { Wrapper, Input } from "./styled";
import { searchQueryParamName } from "./searchQueryParamName";
import { useQueryParameter, useReplaceQueryParameter } from "./queryParameter";
import { fetchMoviesListLoad, setSearchQuery } from "../../../features/movieListSlice";
import { useCallback } from "react";

export const Search = () => {
    const moviesMatch = useRouteMatch("/movies");
    const peopleMatch = useRouteMatch("/people");
    const placeholder = moviesMatch ? "Search for movies..." : "Search for people...";
    const dispatch = useDispatch();

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();

    const fetchMovies = useCallback(
        debounce(() => dispatch(fetchMoviesListLoad()), 1000),
        []
    );

    const onInputChange = ({ target }) => {
        replaceQueryParameter(
            searchQueryParamName,
            target.value.trim() !== "" ? target.value : undefined,
            peopleMatch ? 'people' : undefined,
            moviesMatch ? 'movies' : undefined,
        );
        dispatch(setSearchQuery(target.value));
        fetchMovies();
    };

    return (
        <Wrapper>
            <Input
                placeholder={placeholder}
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    );
};