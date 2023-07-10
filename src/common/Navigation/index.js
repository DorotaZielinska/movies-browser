import { useState } from "react";

import { NavigationContainer, NavigationWrapper, List, Item, StyledNavLink } from "./styled";
import { NavigationLogo } from "./Logo";
import { Container } from "../Container";
import { Search } from "./Search";

export const Navigation = ({ toMovies, toPeople }) => {

    const movies = "Search for movies...";
    const people = "Search for people...";

    const [placeholder, setPlaceholder] = useState(movies);

    const handleNavLinkClick = (placeholder) => {
        setPlaceholder(placeholder);
    };

    return (
        <NavigationContainer>
            <Container>
                <NavigationWrapper>
                    <NavigationLogo />
                    <List>
                        <Item>
                            <StyledNavLink to={toMovies} onClick={() => handleNavLinkClick(movies)}>Movies</StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to={toPeople} onClick={() => handleNavLinkClick(people)}>People</StyledNavLink>
                        </Item>
                    </List>
                    <Search placeholder={placeholder} />
                </NavigationWrapper>
            </Container>
        </NavigationContainer>
    );
};