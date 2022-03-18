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
    background-color: #009A3F;
    h5 {
        color: #fff;
        margin: 10px 0 10px 10px;
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
`;
