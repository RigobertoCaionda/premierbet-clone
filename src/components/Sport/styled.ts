import styled from "styled-components";

export const LinkArea = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f8f8f8;
    margin-bottom: 1px;
    height: 40px;
    padding: 0px 10px;
    text-decoration: none;
    color: #333333;
    transition: all ease-in 0.1s;
    &: hover {
        background-color: #111111;
        color: #fff;
    }
    span {
        font-size: 0.77rem;
    }
`;