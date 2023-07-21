import Styled from "styled-components";

export const MainContainer = Styled.footer`
padding: 2rem 6rem 4rem 6rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

h1{
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 38px;
    margin: 1rem 0;
}

.card{
    padding: 1rem;
    width: 40vw;
    border-radius: 12px;
background: #F4F6F8;
box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.30);
 .form-label{
    color: #000;
    /* Paragraph */
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 19px;
 }
 .form-control{
    border-radius: 12px;
    border: 1px solid #CCC;
    background: #FFF;
        &::placeholder {
         color: #B2B2B2;
        }
    }
}
.btn-primary{
    font-weight: 600;
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.20);
}
.tokenCard{
    margin-bottom: 2rem;
    padding: 0;
    .top{
        height: 3.5rem; 
    }
    .bottom{
        padding: 1rem 3rem;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border-top: 1px solid #CCC;
        height: 3.5rem; 
        background: #FFF;
        span{
            text-align: center;
            font-family: Inter;
            font-size: 18px;
            font-style: normal;
            font-weight: 400;
            line-height: 18.4px;
        }
        h5{
            color: #000;
            text-align: center;
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: 28px;
            margin: 0;
            padding: 0;
        }
    }
}

.errorCard{
    margin-bottom: 2rem;
    span{
        color: #000;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 19px;
    }
}


`;

export const BalanceWrap = Styled.footer`
margin-bottom: 2rem;
`;

export const TransferWrap = Styled.footer`
margin-bottom: 2rem;

`;
