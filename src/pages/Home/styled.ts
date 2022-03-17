import styled from "styled-components";

export const HomeArea = styled.div`

`;

export const SliderArea = styled.div`
    background-color: #dddddd;
`;
export const MainArea = styled.div`
    display: flex;
    background-color: #dddddd;
    padding: 3px 5px;
`;

export const LeftSideContent = styled.aside`
    margin-right: 5px;
`;
export const RightSideContent = styled.aside`
background-color: #009A3F;
`;
export const MainContent = styled.main`
    flex: 1;
    margin-right: 5px;
`;
export const Header = styled.div`
    display: flex;
    .to-bet, .live-bet, .go-back {
        margin-right: 1.5px;
        background-color: #fff;
        font-size: 0.77rem;
        padding: 10px;
        cursor: pointer;
        transition: all ease-in 0.1s;
        &: hover {
            background-color: #111111;
            color: #fff;
        }
    }
    .live-bet {
        &: hover {
            color: #fff;
            a {
                color: #fff;
            }
        }
       a {
            color: #1b1b1b;
            font-size: 0.77rem;
            text-decoration: none;
       }
    }
    .championship {
        font-size: 0.75rem;
        a {
            text-decoration: none;
            background-color: #f8f8f8;
            display: flex;
            padding: 7px 5px;
            color: #1b1b1b;
            margin-right: 1px;
            &: hover {
                background-color: #EFEFEF;
            }
            img {
                width: 20px;
            }
        }
        
    }
`;