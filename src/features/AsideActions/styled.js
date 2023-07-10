import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./Loading/spinner.svg";
import { ReactComponent as image } from "../AsideActions/NotFound/Picture.svg";

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
export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  align-self: flex-start;
  margin-top: 56px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
`;
