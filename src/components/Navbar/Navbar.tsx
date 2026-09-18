import { useState } from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';
import { navigation } from '../../data/navigation';
import { useColorMode } from '../../theme/theme';

const scrollToSection = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { mode, toggleColorMode } = useColorMode();
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = (id: string) => {
        scrollToSection(id);
        setOpen(false);
    };
    const navButtonSx = {
        color: 'text.secondary',
        fontSize: 13,
        '&:hover': { color: 'primary.main', backgroundColor: 'transparent' },
    };

    return (
        <AppBar
            component="header"
            position="fixed"
            elevation={0}
            sx={{
                height: 76,
                justifyContent: 'center',
                bgcolor: `${theme.palette.background.default}eb`,
                backdropFilter: 'blur(16px)',
                borderBottom: 1,
                borderColor: 'divider',
            }}
        >
            <Toolbar
                disableGutters
                sx={{
                    width: 'min(1120px, calc(100% - 48px))',
                    minHeight: '76px !important',
                    mx: 'auto',
                    justifyContent: 'space-between',
                    position: 'relative',
                    '@media (max-width: 500px)': { width: 'calc(100% - 36px)' },
                }}
            >
                <Box
                    component="a"
                    href="#home"
                    onClick={() => navigate('home')}
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
                {!mobile && (
                    <Box component="nav" sx={{ display: 'flex', gap: 1.25 }}>
                        {navigation.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => navigate(item.id)}
                                sx={navButtonSx}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                )}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <IconButton
                        aria-label="Changer de thème"
                        onClick={toggleColorMode}
                        sx={{
                            width: 37,
                            height: 37,
                            border: 1,
                            borderColor: 'divider',
                            color: 'text.primary',
                        }}
                    >
                        {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                    </IconButton>
                    {!mobile && (
                        <Button
                            component="a"
                            href="/CV.pdf"
                            download
                            startIcon={<Download size={16} />}
                            sx={{
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                fontSize: 12,
                                px: 1.5,
                                py: 1,
                                '&:hover': { bgcolor: 'primary.main', filter: 'brightness(.95)' },
                            }}
                        >
                            CV
                        </Button>
                    )}
                    {mobile && (
                        <IconButton
                            className="mobile-menu-button"
                            aria-label="Menu"
                            onClick={() => setOpen((value) => !value)}
                            sx={{
                                width: 37,
                                height: 37,
                                border: 1,
                                borderColor: 'divider',
                                color: 'text.primary',
                            }}
                        >
                            {open ? <X /> : <Menu />}
                        </IconButton>
                    )}
                </Box>
                {mobile && open && (
                    <Box
                        component="nav"
                        sx={{
                            position: 'absolute',
                            top: 76,
                            left: 'calc((100vw - 100%) / -2)',
                            right: 'calc((100vw - 100%) / -2)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 0.5,
                            px: 3,
                            py: 2.5,
                            bgcolor: 'background.default',
                            borderBottom: 1,
                            borderColor: 'divider',
                        }}
                    >
                        {navigation.map((item) => (
                            <Button
                                key={item.id}
                                onClick={() => navigate(item.id)}
                                sx={{ ...navButtonSx, justifyContent: 'flex-start' }}
                            >
                                {item.label}
                            </Button>
                        ))}
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
}
