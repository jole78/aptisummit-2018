import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid green;
    padding: 20px;
    color: white;
`;

export default class Examples extends React.Component {
    render() {
        return <FlexBox>HELLO OM</FlexBox>;
    }
}
