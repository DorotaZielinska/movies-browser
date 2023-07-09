import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./images/spinner.svg";
import { ReactComponent as image } from "./images/Picture.svg";
import { ReactComponent as warningIcon } from "./images/warning.svg";

export const Spinner = styled(spinnerIcon)`
  align-self: center;
  margin-top: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Image = styled(image)`
  background-color: ${({ theme }) => theme.color.whisper};
  align-self: center;
`;

export const Warning = styled(warningIcon)`
  display: block;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: 36px;
  color: ${({ theme }) => theme.color.woodsmoke};
  font-weight: 600;
  line-height: 120%;
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

export const Content = styled.p`
  font-size: 14px;
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
