import styled from "styled-components";

type Props = {
    active: boolean;
}
export const LinkArea = styled.a<Props>`
    display: inline-flex;
    align-items: center;
    height: 50px;
    padding: 0 30px;
    background-color: ${props => props.active ? '#fae100' : 'transparent'};
    color: ${props => props.active ? '#333333' : '#fff'};
    font-weight: bold;
    text-decoration: none;
    font-size: 0.8rem;
    transition: background-color ease-in 0.3s;
    &.vegas {
        background-color: #AD3DD2;
    }
    &: hover {
        background-color: #fae100;
        color: #333333;
    }
`;