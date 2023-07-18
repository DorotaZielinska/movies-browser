import styled from "styled-components";

export const PeopleListTitle = styled.h1`
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    margin-left: 16px;
    margin-top: 24px;
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 20px;
  }
`;

export const PeopleList = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    grid-template-columns: repeat(5, 1fr);
    padding-right: 16px;
    padding-left: 16px;
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemPeopleList = styled.li``;
