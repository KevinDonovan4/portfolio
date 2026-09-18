import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Box, Button, Container, IconButton, Stack, TextField, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { GitFork, Mail, Network, Send } from 'lucide-react';
import { reveal } from '../../animations/reveal';
import { eyebrowSx, sectionContainer, sectionTitleSx } from '../../theme/theme';

const linkSx = {
    display: 'flex',
    alignItems: 'center',
    gap: 1.25,
    color: 'text.primary',
    textDecoration: 'none',
    my: 2.25,
    fontWeight: 600,
    '& svg': {
        color: 'primary.main',
    },
};

export default function Contact() {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const fieldSx = {
        '& .MuiInputBase-root:before': {
            borderColor: 'divider',
        },
        '& .MuiInputBase-root:hover:not(.Mui-disabled):before': {
            borderColor: 'divider',
        },
        '& .MuiInputBase-root:after': {
            borderColor: 'primary.main',
        },
        '& label': {
            color: 'text.secondary',
            fontWeight: 700,
            fontSize: 12,
        },
    };

    const submit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setSending(true);
        setSuccess(false);
        setError(false);

        try {
            const form = event.currentTarget;

            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                }
            );

            setSuccess(true);
            form.reset();
        } catch (err) {
            console.error('Erreur EmailJS :', err);
            setError(true);
        } finally {
            setSending(false);
        }
    };

    return (
        <Box
            component="section"
            id="contact"
            sx={{
                py: 14,
                '@media (max-width: 500px)': {
                    py: 9.375,
                },
            }}
        >
            <Container disableGutters sx={sectionContainer}>
                <Box
                    component={motion.div}
                    {...reveal}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr .9fr',
                        gap: 11.25,
                        '@media (max-width: 800px)': {
                            gridTemplateColumns: '1fr',
                            gap: 4.375,
                        },
                    }}
                >
                    <Box>
                        <Typography sx={eyebrowSx}>06 — Contact</Typography>

                        <Typography
                            component="h2"
                            sx={{
                                ...sectionTitleSx,
                                mb: 3.125,
                            }}
                        >
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
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
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
                                    '&:hover': {
                                        color: 'primary.main',
                                    },
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

                            {success && (
                                <Typography
                                    sx={{
                                        color: 'success.main',
                                        fontSize: 13,
                                        fontWeight: 600,
                                    }}
                                >
                                    ✓ Votre message a bien été envoyé. Merci !
                                </Typography>
                            )}

                            {error && (
                                <Typography
                                    sx={{
                                        color: 'error.main',
                                        fontSize: 13,
                                        fontWeight: 600,
                                    }}
                                >
                                    Une erreur est survenue. Veuillez réessayer.
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                variant="contained"
                                disabled={sending}
                                endIcon={<Send size={17} />}
                                sx={{
                                    mt: 1,
                                    py: 1.5,
                                }}
                            >
                                {sending ? 'Envoi en cours...' : 'Envoyer'}
                            </Button>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
