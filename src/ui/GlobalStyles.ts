import { createGlobalStyle } from "styled-components";
import { Color } from "../types";

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: ${Color.LightGreen};
    
}
`;
