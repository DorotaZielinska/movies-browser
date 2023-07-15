import styled from "styled-components";

export const MovieTileList = styled.article`
  max-width: 324;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  display: grid;
  grid-auto-rows: auto 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    grid-template-columns: auto 1fr;
    grid-gap: 0px 16px;
    width: auto;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    justify-content: flex-start;
  }
`;

export const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 22px;
  color: ${({ theme }) => theme.color.woodsmoke};
  margin-bottom: 8px;
  line-height: 1.3;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 16px;
    margin: 0 0 4px;
  }
`;

export const StyledSubTitle = styled.h2`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
