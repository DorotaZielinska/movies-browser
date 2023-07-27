import styled from "styled-components";

export const TitlePeopleDetails = styled.h1`
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-left: 16px;
    margin-top: 24px;
    margin-bottom: 12px;
    font-size: 18px;
  }
`;

export const ListPeopleDetails = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
 
  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
    margin: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: flex;
    flex-direction: column;
    grid-gap: 16px;
  }
`;

export const ItemPeopleDetails = styled.li``;

export const SubtitleBirth = styled.span`
font-size: 18px;
font-weight: 400;
line-height: 1.2;
margin: 0;
 margin-top: 8px;
 margin-right: 10px;
color: ${({ theme }) => theme.color.stormGray};

@media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 15px;
    margin-bottom: 4px;
    margin-right: 4px;
  }

@media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
  
  }
`;
