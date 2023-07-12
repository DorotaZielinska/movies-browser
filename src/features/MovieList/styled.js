import styled from "styled-components";

export const MovieListTitle = styled.h1`
    margin-top: 56px;
    font-size: 36px;
    font-weight: 600;
    color: ${({ theme }) => theme.color.woodsmoke};
    
    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        line-height: 120%;
        margin-left: 16px;
        margin-top:24px;
        margin-bottom: 12px;
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
        padding-right: 13px;
    }
`;

export const ItemMoviesList = styled.li` 
`;