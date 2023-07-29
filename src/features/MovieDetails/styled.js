import styled from "styled-components";
import { ReactComponent as starIcon } from "./images/star.svg";

export const PosterContainer = styled.div`
  max-width: 1368px;
  max-height: 769px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 1200px;
    max-height: 767px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    max-width: 1024px;
    max-height: 600px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-width: auto;
    max-height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 450px;
    max-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 320px;
    max-height: 148px;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  margin-bottom: 64px;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-bottom: 0;
  }
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
      90deg,
      rgb(0, 0, 0) 14%,
      rgba(0, 0, 0, 0.87) 15.16%,
      rgba(0, 0, 0, 0.72) 17.7%,
      rgba(0, 0, 0, 0.29) 21.28%,
      rgba(0, 0, 0, 0.16) 24.16%,
      rgba(0, 0, 0, 0) 27%
    ),
    linear-gradient(
      270deg,
      rgb(0, 0, 0) 12.58%,
      rgba(0, 0, 0, 0.98) 13.88%,
      rgba(0, 0, 0, 0.97) 15.31%,
      rgba(0, 0, 0, 0) 19.78%,
      rgba(0, 0, 0, 0.23) 17.83%,
      rgba(0, 0, 0, 0) 18%
    ),
    linear-gradient(
      rgb(0, 0, 0) 2%,
      rgba(0, 0, 0, 0.69) 4.23%,
      rgba(0, 0, 0, 0.44) 12.57%,
      rgba(0, 0, 0, 0.21) 19.6%,
      rgba(0, 0, 0, 0) 26%
    ),
    linear-gradient(
      203deg,
      rgba(0, 0, 0, 0) 80%,
      rgba(0, 0, 0, 0.11) 84.64%,
      rgba(0, 0, 0, 0.24) 91.16%,
      rgba(0, 0, 0, 0.49) 96%,
      rgba(0, 0, 0, 0.74) 95.61%,
      rgb(0, 0, 0) 100%
    );
`;

export const Poster = styled.img`
  z-index: 1;
  max-width: 1368px;
  max-height: 769px;
  object-fit: cover;
  position: relative;
  z-index: -1;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    max-width: 1368px;
    max-height: 900px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    max-width: 1200px;
    max-height: 767px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    max-width: 900px;
    max-height: 600px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    max-width: 500px;
    max-height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    max-width: 380px;
    max-height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    max-width: 262px;
    max-height: 148px;
    align-self: center;
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 24px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    font-size: 56px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    font-size: 34px;
    margin-bottom: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 24px;
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 4px;
    max-width: 260px;
  }
`;
export const MainInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(2, auto);
  position: absolute;
  bottom: 56px;
  left: 276px;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    left: 16px;
    bottom: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: inline;
    bottom: 9px;
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 8px;
  font-size: 30px;
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    display: inline;
    max-width: 55px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
  }
`;

export const Votes = styled.span`
  margin-top: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  color: ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
    font-weight: 400;
    line-height: 1.2;
    max-width: 100px;
    margin-left: 8px;
  }
`;

export const Star = styled(starIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
`;

export const Description = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  display: inline-block;
  margin: 8px 3px 0 0;
  color: ${({ theme }) => theme.color.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    display: none;
  }
`;

export const Date = styled.span`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
  }
`;

export const Country = styled(Date)`
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: none;
  }
`;

export const CountryShort = styled(Date)`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: inline;
  }
`;

export const Genre = styled.span`
  background-color: ${({ theme }) => theme.color.mystic};
  color: ${({ theme }) => theme.color.woodsmoke};
  border-radius: 5px;
  font-size: 14px;
  padding: 8px 16px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    display: block;
    font-size: 12px;
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    padding: 4px 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Slash = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  align-self: last baseline;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-bottom: 3px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    display: none;
  }
`;

export const Vote = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.3;
    margin-right: 0;
  }
`;

export const TotalVotes = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
  }
`;

export const SectionTitle = styled.h2`
  margin: 64px 0 32px;
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    margin-left: 16px;
    margin-top: 21px;
    font-size: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 20px;
  }
`;

export const CastList = styled.ul`
  padding: 0px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}) {
    grid-template-columns: repeat(5, 1fr);
    padding-right: 16px;
    padding-left: 16px;
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const CrewList = styled(CastList)`
  margin-bottom: 336px;
`;
