import styled from "styled-components";

export const DetailsArea = styled.div`
& {
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
`;