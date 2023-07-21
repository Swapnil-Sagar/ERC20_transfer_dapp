import Styled from "styled-components";

export const HeaderContainer = Styled.footer`
font-family: IBM Plex Sans;
    padding: 0.5rem 6rem;

    .header-logo{
        width: 32px;
    }
    
    .header-round-dropdown{
        border-radius: 90px;
    border: 1px solid #E7ECEF;
    background: transparent;
    color: #1B2022;
    }
    
    .nav-link {
        color: #1B2022;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; 
        display: flex;
        align-items: center;
    }
    
    .dropdown-toggle::after {
        display: none;
    }
    
    .theme-toggle-btn{
        border-radius: 90px;
        color: #1B2022;
    background: #E9EAF0;
    box-shadow: 2px 2px 7px 0px rgba(0, 0, 0, 0.28);
    border: none;
    display: flex;
    align-items: center;
    padding: 0.3rem;
    }

    .header-round-dropdown:hover {
        color: black;
        background-color: #fffcfc00; 
        border: 1px solid #ccc;
        
    }

    .nav-item{
        transition: all 0.2s ease-in-out;  
    }
    
    .nav-item:hover {
        color: #31C1BF !important;
    }

`;
