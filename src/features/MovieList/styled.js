import styled from "styled-components";

export const MovieListContainer = styled.div`
    width: 1368px;
    height: 1391px;
    display: grid;
    grid-template-rows: auto 2fr;
    grid-gap: 24px;
`;

export const MovieListTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
`;

export const MoviesList = styled.ul`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

export const ItemMoviesList = styled.li`
`;