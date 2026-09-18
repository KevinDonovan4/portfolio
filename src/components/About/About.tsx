import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { reveal } from '../../animations/reveal';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
export default function About() {
    return (
        <Box
            component="section"
            id="about"
            sx={{ py: 14, bgcolor: 'background.paper', '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container
                disableGutters
                component={motion.div}
                {...reveal}
                sx={{
                    ...sectionContainer,
                    display: 'grid',
                    gridTemplateColumns: '.7fr 1.3fr',
                    gap: 10,
                    '@media (max-width: 800px)': { gridTemplateColumns: '1fr', gap: 4.375 },
                }}
            >
                <Box>
                    <Typography sx={eyebrowSx}>01 — Profil</Typography>
                    <Typography component="h2" sx={sectionTitleSx}>
                        À propos de <Box component="em">moi</Box>
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        sx={{
                            fontSize: 19,
                            fontWeight: 600,
                            lineHeight: 1.6,
                            mt: 0,
                            mb: 2,
                            color: 'text.primary',
                        }}
                    >
                        Diplômé d’une Licence en Informatique à la Haute École d’Informatique (HEI)
                        en 2025, je suis développeur Full Stack avec une expérience concrète en
                        développement web et mobile.
                    </Typography>
                    <Typography color="text.secondary">
                        J’interviens de la conception au déploiement et à la maintenance
                        d’applications, avec ReactJS, React Native, NodeJS, Java, Angular, ASP.NET
                        Core et les bases de données relationnelles. Je m’intéresse également à
                        l’automatisation des processus avec n8n.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
