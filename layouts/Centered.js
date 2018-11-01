import React from "react";
import styled from "styled-components";

const Root = styled.div`
    width: 100vw
    height: 100vh
`;

const Center = styled.div`
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`;

const Centered = ({ children }) => {
    return (
        <Root>
            <Center>{children}</Center>
        </Root>
    );
};

export default Centered;
