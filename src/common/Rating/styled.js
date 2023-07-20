import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    gap: 8px 7px;
    margin-top: 8px;
  }
`;

export const IconWrapper = styled.div`
  svg {
    @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
      width: 16px;
      height: 16px;
    }
  }
`;

export const Vote = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.woodsmoke};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
    line-height: 1.3;
  }
`;

export const Votes = styled.span`
  width: auto;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    font-size: 13px;
    line-height: 1.3;
  }
`;
