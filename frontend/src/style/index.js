import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }
`;

export const defaultTheme = {
  primaryColor: "#6e91f6",
  gradient: "linear-gradient(102deg, #c568ff 0%, #6e91f6)",
};
