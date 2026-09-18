export interface NavigationItem {
    label: string;
    id: string;
}

export const navigation: NavigationItem[] = [
    { label: 'Accueil', id: 'home' },
    { label: 'À propos', id: 'about' },
    { label: 'Compétences', id: 'skills' },
    { label: 'Parcours', id: 'journey' },
    { label: 'Projets', id: 'projects' },
    { label: 'Contact', id: 'contact' },
];
