import styled from "styled-components";
import { ReactComponent as starIcon } from "./images/star.svg";

export const PosterContainer = styled.div`
  width: 1928px;
  height: auto;
`;

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
      270deg,
      rgb(0, 0, 0) 8%,
      rgba(0, 0, 0, 0.87) 11.36%,
      rgba(0, 0, 0, 0.72) 13.7%,
      rgba(0, 0, 0, 0.29) 19.78%,
      rgba(0, 0, 0, 0.16) 27.16%,
      rgba(0, 0, 0, 0) 100%
    ),
    linear-gradient(
      91deg,
      rgb(0, 0, 0) 15.58%,
      rgba(0, 0, 0, 0.98) 4.88%,
      rgba(0, 0, 0, 0.97) 9.31%,
      rgba(0, 0, 0, 0) 24.78%,
      rgba(0, 0, 0, 0.23) 23.83%,
      rgba(0, 0, 0, 0) 24%
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
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.white};
`;
export const MainInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);

  position: absolute;
  top: 838px;
  left: 276px;
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.white};
`;

export const Votes = styled.p`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: ${({ theme }) => theme.color.white};
`;
export const Star = styled(starIcon)``;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.stormGray};
`;

export const Slash = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  align-self: last baseline;
`;
export const Genre = styled.span`
  background-color: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 16px;
  line-height: 1.4;
`;
export const Vote = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-right: 8px;
`;

export const TotalVotes = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};
`;

export const Date = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Country = styled(Date)``;
