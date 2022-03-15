import styled from "styled-components";

export const FooterArea = styled.footer`
    background-color: #262735;
   padding: 30px;
   .scroll {
       position: fixed;
       bottom: 10px;
       right: 20px;
       width: 30px;
       height: 30px;
       border: 1px solid #575762;
       color: #fff;
       text-align: center;
       line-height: 30px;
       font-size: 1.2rem;
       cursor: pointer;
   }
`;
export const Footer1 = styled.div`
    display: flex;
    justify-content: space-between;

    .last-element {
        .top {
            display: flex;
            width: 200px;
            justify-content: space-between;
            .left {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #fff;
                padding: 2px;
                div {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                    background-color: #111;
                    color: #fff;
                    line-height: 50px;
                    text-align: center;
                    font-size: 1.1rem;
                }
            }
            .right {
                .social-icons-area {
                    display: flex;
                    margin-bottom: 20px;
                    .social-icon {
                        width: 30px;
                        height: 30px;
                        background-color: #009A44;
                        margin-right: 2px;
                        transition: all ease-in 0.1s;
                        &: hover {
                            background-color: #fae100;
                        }
                    }
                }
                .lang {
                    .timer {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;
                        span {
                            font-size: 0.76rem;
                            color: #fff;
                        }
                    }
                    .select {
                        select {
                            background-color: #009A44;
                            padding: 7px;
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
`;

export const Footer2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    margin-top: 10px;
    border-top: 1px solid #2D2F41;
    border-bottom: 1px solid #2D2F41;
    .container {
        display: flex;
        justify-content: space-between;
        width: 800px;
        a {
            img {
                opacity: 0.5;
            }
            &: hover {
                img {
                    opacity: 1;
                }
            }
        }
    }
`;

export const  Footer3 = styled.div`
    display: flex;
    height: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #93939A;
    padding-top: 15px;
    font-size: 0.73rem;
`;