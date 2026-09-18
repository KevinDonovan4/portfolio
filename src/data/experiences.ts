export interface Experience {
    place: string;
    role: string;
    date: string;
    body: string;
    tech: string;
}

export const experiences: Experience[] = [
    {
        place: 'AGETIPA Madagascar',
        role: 'CDI / Consultant IT & Développeur Full Stack',
        date: '22/04/2026 – 21/07/2026',
        body: 'Application web et mobile de gestion du parc automobile. Conception d’API REST, logique métier, déploiement et maintenance sur AWS EC2, automatisation d’e-mails avec n8n. Déploiement, mise en production et support d’AGETIPA Academy.',
        tech: 'React.js · React Native · Express.js · SQL Server · AWS · n8n',
    },
    {
        place: 'Adrware Consulting',
        role: 'Stage — Développeur Frontend & Mobile',
        date: '01/08/2025 – 01/11/2025',
        body: 'Développement de l’application ADRColis, de ses interfaces, intégration d’API REST et carte interactive de suivi en temps réel des livreurs. Maintenance et évolution des fonctionnalités.',
        tech: 'React.js · React Native · NestJS · PostgreSQL',
    },
    {
        place: 'STAR Madagascar',
        role: 'Stage — Développeur Full Stack',
        date: '07/04/2025 – 07/06/2025',
        body: 'Développement frontend, backend et base de données d’une application RH : recrutement, mobilité interne et demandes de personnel.',
        tech: 'ASP.NET Core · Angular · SQL Server',
    },
];
