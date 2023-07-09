import styled from "styled-components";

export const MovieListTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke}; 
`;

export const MoviesList = styled.ul` 
    padding: 0px; 
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
`;

export const ItemMoviesList = styled.li` 
`;