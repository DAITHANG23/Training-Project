
import {  Theme, ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        textColor: {
            main?: string;
            card?: string;
        };
        backGroundColor: {
            main?: string;
            card?: string;
            active?: string;
            inactive?: string;
            iscoming?: string;
        };
    }

    interface ThemeOptions{
        textColor: {
            main?: string;
            card?: string;
        };
        backGroundColor: {
            main?: string;
            card?: string;
            active?: string;
            inactive?: string;
            iscoming?: string;
        };
    }
    export default function createTheme(option?: ThemeOptions, ...args: object[]): Theme;
}

