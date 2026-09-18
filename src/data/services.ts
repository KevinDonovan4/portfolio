export interface Service {
    title: string;
    description: string;
}

export const services: Service[] = [
    {
        title: 'Développement Web',
        description: 'Création d’applications web modernes, performantes et responsives.',
    },
    {
        title: 'Développement Mobile',
        description: 'Développement d’applications mobiles avec React Native.',
    },
    { title: 'Développement Backend', description: 'Création d’API REST et de services backend.' },
    { title: 'Automatisation', description: 'Automatisation de tâches et de processus avec n8n.' },
];
