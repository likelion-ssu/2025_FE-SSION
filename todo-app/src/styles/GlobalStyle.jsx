import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ownglyph_ParkDaHyun';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }

*{
  box-sizing: border-box;
}

  /* 부모 요소가 높이가 있어 의미 있다는 의미 */
  html, body, #root {
    height: 100%;     
    margin: 0;
    padding: 0;
    overflow-y: hidden;
  }

  body {
    line-height: 0;
    font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  }

  button {
    font-family: 'Ownglyph_ParkDaHyun', sans-serif;
  }
`;

export default GlobalStyle;
