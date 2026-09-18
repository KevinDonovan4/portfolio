import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { experiences } from '../../data/experiences';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
const education = [
    { date: '2025', title: 'Licence en Informatique', role: 'Haute École d’Informatique (HEI)' },
    { date: '2020', title: 'Baccalauréat série D', role: '' },
];
export default function Journey() {
    const item = (
        date: string,
        title: string,
        role: string,
        body?: string,
        tech?: string,
        work = false
    ) => (
        <Box component={motion.article} {...reveal} sx={{ position: 'relative', pb: 5.5 }}>
            <Box
                sx={{
                    position: 'absolute',
                    left: { xs: -42, sm: -57 },
                    top: 0,
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                }}
            >
                {work ? <BriefcaseBusiness size={17} /> : <GraduationCap size={17} />}
            </Box>
            <Typography
                sx={{
                    fontFamily: '"DM Mono", monospace',
                    fontSize: 11,
                    color: 'primary.main',
                    mb: 1,
                }}
            >
                {date}
            </Typography>
            <Typography component="h3" sx={{ fontSize: 20, fontWeight: 700 }}>
                {title}
            </Typography>
            {role && (
                <Typography
                    component="h4"
                    sx={{ fontSize: 14, color: 'text.secondary', mt: 0.25, mb: 1.375 }}
                >
                    {role}
                </Typography>
            )}
            {body && (
                <Typography sx={{ fontSize: 14, color: 'text.secondary', mb: 1.5 }}>
                    {body}
                </Typography>
            )}
            {tech && (
                <Typography sx={{ fontFamily: '"DM Mono", monospace', fontSize: 11 }}>
                    {tech}
                </Typography>
            )}
        </Box>
    );
    return (
        <Box
            component="section"
            id="journey"
            sx={{ py: 14, bgcolor: 'background.paper', '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box component={motion.div} {...reveal}>
                    <Typography sx={eyebrowSx}>03 — Expérience</Typography>
                    <Typography component="h2" sx={sectionTitleSx}>
                        Mon <Box component="em">parcours</Box>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        borderLeft: 1,
                        borderColor: 'divider',
                        mt: 6,
                        ml: { xs: 1, sm: '13%' },
                        pl: { xs: 3.75, sm: 5.625 },
                        maxWidth: 800,
                    }}
                >
                    {education.map((entry) => (
                        <Box key={entry.title}>{item(entry.date, entry.title, entry.role)}</Box>
                    ))}
                    {experiences.map((entry, index) => (
                        <Box
                            key={entry.place}
                            component={motion.div}
                            {...reveal}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                        >
                            {item(
                                entry.date,
                                entry.place,
                                entry.role,
                                entry.body,
                                entry.tech,
                                true
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
