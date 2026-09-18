import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowDown, Download, GitFork, Mail, Network, type LucideIcon } from 'lucide-react';
import { reveal } from '../../animations/reveal';

export default function Hero() {
    return (
        <Container
            id="home"
            disableGutters
            sx={{
                width: 'min(1120px, calc(100% - 48px))',
                minHeight: 760,
                display: 'grid',
                gridTemplateColumns: '1.2fr .8fr',
                gap: 10,
                alignItems: 'center',
                pt: '76px',
                '@media (max-width: 800px)': {
                    width: 'min(100% - 48px, 1120px)',
                    gridTemplateColumns: '1fr',
                    gap: 5.5,
                    minHeight: 'auto',
                    pt: '135px',
                    pb: 10,
                },
                '@media (max-width: 500px)': { width: 'calc(100% - 36px)' },
            }}
        >
            <Box component={motion.div} {...reveal}>
                <Typography
                    sx={{
                        color: 'primary.main',
                        fontFamily: '"DM Mono", monospace',
                        fontSize: 11,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        mb: 1.75,
                    }}
                >
                    Disponible pour de nouvelles opportunités
                </Typography>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: 'clamp(37px, 5.1vw, 69px)',
                        '& em': {
                            color: 'primary.main',
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            fontStyle: 'normal',
                        },
                    }}
                >
                    Kevin Donovan
                    <br />
                    <Box component="em">RAKOTONDRAMANANA</Box>
                </Typography>
                <Typography
                    component="h2"
                    sx={{
                        fontSize: 'clamp(29px, 3.5vw, 43px)',
                        fontWeight: 800,
                        letterSpacing: '-2.4px',
                        lineHeight: 1.06,
                        mt: 1.75,
                        '& span': {
                            color: 'primary.main',
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 600,
                            fontStyle: 'italic',
                        },
                    }}
                >
                    Développeur <Box component="span">Full Stack</Box>
                </Typography>
                <Typography sx={{ maxWidth: 650, my: 2.5, color: 'text.secondary', fontSize: 16 }}>
                    Développeur Full Stack diplômé en Informatique, passionné par la conception et
                    le développement d’applications web et mobiles. Curieux, autonome et adaptable,
                    je transforme les besoins métiers en solutions techniques modernes et efficaces.
                </Typography>
                <Typography
                    sx={{ fontFamily: '"DM Mono", monospace', fontSize: 12, letterSpacing: '.2px' }}
                >
                    ReactJS{' '}
                    <Box component="i" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                        •
                    </Box>{' '}
                    NodeJS{' '}
                    <Box component="i" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                        •
                    </Box>{' '}
                    React Native{' '}
                    <Box component="i" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                        •
                    </Box>{' '}
                    Java{' '}
                    <Box component="i" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                        •
                    </Box>{' '}
                    Angular{' '}
                    <Box component="i" sx={{ color: 'primary.main', fontStyle: 'normal' }}>
                        •
                    </Box>{' '}
                    AWS
                </Typography>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={1.5}
                    sx={{ my: 3.875, alignItems: { xs: 'stretch', sm: 'center' } }}
                >
                    <Button
                        component="a"
                        href="/CV.pdf"
                        download
                        variant="contained"
                        startIcon={<Download size={18} />}
                        sx={{ py: 1.5, '&:hover': { transform: 'translateY(-2px)' } }}
                    >
                        Télécharger mon CV
                    </Button>
                    <Button
                        variant="outlined"
                        endIcon={<ArrowDown size={18} />}
                        onClick={() =>
                            document
                                .getElementById('projects')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                        sx={{
                            py: 1.5,
                            color: 'text.primary',
                            borderColor: 'divider',
                            '&:hover': { borderColor: 'divider', transform: 'translateY(-2px)' },
                        }}
                    >
                        Voir mes projets
                    </Button>
                </Stack>
                <Stack direction="row" spacing={0.75}>
                    {(
                        [
                            { Icon: Network, href: 'https://www.linkedin.com', label: 'LinkedIn' },
                            { Icon: GitFork, href: 'https://github.com', label: 'GitHub' },
                            { Icon: Mail, href: 'mailto:hei.donovan.2@gmail.com', label: 'Email' },
                        ] as { Icon: LucideIcon; href: string; label: string }[]
                    ).map(({ Icon, href, label }) => (
                        <IconButton
                            key={label}
                            component="a"
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel="noreferrer"
                            aria-label={label}
                            sx={{
                                color: 'text.secondary',
                                '&:hover': { color: 'primary.main', transform: 'translateY(-2px)' },
                            }}
                        >
                            <Icon />
                        </IconButton>
                    ))}
                </Stack>
            </Box>
            <Box
                component={motion.div}
                {...reveal}
                transition={{ duration: 0.7, delay: 0.15 }}
                sx={{
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: 295,
                    border: 1,
                    borderColor: 'divider',
                    bgcolor: 'background.paper',
                    borderRadius: 1.25,
                    boxShadow: (theme) =>
                        `18px 18px 0 ${theme.palette.mode === 'dark' ? '#07121e' : '#e3f4ee'}`,
                    maxWidth: { md: 'none', xs: 480 },
                }}
            >
                <Stack
                    direction="row"
                    spacing={0.875}
                    sx={{
                        height: 46,
                        px: 1.875,
                        borderBottom: 1,
                        borderColor: 'divider',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ee736c' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#f9cc65' }} />
                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#8bd495' }} />
                    <Typography
                        sx={{
                            ml: 0.75,
                            color: 'text.secondary',
                            fontFamily: '"DM Mono", monospace',
                            fontSize: 10,
                        }}
                    >
                        kevin.ts
                    </Typography>
                </Stack>
                <Box
                    component="pre"
                    sx={{
                        p: { xs: '23px 15px', sm: '27px 23px' },
                        m: 0,
                        fontFamily: '"DM Mono", monospace',
                        fontSize: { xs: 11, sm: 14 },
                        lineHeight: 2,
                        whiteSpace: 'pre-wrap',
                        position: 'relative',
                        zIndex: 1,
                    }}
                >
                    <code>
                        <Box component="small" sx={{ color: '#67728b' }}>
                            01
                        </Box>{' '}
                        <Box component="b" sx={{ color: '#bc9aff' }}>
                            const
                        </Box>{' '}
                        developer = {'{'}
                        {'\n'}
                        <Box component="small" sx={{ color: '#67728b' }}>
                            02
                        </Box>{' '}
                        name:{' '}
                        <Box
                            component="mark"
                            sx={{ color: 'primary.main', bgcolor: 'transparent' }}
                        >
                            'Kevin Donovan'
                        </Box>
                        ,{'\n'}
                        <Box component="small" sx={{ color: '#67728b' }}>
                            03
                        </Box>{' '}
                        role:{' '}
                        <Box
                            component="mark"
                            sx={{ color: 'primary.main', bgcolor: 'transparent' }}
                        >
                            'Full Stack'
                        </Box>
                        ,{'\n'}
                        <Box component="small" sx={{ color: '#67728b' }}>
                            04
                        </Box>{' '}
                        mindset:{' '}
                        <Box
                            component="mark"
                            sx={{ color: 'primary.main', bgcolor: 'transparent' }}
                        >
                            'build with purpose'
                        </Box>
                        {'\n'}
                        <Box component="small" sx={{ color: '#67728b' }}>
                            05
                        </Box>{' '}
                        {'}'}
                    </code>
                </Box>
                <Box
                    sx={{
                        position: 'absolute',
                        width: 280,
                        height: 280,
                        right: -145,
                        bottom: -160,
                        border: 1,
                        borderColor: 'primary.main',
                        opacity: 0.35,
                        borderRadius: '50%',
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        width: 150,
                        height: 150,
                        right: -74,
                        bottom: -75,
                        border: 1,
                        borderColor: 'primary.main',
                        opacity: 0.35,
                        borderRadius: '50%',
                    }}
                />
            </Box>
        </Container>
    );
}
