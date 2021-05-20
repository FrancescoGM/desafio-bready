import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: ${props => props.theme.colors['white']};
    color: ${props => props.theme.colors['gray.700']};
    font-family: 'Playfair Display', sans-serif;
  }

  input, textarea, select, button {
    font: 400 1rem 'PT Sans', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'PT Sans', sans-serif;
    color: ${props => props.theme.colors['black']};
  }

  button {
    cursor: pointer;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
