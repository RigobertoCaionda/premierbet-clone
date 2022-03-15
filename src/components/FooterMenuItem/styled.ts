import styled from "styled-components";

export const Container = styled.div`
    h5 {
        color: #009A44;
    }
    .border {
        width: 15px;
        height: 1px;
        margin: 10px 0 15px 0;
        background-color: #6f7479;
    }
    .links-wrapper {
        display: flex;
        flex-direction: column;

        a {
            text-decoration: none;
            color: #A5A5A5;
            font-size: 0.8rem;
            margin-bottom: 15px;
            transition: all ease-in 0.1s;
            &: hover {
                color: #fff;
            }
        }
    }
`;