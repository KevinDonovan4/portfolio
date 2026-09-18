import { Box, Card, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Code2, Database, Server } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { skills } from '../../data/skills';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
export default function Skills() {
    return (
        <Box
            component="section"
            id="skills"
            sx={{ py: 14, '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box component={motion.div} {...reveal}>
                    <Typography sx={eyebrowSx}>02 — Expertise</Typography>
                    <Typography component="h2" sx={sectionTitleSx}>
                        Mes <Box component="em">compétences</Box>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: 1.75,
                        mt: 5.375,
                        '@media (max-width: 800px)': { gridTemplateColumns: 'repeat(2, 1fr)' },
                        '@media (max-width: 500px)': { gridTemplateColumns: '1fr' },
                    }}
                >
                    {skills.map((skill, index) => {
                        const Icon = index === 2 ? Database : index === 1 ? Server : Code2;
                        return (
                            <Card
                                component={motion.article}
                                {...reveal}
                                transition={{ duration: 0.4, delay: index * 0.06 }}
                                key={skill.title}
                                variant="outlined"
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.default',
                                    borderColor: 'divider',
                                    boxShadow: 'none',
                                    '&:hover': { transform: 'translateY(-5px)' },
                                }}
                            >
                                <Icon
                                    color="currentColor"
                                    style={{
                                        color: 'var(--mui-palette-primary-main)',
                                        marginBottom: 18,
                                    }}
                                />
                                <Typography
                                    component="h3"
                                    sx={{ fontSize: 17, fontWeight: 700, mb: 0.875 }}
                                >
                                    {skill.title}
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
                                    {skill.technologies}
                                </Typography>
                            </Card>
                        );
                    })}
                </Box>
            </Container>
        </Box>
    );
}
