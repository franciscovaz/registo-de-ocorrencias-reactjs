import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      headerBackground: string;

      registerCardBackground: string;

      fieldsetSpanColor: string;

      background: string;
      text: string;
    };
  }
}
