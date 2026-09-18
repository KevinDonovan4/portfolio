import type { LucideIcon } from 'lucide-react';
import { BriefcaseBusiness, Code2, GraduationCap, Server } from 'lucide-react';

export interface Project {
    number: string;
    title: string;
    text: string;
    tags: string[];
    points: string[];
    icon: LucideIcon;
}

export const projects: Project[] = [
    {
        number: '01',
        title: 'Gestion du parc automobile',
        text: 'Application web et mobile destinée à la gestion d’un parc automobile.',
        tags: ['React.js', 'React Native', 'Express.js', 'SQL Server', 'AWS'],
        points: [
            'Gestion du parc automobile',
            'API REST & logique métier',
            'Application mobile et déploiement AWS EC2',
        ],
        icon: Server,
    },
    {
        number: '02',
        title: 'ADRColis',
        text: 'Application web et mobile de gestion et de suivi des livraisons.',
        tags: ['React.js', 'React Native', 'NestJS', 'PostgreSQL'],
        points: [
            'Gestion des livraisons',
            'Suivi des livreurs en temps réel',
            'Carte interactive & API REST',
        ],
        icon: Code2,
    },
    {
        number: '03',
        title: 'Application RH',
        text: 'Application Full Stack de gestion des ressources humaines.',
        tags: ['ASP.NET Core', 'Angular', 'SQL Server'],
        points: ['Gestion du recrutement', 'Mobilité interne', 'Demandes de personnel'],
        icon: BriefcaseBusiness,
    },
    {
        number: '04',
        title: 'AGETIPA Academy',
        text: 'Plateforme web déployée et mise en production dans le cadre des activités informatiques d’AGETIPA.',
        tags: ['Déploiement', 'Mise en production'],
        points: ['Mise en production', 'Support technique'],
        icon: GraduationCap,
    },
];
