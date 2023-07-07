import { Wrapper } from "./styled";
import { ReactComponent as CameraIcon } from "../Images/camera.svg";

export const NavigationHeader = () => {

    return (
        <Wrapper>
           <CameraIcon />
            <h2>Movies Browser</h2>
        </Wrapper>
    );
};