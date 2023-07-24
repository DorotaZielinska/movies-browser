import styled from "styled-components";

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

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: 160px auto;
    gap: 16px;
    padding: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    grid-template-columns: 130px auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    grid-template-columns: 114px auto;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  gap: 24px;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 8px;
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 8px;
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 23px;
    font-weight: 500;
    line-height: 1.3;
    margin-bottom: -4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 22px;
  font-weight: 400;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 17px;
    font-weight: 400;
    line-height: 1.3;
    color: ${({ theme }) => theme.color.waterloo};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 13px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 14px;
    min-height: 47px;
    font-weight: 400;
    line-height: 1.1;
    gap: 8px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 10px;
  }
`;

export const About = styled.span`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-left: -160px;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.6;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    margin-left: -145px;
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin-left: -128px;
    font-size: 14px;
  }
`;
