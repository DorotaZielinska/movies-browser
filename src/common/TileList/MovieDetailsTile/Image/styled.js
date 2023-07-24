import styled, { css } from "styled-components";
import camera from "../../../Navigation/Images/camera.svg";

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 312px;
  height: 464px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-width: 160px;
    max-height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 130px;
    max-height: 190px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
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
