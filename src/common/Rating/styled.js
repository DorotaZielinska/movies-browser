import styled from "styled-components";

export const RatingContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-left: 0px;
    margin-top: 10px;
    gap: 12px;
    align-items: center;
`;

export const Vote = styled.span`
    font-size: 16px;
    font-weight: 600;
    color:${({ theme }) => theme.color.woodsmoke};
`;

export const Votes = styled.span`
    width: auto;
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.waterloo};
`;