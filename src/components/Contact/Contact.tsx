import { type FormEvent } from 'react';
import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GitFork, Mail, Network, Send } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';
const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Merci pour votre message. Je vous répondrai dès que possible.');
};
const linkSx = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    color: 'text.primary',
    textDecoration: 'none',
    my: 2.25,
    fontWeight: 600,
    '& svg': { color: 'primary.main' },
};
export default function Contact() {
    const fieldSx = {
        '& .MuiInputBase-root:before': { borderColor: 'divider' },
        '& .MuiInputBase-root:hover:not(.Mui-disabled):before': { borderColor: 'divider' },
        '& .MuiInputBase-root:after': { borderColor: 'primary.main' },
        '& label': { color: 'text.secondary', fontWeight: 700, fontSize: 12 },
    };
    return (
        <Box
            component="section"
            id="contact"
            sx={{ py: 14, '@media (max-width: 500px)': { py: 9.375 } }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box
                    component={motion.div}
                    {...reveal}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr .9fr',
                        gap: 11.25,
                        '@media (max-width: 800px)': { gridTemplateColumns: '1fr', gap: 4.375 },
                    }}
                >
                    <Box>
                        <Typography sx={eyebrowSx}>06 — Contact</Typography>
                        <Typography component="h2" sx={{ ...sectionTitleSx, mb: 3.125 }}>
                            Travaillons <Box component="em">ensemble</Box>
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 19,
                                fontWeight: 600,
                                lineHeight: 1.6,
                                color: 'text.secondary',
                            }}
                        >
                            Vous avez un projet, une opportunité professionnelle ou souhaitez
                            simplement échanger ? N’hésitez pas à me contacter.
                        </Typography>
                        <Box component="a" href="mailto:hei.donovan.2@gmail.com" sx={linkSx}>
                            <Mail />
                            hei.donovan.2@gmail.com
                        </Box>
                        <Box component="a" href="tel:+261336057567" sx={linkSx}>
                            +261 33 60 575 67
                        </Box>
                        <Stack direction="row" spacing={0.75}>
                            <IconButton
                                component="a"
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                <Network />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                sx={{
                                    color: 'text.secondary',
                                    '&:hover': { color: 'primary.main' },
                                }}
                            >
                                <GitFork />
                            </IconButton>
                        </Stack>
                    </Box>
                    <Box
                        component="form"
                        onSubmit={submit}
                        sx={{
                            bgcolor: 'background.paper',
                            p: 3.25,
                            border: 1,
                            borderColor: 'divider',
                            borderRadius: 1,
                        }}
                    >
                        <Stack spacing={2}>
                            <TextField
                                required
                                name="name"
                                label="Nom"
                                placeholder="Votre nom"
                                variant="standard"
                                fullWidth
                                sx={fieldSx}
                            />
                            <TextField
                                required
                                type="email"
                                name="email"
                                label="Email"
                                placeholder="vous@entreprise.com"
                                variant="standard"
                                fullWidth
                                sx={fieldSx}
                            />
                            <TextField
                                required
                                name="subject"
                                label="Sujet"
                                placeholder="Le sujet de votre message"
                                variant="standard"
                                fullWidth
                                sx={fieldSx}
                            />
                            <TextField
                                required
                                name="message"
                                label="Message"
                                placeholder="Votre message"
                                multiline
                                rows={4}
                                variant="standard"
                                fullWidth
                                sx={fieldSx}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                endIcon={<Send size={17} />}
                                sx={{ mt: 1, py: 1.5 }}
                            >
                                Envoyer
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
