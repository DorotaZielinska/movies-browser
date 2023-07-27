import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  max-width: auto;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-height: 290px;
    text-align: center;
    padding: 8px;
  }
`;

export const PersonPoster = styled.img`
  border-radius: 5px;
`;

export const PersonName = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 12px 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 14px;
  }
`;

export const CharacterName = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 105px;
`;
