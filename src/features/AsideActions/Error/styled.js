import styled from "styled-components";
import { ReactComponent as warningIcon } from "./warning.svg";

export const Content = styled.p`
  font-size: 14px;
  font-family: Open Sans;
  color: ${({ theme }) => theme.color.white};
  font-weight: 700;
  line-height: 19px;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`;
export const Warning = styled(warningIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 180px;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: ${({ theme }) => theme.color.scienceBlue};
  padding: 16px 24px;
  border-radius: 5px;
`;
