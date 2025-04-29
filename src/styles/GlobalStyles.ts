import { createGlobalStyle, DefaultTheme } from 'styled-components';

// Define a theme that matches the DefaultTheme interface in styled.d.ts
export const theme: DefaultTheme = {
  colors: {
    primary: '#002b54',     // Deep blue (main brand color)
    secondary: '#0066cc',   // Brighter blue with better contrast for accents and buttons
    accent: '#e9f2fa',      // Lighter blue background for better contrast
    text: '#333333',        // Darker text for better readability
    lightText: '#ffffff',   // White text
    border: '#d0d0d0',      // Darker gray border for better contrast
    success: '#0b7724',     // Darker green for success messages (better contrast)
    hover: '#004080',       // Darker hover state for primary 
    footerBg: '#001e3c',    // Darker blue for footer
  },
  fonts: {
    main: "'Montserrat', 'Arial', sans-serif",
  },
  breakpoints: {
    small: '576px',
    medium: '768px',
    large: '992px',
    xlarge: '1200px',
  },
  spacing: {
    sectionPadding: '80px 0',
  },
  transitions: {
    default: '0.3s ease',
  },
  borderRadius: {
    small: '5px',
    medium: '10px',
    large: '50px',
  },
  boxShadow: {
    light: '0 5px 15px rgba(0, 0, 0, 0.05)',
    medium: '0 10px 30px rgba(0, 0, 0, 0.1)',
    dark: '0 15px 30px rgba(0, 0, 0, 0.15)',
  }
};

export type ThemeType = typeof theme;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 16px;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.secondary};
    transition: color ${({ theme }) => theme.transitions.default};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.hover};
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 1.6;
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }

  /* Button Styles */
  .btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    text-align: center;
    font-weight: 600;
    cursor: pointer;
    transition: all ${({ theme }) => theme.transitions.default};
    border: none;
    font-size: 16px;
  }

  .btn-primary {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
  }

  .btn-primary:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.lightText};
  }

  .btn-secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  .btn-secondary:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.lightText};
  }
  
  /* Accessibility Improvements */
  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.secondary};
    outline-offset: 2px;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Responsive Styles */
  @media (max-width: ${({ theme }) => theme.breakpoints.large}) {
    h1 {
      font-size: 2.8rem;
    }
    
    h2 {
      font-size: 1.6rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.medium}) {
    .container {
      padding: 0 15px;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
    h1 {
      font-size: 2.2rem;
    }
    
    h2 {
      font-size: 1.4rem;
    }
  }
`;

export default GlobalStyles; 