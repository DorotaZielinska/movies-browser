import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
    background: ${({ theme }) => theme.color.woodsmoke};
    color: ${({ theme }) => theme.color.white};
    min-height: 94px;
    width: 100%;
   
    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        min-height: 142px;
        padding-top: 24px;
    };
`;

export const NavigationWrapper = styled.nav`
    display:flex;
    align-items: center;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        display: flex;
        flex-wrap: wrap;
    };
`;

export const List = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
    gap: 16px;
    flex-shrink: 0;
    padding-left: 80px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        gap: 12px;
        padding-left: 19px;
        margin: 0;
    };
`;

export const Item = styled.li`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        font-size: 12px;
    };
 `;

export const StyledNavLink = styled(NavLink)`
    text-decoration-line: none;
    color: ${({ theme }) => theme.color.white};
    display: inline-flex;
    height: 48px;
    padding: 8px 24px;
    align-items: center;
    flex-shrink: 0;
    border-radius: 24px;
    border: 1px solid transparent;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
        padding: 8px 12px;
        border-radius: 29px;
    };

    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
`;
