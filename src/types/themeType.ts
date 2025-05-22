import { ReactNode } from "react";

export type ThemeType = {
    primary: string,
    secondary:string,
    background: string,
    text: string;
    subtext: string;
}

export type ProviderType = {
    children: ReactNode
}