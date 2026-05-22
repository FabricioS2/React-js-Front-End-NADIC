import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
    font-family: ${({ theme }) => theme.fontMono};
    font-size: 1.5rem;
    line-height: 1.6;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
    background-image:
      linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
    background-size: 24px 24px;

    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 9999;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(0, 0, 0, 0.04) 3px,
        rgba(0, 0, 0, 0.04) 6px
      );
    }
  }
`;