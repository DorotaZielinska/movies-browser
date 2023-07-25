import styled from "styled-components";

export const ActorDetailsTile = styled.article`
  max-width: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  padding: 40px;
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-gap: 0 40px;
  color: ${({ theme }) => theme.color.black};
  margin-top: 56px;
  margin-bottom: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipod}) {
    grid-template-columns: minmax(auto, 215px) 1fr;

    margin: 23px 14px 24px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-template-columns: minmax(auto, 114px) 1fr;
    grid-gap: 16px;
    padding: 16px;
    margin: 23px 14px 24px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    margin: 23px 14px 24px;
  }
`;

export const ActorContent = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    grid-row: span 2;
  }
`;

export const ActorTitle = styled.h1`
  font-weight: 600;
  font-size: 36px;
  color: ${({ theme }) => theme.color.black};
  line-height: 1.2;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    margin-top: 0px;
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    font-weight: 500px;
    line-height: 1.3;
    margin: 0 0 16px;
  }
`;

export const ActorSubTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 15px;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
  }
`;

export const PlaceSubTitle = styled.h2`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.2;
  margin: 0;
  margin-top: 8px;

  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;

export const InfoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const DescriptionPeople = styled.span`
  font-size: 20px;
  line-height: 1.6;
  margin-top: 24px;
  margin-bottom: 8px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.desktop}) {
    font-size: 17px;
    margin-top: 9px;
    grid-row: 3;
    grid-column: span 2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 14px;
    margin: 0;
  }
`;