import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype'); font-display: swap;}


  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype'); font-display: swap;}


  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');   font-display: swap;}


  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');   font-display: swap;}


  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype'); font-display: swap;}


  @font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype'); font-display: swap;}

  
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 100;
    font-display: swap;
    src: local('Noto Sans KR'),
    url(/fonts/NotoSans-Light.woff2) format('woff2'),
    url(/fonts/NotoSans-Light.woff) format('woff'),
    url(/fonts/NotoSans-Light.otf) format('otf');
    unicode-range: U+0041-005A, U+0061-007A;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Noto Sans KR'),
    url(/fonts/NotoSans-Regular.woff2) format('woff2'),
    url(/fonts/NotoSans-Regular.woff) format('woff'),
    url(/fonts/NotoSans-Regular.otf) format('otf');
    unicode-range: U+0041-005A, U+0061-007A; 
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local('Noto Sans KR'),
    url(/fonts/NotoSans-Medium.woff2) format('woff2'),
    url(/fonts/NotoSans-Medium.woff) format('woff'),
    url(/fonts/NotoSans-Medium.otf) format('otf');
    unicode-range: U+0041-005A, U+0061-007A;
  }
  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Noto Sans KR'),
    url(/fonts/NotoSans-Bold.woff2) format('woff2'),
    url(/fonts/NotoSans-Bold.woff) format('woff'),
    url(/fonts/NotoSans-Bold.otf) format('otf');
    unicode-range: U+0041-005A, U+0061-007A;
  }

  :root {
      --header-height: 70px;
      --font-family: "Noto Sans KR", "sans-serif"
  }

  * {
      margin: 0;
      padding: 0;
      font-family: "Noto Sans KR", sans-serif;
      box-sizing: border-box;
    }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  #root {
    width: 100%;
  }

  body {
    padding: 0;
    margin: 0;
  }

`;

export default GlobalStyle;
