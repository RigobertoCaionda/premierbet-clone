import styled from "styled-components";

export const HomeArea = styled.div`

`;

export const SliderArea = styled.div`
    background-color: #dddddd;
`;
export const MainArea = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    grid-gap: 5px;
    background-color: #dddddd;
    padding: 3px 5px;
`;

export const LeftSideContent = styled.aside`

    .sport {
        display: flex;
        flex-direction: column;
    }
    .date-picker {
        padding: 10px;
        background-color: #fff;
        margin-top: 3px;
        cursor: pointer;
        .range {
            margin-top: 17px;
           
            input {
                width: 100%;
                cursor: pointer;
            }
        }
        .first-div {
            span {
                font-size: 0.58em;
                margin-right: 10px;
                color: #393939;
            }
            span.diff-span {
                color: #009A3F;
            }
        }
    }
    .search-input-area {
        display: flex;
        align-items: center;
        margin-top: 3px;

        input {
            width: 100%;
            padding: 9px 10px;
            font-size: 0.74rem;
            background-color: #FFF;
            border: 0;
            outline: 0;
        }
    }
    .to-bet {
        background-color: #111111;
        color: #fff;
    }

   button {
       padding: 10px 8px;
       font-size: 0.73rem;
       border: 0;
       background-color: #fff;
       margin-right: 1px;
       cursor: pointer;
       transition: all ease-in 0.1s;
       &: hover {
            background-color: #111111;
            color: #fff;
       }
   }
`;
export const RightSideContent = styled.aside`
   .cart {
       .empty-cart {
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           padding: 40px 15px;
           background-color: #f7f7f7;
           .boletim {
               font-size: 0.8rem;
               color: #6f6f6f;
               margin-bottom: 10px;
               font-weight: bold;
           }
           .select-odd {
               font-size: 0.75rem;
               color: #6f6f6f;
               text-align: center;
           }
           .ball {
               width: 100px;
               height: 100px;
               border-radius: 50%;
               background-color: #989898;
               margin-bottom: 10px;
           }
       }
   }
    .title {
        background-color: #009A3F;
        padding: 10px 0 10px 10px;
        h5 {
            color: #fff;
        }
    }
    .top2 {
        display: flex;
        div.my-bet {
            padding: 3px 10px;
        }
        div {
            background-color: #014A21;
            padding: 10px;
            font-size: 0.75rem;
            border-right: 1px solid #003C1A;
            cursor: pointer;
            text-align: center;
            color: #fff;
            transition: all ease-in 0.3s;

            &: hover {
                background-color: #111111;
            }
        }
    }
`;
export const MainContent = styled.main`
   display: flex;
  flex-direction: column;

  .highlights {
      margin-top: 3px;
      background-color: #009A3F;
      padding: 10px;
      color: #fff;
      font-size: 0.8rem;
  }
  .details-area {
      padding: 10px;
      color: #333333;
      background-color: #F8F8F8;
      border-top: 1px solid #eaeaea;
      border-bottom: 1px solid #eaeaea;
      .top {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
            font-size: 0.7rem;
        }
        select {
            padding: 5px 60px 5px 5px;
            margin: 0 50px 0 100px;
        }
      }
      .bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
          font-size: 0.7rem;
          .time-and-event {
              span {
                  margin-right: 30px;
              }
              span: last-child {
                  margin-right: 0;
              }
          }
          .specials {
            .special-span {
                margin-right: 50px;
            }
            .special-span: last-child {
                margin-right: 0;
            }
          }
          
      }
  }
`;

export const SportsSlider = styled.div`
  background-color: #fff;
  padding: 10px;
  .sport-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 0.75rem;
    color: #333333;
    transition: all ease-in 0.2s;
  }
`;
