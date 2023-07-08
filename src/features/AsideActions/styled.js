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

export const Warning = styled(warningIcon)``;
