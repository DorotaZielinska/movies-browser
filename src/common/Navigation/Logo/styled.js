import styled from "styled-components";

import { ReactComponent as Camera } from "../Images/camera.svg";
import { Link } from "react-router-dom";

export const StyledHomeButton = styled(Link)`
text-decoration: none;
color: ${({ theme }) => theme.color.white};
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 12px;
    padding-left: 12px;
    flex-shrink: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
      gap: 8px;
      padding-left: 0;
    };
    
`;

export const Title = styled.p`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: -1.5px;
    text-transform: capitalize;
   
    

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
        font-size: 13px;
        line-height: 1,3;
        letter-spacing: -0.5px;
        padding-bottom: 0;
        margin: 0;
    };

`;

export const CameraIcon = styled(Camera)`

    @media (max-width: ${({ theme }) => theme.breakpoint.large}) {
        width: 17px;
        height: 17px;
    };

`;