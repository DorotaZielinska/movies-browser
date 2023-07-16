import styled, { css } from "styled-components";
import camera from "../Navigation/Images/camera.svg";

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 292px;
  height: 434px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    max-width: 114px;
    max-height: 169px;
  }
`;

export const Poster = styled.div.attrs(
  ({ background }) =>
    background && {
      style: {
        backgroundImage: `url(${background})`,
      },
    }
)`
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  ${({ noMoviePoster }) =>
    noMoviePoster &&
    css`
      background-image: url(${camera});
      width: 100px;
      height: 100px;
    `}
`;
