import { NavigationContainer, NavigationWrapper } from "./styled";
import { NavigationHeader } from "./Header";

export const Navigation = () => {

    return (
        <NavigationContainer>
            <NavigationWrapper>
                <NavigationHeader />
            </NavigationWrapper>
        </NavigationContainer>
    );
};