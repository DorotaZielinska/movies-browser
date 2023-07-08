import { Wrapper, Title } from "./styled";
import { ReactComponent as CameraIcon } from "../Images/camera.svg";

export const NavigationLogo = () => {

    return (
        <Wrapper>
           <CameraIcon />
            <Title>Movies Browser</Title>
        </Wrapper>
    );
};