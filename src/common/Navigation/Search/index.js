import { Wrapper, Input } from "./styled";

export const Search = ({placeholder}) => {

    return (
        <>
            <Wrapper>
                <Input placeholder={placeholder} />
            </Wrapper>
        </>
    );
};