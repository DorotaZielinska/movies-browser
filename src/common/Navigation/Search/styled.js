import styled from "styled-components";

import searchIcon from "../Images/search.svg";

export const Wrapper = styled.div`
  padding-left: 387px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    padding-left: 20%;
    padding-right: 16px;
    padding-top: 16px;
    padding-bottom: 16px;
    flex-grow: 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    padding-left: 10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    padding-left: 0;
    padding-top: 6px;
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding-top: 17px;
  }
`;

export const Input = styled.input`
  min-width: 432px;
  height: 48px;
  border-radius: 33px;
  border: 1px solid ${({ theme }) => theme.color.mystic};
  background: ${({ theme }) => theme.color.white};
  padding-left: 64px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-position: 24px center;
  background-size: 24px 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    min-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    height: 44px;
    padding-left: 40px;
    background-position: 16px center;
    background-size: 16px 16px;
  }
`;
