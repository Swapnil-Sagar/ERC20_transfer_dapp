import Styled from "styled-components";

export const FooterContainer = Styled.footer`
padding: 1rem 6rem 2rem 6rem;
background: #F4F6F8;
color: #1B2022;
font-family: IBM Plex Sans;

.footer-navs{
    p{
        cursor: pointer;
        padding: 0.5rem 1rem;
        margin: 0;
        margin-right: 1rem;
        border-radius: 90px;
        border: 1px solid #E7ECEF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        transition: all 0.2s ease-in-out;
    }
    p:hover{
        color: #31C1BF;
    }
}
.footer-social{
    a{
    margin: 0;
    margin-right: 1rem;
    svg{
        height: 24px;
        width: 24px;
        transition: all 0.2s ease-in-out;  
    }
    }
    a:hover{
        svg{
        height: 30px;
        width: 30px;
    }
}
}
.token-col{
    color: #404B51;
font-family: IBM Plex Sans;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 24px; 
}

.coin-row{
    img{
        width: 24px;
    }
}

.rights{
    color: #ABB7BD;
font-family: IBM Plex Sans;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px;
}

.terms{
color: #404B51;
font-family: IBM Plex Sans;
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 24px;
li{
    list-style: none;    
}
}

.dot{
    color: #C8CFD3;
}

`;
