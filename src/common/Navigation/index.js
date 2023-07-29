import { NavigationContainer, NavigationWrapper, List, Item, StyledNavLink } from "./styled";
import { NavigationLogo } from "./Logo";
import { Container } from "../Container";
import { Search } from "./Search";

export const Navigation = ({ toMovies, toPeople }) => {

    return (
        <NavigationContainer>
            <Container>
                <NavigationWrapper>
                    <NavigationLogo toMovies={toMovies} />
                    <List>
                        <Item>
                            <StyledNavLink to={toMovies}>Movies</StyledNavLink>
                        </Item>
                        <Item>
                            <StyledNavLink to={toPeople}>People</StyledNavLink>
                        </Item>
                    </List>
                    <Search />
                </NavigationWrapper>
            </Container>
        </NavigationContainer>
    );
};