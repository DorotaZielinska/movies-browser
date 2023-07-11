import styled from "styled-components";

import searchIcon from "../Images/search.svg";

export const Wrapper = styled.div`
    padding-left: 387px;

    @media(max-width: ${({ theme }) => theme.breakpoint.desktop}){
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 16px;
        padding-bottom: 16px;
        width: 100%;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.ipod}){      
        padding-top: 6px;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.small}){
        padding-left: 0;
        padding-top: 17px;  
    };

`;

export const Input = styled.input`
    width: 432px;
    height: 48px;
    border-radius: 33px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    background: ${({ theme }) => theme.color.white};
    padding-left: 64px;
    background-image: url(${searchIcon});
    background-repeat: no-repeat;
    background-position: 24px center;
    background-size: 24px 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.desktop}){
        padding-left: 64px;
        padding-right: 16px;
        padding-top: 24px;
        padding-bottom: 16px;
        width: 100%;
    };

    @media(max-width: ${({ theme }) => theme.breakpoint.small}){
        height: 44px;
        padding-left: 40px;
        background-position: 16px center;
        background-size: 16px 16px;
    };

`;