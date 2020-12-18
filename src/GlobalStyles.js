import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    /* Neat trick to show outline of elements */
    /* outline: 1px solid red; */
  }

  body {
   
    ${
      '' /* font-size: 16px;
    max-width: 100%;
    overflow-x: hidden;
    line-height: 1.6; */
    }

    margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(
    to left,
    rgba(7, 27, 82, 1) 0%,
    rgba(0, 128, 128, 1) 100%
  );



    
  }
.card-style {
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
}
.card-style: hover {
  transform: scale(1.05);
}
  
  @media (max-width: 480px) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: 480px) {
    html {
      font-size: 14px;
    }
  }

  @media (min-width: 768px) {
    html {
      font-size: 15px;
    }
  }

  @media (min-width: 992px) {
    html {
      font-size: 15px;
    }
  }

  @media (min-width: 1200px) {
    html {
      font-size: 15px;
    }
  }

  @media (min-width: 1600px) {
    html {
      font-size: 16px;
    }
  }
`;
