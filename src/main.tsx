import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { PortfolioThemeProvider } from './theme/theme';
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <PortfolioThemeProvider>
            <App />
        </PortfolioThemeProvider>
    </StrictMode>
);
