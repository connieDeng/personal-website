const white = '#f5f5f5'
const black = '#242426'
const whiteOP = 'rgba(245,245, 245, 0.2)';
const blackOP = 'rgba(36, 36, 38, 0.2)';


export const LightTheme = {
    pageBackground: white,
    titleColor: blackOP,
    divColor: black,
    opaqueColor: whiteOP
};
  
export const DarkTheme = {
    pageBackground: black,
    titleColor: whiteOP,
    divColor: white,
    opaqueColor: blackOP
}

export const themes = {
    light: LightTheme,
    dark: DarkTheme,
}
