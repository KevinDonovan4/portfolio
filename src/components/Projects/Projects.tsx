import { Box, Card, Chip, Container, Stack, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { projects } from '../../data/projects';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
export default function Projects() {
    return (
        <Box
            component="section"
            id="projects"
            sx={{ py: 14, '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box
                    component={motion.div}
                    {...reveal}
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'end',
                        gap: 3.75,
                        '@media (max-width: 800px)': {
                            alignItems: 'start',
                            flexDirection: 'column',
                        },
                    }}
                >
                    <Box>
                        <Typography sx={eyebrowSx}>04 — Réalisations</Typography>
                        <Typography component="h2" sx={sectionTitleSx}>
                            Projets de <Box component="em">développement</Box>
                        </Typography>
                    </Box>
                    <Typography color="text.secondary" sx={{ maxWidth: 330 }}>
                        Des solutions pensées pour répondre à des besoins métiers concrets.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: 2.25,
                        mt: 5.625,
                        '@media (max-width: 800px)': { gridTemplateColumns: '1fr' },
                    }}
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;
                        return (
                            <Card
                                component={motion.article}
                                {...reveal}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                key={project.title}
                                variant="outlined"
                                sx={{
                                    overflow: 'hidden',
                                    bgcolor: 'background.paper',
                                    borderColor: 'divider',
                                    boxShadow: 'none',
                                    '&:hover': { transform: 'translateY(-5px)' },
                                }}
                            >
                                <Box
                                    sx={{
                                        height: 130,
                                        px: 2.75,
                                        py: 2.75,
                                        color: 'primary.main',
                                        background: 'linear-gradient(120deg, #142942, #132131)',
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'end',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontFamily: '"DM Mono", monospace',
                                            fontSize: 36,
                                            fontWeight: 700,
                                            opacity: 0.28,
                                        }}
                                    >
                                        {project.number}
                                    </Typography>
                                    <Icon size={38} />
                                </Box>
                                <Box sx={{ p: 3 }}>
                                    <Typography
                                        component="h3"
                                        sx={{ fontSize: 17, fontWeight: 700, mb: 0.875 }}
                                    >
                                        {project.title}
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'text.secondary', fontSize: 14, mb: 1.875 }}
                                    >
                                        {project.text}
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        useFlexGap
                                        spacing={0.75}
                                        sx={{ mb: 2.25, flexWrap: 'wrap' }}
                                    >
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                variant="outlined"
                                                size="small"
                                                sx={{
                                                    color: 'primary.main',
                                                    borderColor: 'divider',
                                                    borderRadius: 0.375,
                                                    fontFamily: '"DM Mono", monospace',
                                                    fontSize: 10,
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                    <Stack
                                        component="ul"
                                        spacing={0.625}
                                        sx={{ p: 0, m: 0, listStyle: 'none' }}
                                    >
                                        {project.points.map((point) => (
                                            <Stack
                                                component="li"
                                                key={point}
                                                direction="row"
                                                spacing={0.875}
                                                sx={{
                                                    alignItems: 'center',
                                                    color: 'text.secondary',
                                                    fontSize: 12,
                                                }}
                                            >
                                                <Check
                                                    size={15}
                                                    color="currentColor"
                                                    style={{
                                                        color: 'var(--mui-palette-primary-main)',
                                                        flex: 'none',
                                                    }}
                                                />
                                                {point}
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Box>
                            </Card>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}
