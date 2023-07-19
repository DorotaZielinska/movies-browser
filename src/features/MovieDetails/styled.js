import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const PosterGradient = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      260deg,
      rgb(0, 0, 0) 19%,
      rgba(0, 0, 0, 0.87) 23.36%,
      rgba(0, 0, 0, 0.72) 26.7%,
      rgba(0, 0, 0, 0.29) 30.78%,
      rgba(0, 0, 0, 0.16) 33.16%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      118deg,
      rgb(0, 0, 0) 11.58%,
      rgba(0, 0, 0, 0.98) 19.88%,
      rgba(0, 0, 0, 0.97) 22.31%,
      rgba(0, 0, 0, 0) 38.78%,
      rgba(0, 0, 0, 0.23) 37.83%,
      rgba(0, 0, 0, 0) 22%
    ),
    linear-gradient(
      rgb(0, 0, 0) 2%,
      rgba(0, 0, 0, 0.69) 4.23%,
      rgba(0, 0, 0, 0.44) 9.57%,
      rgba(0, 0, 0, 0.21) 15.6%,
      rgba(0, 0, 0, 0) 26%
    ),
    linear-gradient(
      223deg,
      rgba(0, 0, 0, 0) 74%,
      rgba(0, 0, 0, 0.11) 76.64%,
      rgba(0, 0, 0, 0.24) 79.16%,
      rgba(0, 0, 0, 0.49) 86%,
      rgba(0, 0, 0, 0.74) 89.61%,
      rgb(0, 0, 0) 89%
    );
`;

export const Poster = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  top: 538px;
  left: 276px;
`;
