/**
 * Apply global styles to React app.
 *
 * NOTE: Do not use this file for component specific styles.
 */

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
  }

  button,
  button:hover,
  button:active,
  button:focus {
    outline: 0 !important;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    outline: 0 !important;
  }
`

export default GlobalStyle
