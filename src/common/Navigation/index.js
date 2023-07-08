import { useContext } from 'react';

import { NavigationContainer, NavigationWrapper, List, Item, StyledNavLink } from "./styled";
import { NavigationLogo } from "./Logo";
import { Container } from "../Container";
import { Search } from "./Search";
import { MyContext } from "../../App";

export const Navigation = ({ toMovies, toPeople }) => {
    const { handleNavLinkClick } = useContext(MyContext);

    return (
        <NavigationContainer>
            <Container>
                <NavigationWrapper>
                    <NavigationLogo />
                    <List>
                        <Item>
                            <StyledNavLink to={toMovies} onClick={() => handleNavLinkClick('Search for movies...')}>
                                Movies
                            </StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to={toPeople} onClick={() => handleNavLinkClick('Search for people...')}>
                                People
                            </StyledNavLink>
                        </Item>
                    </List>
                    <Search />
                </NavigationWrapper>
            </Container>
        </NavigationContainer>
    );
};