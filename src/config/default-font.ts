import firaCodeBoldWoff from '../assets/fonts/FiraCode-Bold.woff';
import firaCodeBoldWoff2 from '../assets/fonts/FiraCode-Bold.woff2';
import firaCodeLightWoff from '../assets/fonts/FiraCode-Light.woff';
import firaCodeLightWoff2 from '../assets/fonts/FiraCode-Light.woff2';
import firaCodeMediumWoff from '../assets/fonts/FiraCode-Medium.woff';
import firaCodeMediumWoff2 from '../assets/fonts/FiraCode-Medium.woff2';
import firaCodeRegularWoff from '../assets/fonts/FiraCode-Regular.woff';
import firaCodeRegularWoff2 from '../assets/fonts/FiraCode-Regular.woff2';
import firaCodeSemiBoldWoff from '../assets/fonts/FiraCode-SemiBold.woff';
import firaCodeSemiBoldWoff2 from '../assets/fonts/FiraCode-SemiBold.woff2';
import firaCodeVFWoff from '../assets/fonts/FiraCode-VF.woff';
import firaCodeVFWoff2 from '../assets/fonts/FiraCode-VF.woff2';

export const firaCode = `
    @font-face {
        font-family: 'Fira code Bold';
        font-style: normal;
        src: local(''),
             url(${firaCodeBoldWoff2}) format('woff2'),
             url(${firaCodeBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Fira code Light';
        font-style: normal;
        src: local(''),
             url(${firaCodeLightWoff2}) format('woff2'),
             url(${firaCodeLightWoff}) format('woff');
    }
    @font-face {
        font-family: 'Fira code Medium';
        font-style: normal;
        src: local(''),
             url(${firaCodeMediumWoff2}) format('woff2'),
             url(${firaCodeMediumWoff}) format('woff');
    }
    @font-face {
        font-family: 'Fira code Regular';
        font-style: normal;
        src: local(''),
             url(${firaCodeRegularWoff2}) format('woff2'),
             url(${firaCodeRegularWoff}) format('woff');
    }
    @font-face {
        font-family: 'Fira code SemiBold';
        font-style: normal;
        src: local(''),
             url(${firaCodeSemiBoldWoff2}) format('woff2'),
             url(${firaCodeSemiBoldWoff}) format('woff');
    }
    @font-face {
        font-family: 'Fira code VF';
        font-style: normal;
        font-weight: 200;
        src: local(''),
             url(${firaCodeVFWoff2}) format('woff2'),
             url(${firaCodeVFWoff}) format('woff');
    }
`;
