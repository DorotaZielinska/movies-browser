import styled from "styled-components";

export const MovieTileList = styled.article`
    width: 324;
    height: 100%;
    background-color: ${({ theme }) => theme.color.white};
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    display: grid;
    grid-auto-rows: auto 1fr;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        grid-template-columns: auto 1fr;
        grid-gap: 16px;
        width: 320px;
        margin-left: 16px;
    };
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
    border-radius: 5px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
        width: 114px;
        height: 169px;
    };
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
       justify-content: flex-start;
    };
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    font-size : 22px;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
       font-size: 16px;
       margin-bottom: 4px;
       margin-top: 0px;
    };
`;

export const StyledSubTitle = styled.h2`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
       font-size: 13px;
       };
`;

