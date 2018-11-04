import styled from "styled-components";

function error(props) {
    if (props.error) {
        return css`
            color: #fff;
            background-color: #c82333;
            border-color: #bd2130;
        `;
    }
}

export const Button = styled.Button`
    display: inline-block;
    border-radius: 3px;
    padding: 0.5rem 0;
    margin: 0.5rem 1rem;
    width: 11rem;
    background: white;
    color: black;
    border: 2px solid white;

    ${error};
`;
