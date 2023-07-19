import styled from "styled-components";
import { ReactComponent as NoPoster } from "./icon.svg";

export const NoPerson = styled(NoPoster)``;

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 2 /3;
  position: relative;
`;

export const Poster = styled.div.attrs(
  ({ background }) =>
    background && {
      style: {
        backgroundImage: `url(${background})`,
      },
    }
)`
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  inset: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    inset: -5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    inset: 0;
  }
`;
