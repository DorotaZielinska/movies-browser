import { Wrapper, Title, CameraIcon, StyledHomeButton } from "./styled";

export const NavigationLogo = ({toMovies}) => {

    return (
        <StyledHomeButton to={toMovies}>
            <Wrapper>
           <CameraIcon />
            <Title>Movies Browser</Title>
        </Wrapper>
        </StyledHomeButton>
    );
};