import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { services } from '../../data/services';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
export default function Services() {
    return (
        <Box
            component="section"
            sx={{ py: 14, bgcolor: 'background.paper', '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box component={motion.div} {...reveal}>
                    <Typography sx={eyebrowSx}>05 — Services</Typography>
                    <Typography component="h2" sx={sectionTitleSx}>
                        Ce que je peux <Box component="em">faire</Box>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        mt: 5.375,
                        borderTop: 1,
                        borderLeft: 1,
                        borderColor: 'divider',
                        '@media (max-width: 800px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
                        '@media (max-width: 500px)': { gridTemplateColumns: '1fr' },
                    }}
                >
                    {services.map((service, index) => (
                        <Box
                            component={motion.article}
                            {...reveal}
                            transition={{ delay: index * 0.08 }}
                            key={service.title}
                            sx={{
                                minHeight: 190,
                                p: '25px 20px',
                                position: 'relative',
                                borderRight: 1,
                                borderBottom: 1,
                                borderColor: 'divider',
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: '"DM Mono", monospace',
                                    fontSize: 11,
                                    color: 'primary.main',
                                }}
                            >
                                0{index + 1}
                            </Typography>
                            <Typography
                                component="h3"
                                sx={{ fontSize: 16, fontWeight: 700, mt: 2.75, mb: 1 }}
                            >
                                {service.title}
                            </Typography>
                            <Typography sx={{ fontSize: 13, color: 'text.secondary' }}>
                                {service.description}
                            </Typography>
                            <ArrowUpRight
                                size={24}
                                style={{
                                    position: 'absolute',
                                    right: 16,
                                    top: 23,
                                    color: 'currentColor',
                                }}
                            />
                        </Box>
                    ))}
                </Box>
                <Box
                    component={motion.div}
                    {...reveal}
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 2.5,
                        alignItems: 'center',
                        mt: 4.25,
                        color: 'text.secondary',
                        fontSize: 13,
                    }}
                >
                    <Typography
                        component="strong"
                        sx={{ color: 'text.primary', fontSize: 13, mr: 1.25 }}
                    >
                        Langues
                    </Typography>
                    <span>Français — Niveau B2</span>
                    <span>Anglais — Niveau 3</span>
                    <span>Malagasy — Langue maternelle</span>
                </Box>
            </Container>
        </Box>
    );
}
