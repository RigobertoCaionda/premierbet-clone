import styled  from "styled-components";

export const HeaderArea = styled.header`
    background-color: #009A44;
`;

export const Header1 = styled.div`
    height: 80px;
    border-bottom: 1px solid #03AC4D;
    padding: 0 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo-area {
        height: 100%;
        display: flex;
        align-items: center;
        padding-right: 20px;
       border-right: 1px solid #03AC4D;
       cursor: pointer;
    }

    .middle-area {
        display: flex;
        justify-content: space-between;
        width: 500px;
       
        .license {
            display: flex;
            align-items: center;
            background-color: #fff;
            padding: 5px;
            img {
                margin-right: 5px;
            }
            span {
                font-size: 0.7rem;
            }
        }

        .languages {
            select {
                background-color: transparent;
                border: 0;
                font-size: 0.70rem;
                outline: 0;
                color: #fff;
                cursor: pointer;
                option {
                    background-color: #000;
                }
            }
        }
    }

    .login-area {
        form {
            display: flex;
            align-items: center;
            .password {
                display: flex;
                align-items: center;
            }
            .login-buttons {
                display: flex;
                align-items: center;
                margin-left: 14px;
                button {
                    padding: 8px 10px;
                    font-size: 0.7rem;
                    cursor: pointer;
                    background-color: #fae100;
                    border: 1px solid #fae100;
                    margin-right: 3px;
                }
                #signin {
                    font-weight: bold;
                }
                #signup {
                    background-color: #fae100;
                    padding: 2px;
                    span {
                       display: block;
                       padding: 6px;
                        background-color: #009A44;
                        color: #fff;
                        font-weight: bold;
                    }
                }
            }
            input {
                padding: 8px;
                outline: 0;
                background-color: #006039;
                border: #006039;
                margin-right: 5px;
                color: #fff;

                ::-webkit-input-placeholder {
                    color: #9AADC1;
                }
                :-moz-placeholder {
                    color: #9AADC1;
                }
                :-ms-input-placeholder {
                    color: #9AADC1;
                }
            }
        }
    }
`;
export const Header2 = styled.div``;