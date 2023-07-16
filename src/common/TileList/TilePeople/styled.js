import styled from "styled-components";

// import { ReactComponent as Poster } from "./temporary.svg";

export const Wrapper = styled.article`
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  max-width: 208px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
`;

export const PersonPoster = styled.img`
  border-radius: 5px;
`;

export const PersonName = styled.h2`
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-top: 5px;
  margin-bottom: auto;
`;

export const CharacterName = styled.span`
  color: ${({ theme }) => theme.color.waterloo};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
