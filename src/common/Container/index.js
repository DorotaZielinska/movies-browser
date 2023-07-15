import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: auto 16px;
  }
`;
