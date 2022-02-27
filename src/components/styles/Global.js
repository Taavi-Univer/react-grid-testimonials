import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    body {
    min-height: 100vh;
    background-color:${({ theme }) => theme.colors.body} ;
    /* background-color: hsl(210, 46%, 95%); */
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;

    }

    h3,
    p {
    margin: 0;
    }

`;

export default GlobalStyles;
