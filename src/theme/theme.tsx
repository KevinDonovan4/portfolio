import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { createTheme, CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material';

type ColorMode = 'light' | 'dark';

interface ColorModeContextValue {
    mode: ColorMode;
    toggleColorMode: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue | undefined>(undefined);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    if (!context) throw new Error('useColorMode must be used inside PortfolioThemeProvider');
    return context;
};

const paletteByMode = (mode: ColorMode) =>
    mode === 'dark'
        ? {
              background: '#0b1020',
              surface: '#121a2e',
              text: '#f5f6fb',
              muted: '#a8b0c5',
              line: '#28334d',
              accent: '#a5ffdc',
              deep: '#07121e',
          }
        : {
              background: '#f8fafc',
              surface: '#eef2f7',
              text: '#172034',
              muted: '#58637a',
              line: '#d7dfeb',
              accent: '#077a61',
              deep: '#e3f4ee',
          };

export function PortfolioThemeProvider({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<ColorMode>('dark');
    const theme = useMemo(() => {
        const colors = paletteByMode(mode);
        return createTheme({
            palette: {
                mode,
                background: { default: colors.background, paper: colors.surface },
                text: { primary: colors.text, secondary: colors.muted },
                primary: { main: colors.accent, contrastText: colors.background },
                divider: colors.line,
            },
            typography: {
                fontFamily: 'Manrope, Arial, sans-serif',
                h1: { fontWeight: 800, letterSpacing: '-2.4px', lineHeight: 1.06 },
                h2: { fontWeight: 800, letterSpacing: '-2.4px', lineHeight: 1.06 },
            },
            shape: { borderRadius: 8 },
            components: {
                MuiButton: {
                    styleOverrides: {
                        root: { fontWeight: 800, textTransform: 'none', borderRadius: 5 },
                    },
                },
            },
        });
    }, [mode]);

    return (
        <ColorModeContext.Provider
            value={{
                mode,
                toggleColorMode: () =>
                    setMode((current) => (current === 'dark' ? 'light' : 'dark')),
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles
                    styles={{
                        html: { scrollBehavior: 'smooth' },
                        '*': { boxSizing: 'border-box' },
                        a: { color: 'inherit' },
                    }}
                />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export const sectionContainer = {
    width: 'min(1120px, calc(100% - 48px))',
    mx: 'auto',
    '@media (max-width: 500px)': { width: 'calc(100% - 36px)' },
};
export const sectionTitleSx = {
    fontSize: 'clamp(32px, 4vw, 48px)',
    '& em': {
        color: 'primary.main',
        fontFamily: '"Playfair Display", serif',
        fontStyle: 'italic',
        fontWeight: 600,
    },
};
export const eyebrowSx = {
    color: 'primary.main',
    fontFamily: '"DM Mono", monospace',
    fontSize: 11,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    mb: 1.75,
};
