import styled from "styled-components";

import searchIcon from "../Images/search.svg";

export const Wrapper = styled.div`
    padding-left: 387px;
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
`;