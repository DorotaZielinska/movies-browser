import styled from "styled-components";

export const MovieListTitle = styled.h1`
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin-top: 24px;
    margin-bottom: 12px;
  }
`;

export const MoviesList = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
    margin: 16px;
  }
`;

export const ItemMoviesList = styled.li``;
