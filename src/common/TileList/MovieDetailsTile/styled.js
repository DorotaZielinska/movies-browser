import styled from "styled-components";
import { ReactComponent as starIcon } from "../../../features/MovieDetails/images/star.svg";

export const Wrapper = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: 312px auto;
  padding: 40px;
  align-items: flex-start;
  gap: 40px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-top: 0;
    display: flex;
    flex-direction: column;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 24px;
  margin: 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

export const Year = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;
`;

export const Info = styled.p`
  margin: 0;
`;

export const Genres = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  align-items: center;
  gap: 16px;
  margin: 0;
`;

export const About = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;
`;
export const Rating = styled.div`
  display: flex;
  gap: 8px;
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`;
export const Star = styled(starIcon)`
  width: 24px;
  height: 24px;
`;

export const Vote = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.3;
`;

export const Votes = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  align-self: center;
`;
