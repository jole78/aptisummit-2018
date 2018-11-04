import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Bold = styled.span`
    font-weight: 500;
`;

const Text = styled.span`
    ${(props) => props.muted && "color: #999;"};
`;

const Badge = styled.span`
    color: #fff;
    background-color: #03a9f4;
    display: inline-block;
    padding: 0.3125rem 0.375rem;
    font-size: 75%;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: 0.125rem;
`;

const Logo = styled.img`
    border-radius: 50% !important;
`;

export function FlexBoxExample() {
    return (
        <FlexBox>
            <Logo src="http://demo.interface.club/limitless/demo/bs4/Template/global_assets/images/brands/facebook.png" />
            <Bold>FaceBook</Bold>
            <Text muted>Mintlime</Text>
            <Badge>Active</Badge>
        </FlexBox>
    );
}
