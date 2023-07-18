import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  max-width: auto;
  height: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-height: 245px;
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
  margin-top: 12px;
  margin-bottom: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 14px;
    margin-bottom: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const CharacterName = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 64px;
`;
