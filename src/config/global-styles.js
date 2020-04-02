import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  body * {
    font-weight: 300;
    font-family: 'Baloo Thambi 2', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscal;
    -webkit-overflow-scrolling: touch;
    color: ${props => props.theme.colors.black};
    background-color: ${props => props.theme.colors.yellow};
  }

  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn,
  em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var,
  b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas,
  details, embed, figure, figcaption, footer, header, hgroup, menu, nav,
  output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-size: ${props => props.theme.fonts.body.fontSize};
    line-height: ${props => props.theme.fonts.body.lineHeight};
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after {
    content: '';
    content: none;
  }

  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #app, main, .container {
    height: 100%;
    width: 100%;
  }
  #root {
    height: 100%;
  }
`
