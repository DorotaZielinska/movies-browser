import styled from "styled-components";

export const Container = styled.section`
  max-width: 1368px;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
`;

export const Content = styled.div`
display: flex;
justify-content: center;
`;
