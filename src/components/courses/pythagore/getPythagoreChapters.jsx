import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';
import DemonstrationDeLaReciproque from './chapters/DemonstrationDeLaReciproque'; 
import TheoremeDAlKashi from './chapters/TheoremeDAlKashi';
import MesuresDansLePlanEtDansLEspace from './chapters/MesuresDansLePlanEtDansLEspace';
import DemonstrationDuTriangleRectangleDansLeCercle from './chapters/DemonstrationDuTriangleRectangleDansLeCercle';

const getPythagoreChapters = () => {

    var k = 0;

    return [
        {
            title: 'Théorème et réciproque'
        },  
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
            title: 'Applications'
        },  
        {
            id: k++,
            component: <MesuresDansLePlanEtDansLEspace />,
            title: 'Mesure d\'une longueur dans le plan dans l\'espace',
            metaContent: 'Mesure d\'une longueur dans le plan dans l\'espace.',
            relativePath: '/mesure-de-longueur-dans-le-plan-et-dans-l-espace'
        },
        {
            id: k++,
            component: <DemonstrationDuTriangleRectangleDansLeCercle />,
            title: 'Démonstration du triangle rectangle inscrit dans un cercle',
            metaContent: 'Démonstration du triangle rectangle inscrit dans un cercle.',
            relativePath: '/demonstration-du-triangle-rectangle-dans-le-cercle'
        },
        {
            title: 'Généralisation à tous les triangles'
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