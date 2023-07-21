import styled from "styled-components";
import { ReactComponent as backIcon } from "./icons/backIcon.svg";
import { ReactComponent as nextIcon } from "./icons/nextIcon.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0 100px;
  

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin: 32px 0 100px;
    gap: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 8px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.color.pattensBlue};
  cursor: pointer;
  
  &:disabled {
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: flex;
    align-items: center;
    height: 23px;
    gap: 4px;
    padding: 8px 12px;
  }
`;

export const ButtonText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: flex;
    gap: 4px;
  }
`;

export const BackIcon = styled(backIcon)`
  color: ${({ theme }) => theme.color.scienceBlue};
  margin-right: 8px;

  color: ${({ disabled, theme }) =>
    disabled ? theme.color.waterloo : theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 5px;
    height: 8px;
    margin-right: 0px;
  }
`;

export const NextIcon = styled(nextIcon)`
  margin-left: 8px;
  color: ${({ disabled, theme }) =>
    disabled ? theme.color.waterloo : theme.color.scienceBlue};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 5px;
    height: 8px;
    margin-left: 0;
  }
`;

export const Counter = styled.p`
  display: flex;
  gap: 8px;
  margin: 0 24px;
  color: ${({ theme }) => theme.color.waterloo};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 10px;
    line-height: 24px;
    margin: 0;
    gap: 2px;
  }
`;

export const Page = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 10px;
    line-height: 24px;
  }
`;
