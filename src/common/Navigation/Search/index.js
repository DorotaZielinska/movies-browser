import { useContext } from "react";

import { MyContext } from "../../../App";
import { Wrapper, Input } from "./styled";

export const Search = () => {
    const { placeholder } = useContext(MyContext);

    return (
        <>
            <Wrapper>
                <Input placeholder={placeholder} />
            </Wrapper>
        </>
    );
};