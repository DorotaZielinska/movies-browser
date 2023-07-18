import styled from "styled-components";
import { ReactComponent as warningIcon } from "./warning.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Warning = styled(warningIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 180px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 75px;
    height: 75px;
    margin-top: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 35px;
    height: 35px;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 22px;
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }
`;

export const Info = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 14px;
    text-align: center;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  padding: 16px 24px;
  border-radius: 5px;
  text-decoration-line: none;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 8px 12px;
  }
`;

export const LinkContent = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  line-height: 1.9;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-weight: 500;
    line-height: 1.4;
  }
`;
