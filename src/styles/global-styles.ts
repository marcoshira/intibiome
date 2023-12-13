import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body{
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
  font-weight: 400;
  overflow-x: hidden;
  /* background-color: #efefef; */
  
}

h1, h2, h3, h4, h5, h6{
  font-weight: 500;
}

`;
