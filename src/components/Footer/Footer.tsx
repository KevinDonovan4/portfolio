import { Box, Typography } from '@mui/material';
export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: 1,
                borderColor: 'divider',
                py: 4.75,
                px: 'max(24px, calc((100vw - 1120px) / 2))',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 2.5,
                color: 'text.secondary',
                fontSize: 12,
                '@media (max-width: 500px)': {
                    px: 2.25,
                    py: 3.75,
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                },
            }}
        >
            <Box
                component="a"
                href="#home"
                sx={{
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 25,
                    fontWeight: 800,
                    letterSpacing: '-2px',
                }}
            >
                K
                <Box component="span" sx={{ color: 'primary.main' }}>
                    D.
                </Box>
            </Box>
            <Box>
                <Typography
                    component="strong"
                    sx={{ color: 'text.primary', fontWeight: 700, fontSize: 13 }}
                >
                    Kevin Donovan RAKOTONDRAMANANA
                </Typography>
                <Typography sx={{ m: 0, fontSize: 12 }}>Développeur Full Stack</Typography>
            </Box>
            <Typography sx={{ m: 0, fontSize: 12 }}>
                © 2026 Kevin Donovan RAKOTONDRAMANANA.
                <br />
                Tous droits réservés.
            </Typography>
        </Box>
    );
}
