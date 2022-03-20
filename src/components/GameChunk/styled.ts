import styled from "styled-components";

export const GameArea = styled.div`
    display: flex;
    background-color: #fff;
    border-top: 1px solid #dfdfdf;
    border-bottom: 1px solid #dfdfdf;
    .left {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: auto;
        padding: 10px;
        border-right: 1px solid #dfdfdf;
        margin-right: 1px;
        text-align: center;
        span {
            font-size: 0.7rem;
        }
    }
    .middle {
       display: flex;
       justify-content: space-between;
       padding: 8px;
       width: 100%;
       .game-left {
             font-size: 0.8rem;
             margin-right: 35px;
           .top {
               color: #111111;
               font-weight: bold;
           }
           .bottom {
               color: #909090;
           }
       }
    }
    .game-right {
        display: flex;
        .goals {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 40px;
            margin-left: 15px;
            margin-right: 35px;
        }
        .odd {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 40px;
            border: 2px solid #b9b9b9;
            margin-right: 7px;
            cursor: pointer;
        }
        flex: 1;
    }
    .right {
        width: 45px;
        height: auto;
        border: 1px solid #dfdfdf;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.7rem;
    }
`;