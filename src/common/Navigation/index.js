import { NavigationContainer, NavigationWrapper } from "./styled";
import { NavigationLogo } from "./Logo";

export const Navigation = () => {

    return (
        <NavigationContainer>
            <NavigationWrapper>
                <NavigationLogo />
            </NavigationWrapper>
        </NavigationContainer>
    );
};