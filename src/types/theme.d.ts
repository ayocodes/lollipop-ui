import { DefaultTheme } from "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends INewTheme {}
}

interface INewTheme {
  background: string;
  card: string;
  cardBorder: string;
  inputField: string;
  accent1: string;
  accent2: string;
  accent3: string;
  text1: string;
  text2: string;
  text3: string;
  border: string;
  borderHover: string;
  modal: string;
  error: string;
  warn: string;
  dark: boolean;
}
