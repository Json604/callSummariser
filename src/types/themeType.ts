import { ReactNode } from "react";

export type ThemeType = {
    primary: string,
    secondary:string,
    background: string,
    text: string,
    subtext: string,
    card:string,
    outline:string,
    placeholderText:string,
}

export type ProviderType = {
    children: ReactNode
}