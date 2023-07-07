import styled from "styled-components";

export const NavigationContainer = styled.div`
    background: ${({ theme }) => theme.color.woodsmoke};
    color: ${({ theme }) => theme.color.white};
    min-height: 94px;
    width: 100%;
    padding: 27px;
    
`;

export const NavigationWrapper = styled.nav`
    display:flex;
    align-items: center;
`;

