import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
    export interface Palette {
        green: PaletteColor,
        red: PaletteColor,
        yellow: PaletteColor,
        orange: PaletteColor
    }

    export interface PaletteOptions {
        green: SimplePaletteColorOptions,
        red: SimplePaletteColorOptions,
        yellow: SimplePaletteColorOptions,
        orange: SimplePaletteColorOptions,
    }
}
