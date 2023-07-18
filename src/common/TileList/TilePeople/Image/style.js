import styled, { css } from "styled-components";
import noPoster from "./icon.svg";

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.silver};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 177px;
  height: 264px; */
  aspect-ratio: 2 /3;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    /* max-width: 120px; */
    /* max-height: 178px; */
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
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  width: 100%;
  height: 100%;

  ${({ noMoviePoster }) =>
    noMoviePoster &&
    css`
      background-image: url(${noPoster});
      width: 100px;
      height: 100px;
    `}
`;
