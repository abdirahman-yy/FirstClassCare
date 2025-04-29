import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      text: string;
      lightText: string;
      border: string;
      success: string;
      hover: string;
      footerBg: string;
    };
    fonts: {
      main: string;
    };
    breakpoints: {
      small: string;
      medium: string;
      large: string;
      xlarge: string;
    };
    spacing: {
      sectionPadding: string;
    };
    transitions: {
      default: string;
    };
    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };
    boxShadow: {
      light: string;
      medium: string;
      dark: string;
    };
  }
} 