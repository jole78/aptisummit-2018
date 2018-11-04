const Link = styled.a`
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background: papayawhip;
    color: palevioletred;
`;

const Icon = styled.svg`
    flex: none;
    transition: fill 0.25s;
    width: 48px;
    height: 48px;

    ${Link}:hover & {
        fill: rebeccapurple;
    }
`;
