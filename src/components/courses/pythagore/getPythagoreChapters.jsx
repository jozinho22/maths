import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';
import DemonstrationDeLaReciproque from './chapters/DemonstrationDeLaReciproque'; 
import TheoremeDAlKashi from './chapters/TheoremeDAlKashi';
import Applications from './chapters/Applications';

const getPythagoreChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation du théorème de Pythagore et de la formule générale.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <DemonstrationDuTheoreme />,
            title: 'Démonstration du théorème ',
            metaContent: 'Démonstration du théorème de Pythagore par décomposition du triangle.',
            relativePath: '/demonstration'
        },
        {
            id: k++,
            component: <DemonstrationDeLaReciproque />,
            title: 'Démonstration de la réciproque du théorème',
            metaContent: 'Démonstration de la réciproque du théorème de Pythagore en faisant intervenir Al-Kashi.',
            relativePath: '/demonstration-de-la-reciproque'
        },
        {
            id: k++,
            component: <Applications />,
            title: 'Applications',
            metaContent: 'Applications possibles du théorème de Pythagore (notamment des mesures de longueurs).',
            relativePath: '/applications'
        },
        {
            id: k++,
            component: <TheoremeDAlKashi />,
            title: 'Théorème d\'Al-Kashi',
            metaContent: 'Le théorème d\'Al-Kashi, une généralisation du du théorème de Pythagore.',
            relativePath: '/theoreme-d-al-kashi'
        } 
    ];
}

export default getPythagoreChapters;