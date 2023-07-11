import styled from "styled-components";

export const MovieListTitle = styled.h1`
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        margin-left: 16px;
    }
`;

export const MoviesList = styled.ul` 
    padding: 0px; 
    list-style: none;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        grid-template-columns: 1fr;
    }
`;

export const ItemMoviesList = styled.li` 
`;