import styled from "styled-components";

export const GenresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding-left: 0px;
    margin: -8px;
    margin-bottom: 10px;
`;

export const Genre = styled.li`
    background-color: ${({ theme }) => theme.color.mystic};
    color: ${({ theme }) => theme.color.woodsmoke};
    border-radius: 5px;
    font-size: 14px;
    padding: 8px 16px;
    margin: 8px 0 0 8px;
    line-height: 1.4;

    @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
       font-size: 10px;
       padding: 4px 8px;
       line-height: 1.1;
    };  
`;