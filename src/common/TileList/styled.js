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
`;

export const Poster = styled.img`
    width: 292px;
    height: 434px;
`;

export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const StyledTitle = styled.h1`
    font-weight: 500;
    font-size : 22px;
    color: ${({ theme }) => theme.color.woodsmoke};
    margin-bottom: 8px;
`;

export const StyledSubTitle = styled.h2`
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.color.waterloo};
`;

