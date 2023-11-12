import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';
import DemonstrationDeLaReciproque from './chapters/DemonstrationDeLaReciproque';
import CorollaireDuTheoreme from './chapters/CorollaireDuTheoreme';

const getThalesChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'Présentation du théorème de Thalès et de la formule générale.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <DemonstrationDuTheoreme />,
            title: 'Démonstration du théorème',
            metaContent: 'Démonstration du théorème de Thalès en dessinant une hauteur.',
            relativePath: '/demonstration'
        },
        {
            id: k++,
            component: <CorollaireDuTheoreme />,
            title: 'Corollaire du théorème de Thalès : loi des milieux',
            metaContent: 'Corollaire du théorème de Thalès : loi des milieux.',
            relativePath: '/corollaire-loi-de-milieux'
        },
        {
            id: k++,
            component: <DemonstrationDeLaReciproque />,
            title: 'Démonstration de la réciproque du théorème',
            metaContent: 'Démonstration de la réciproque du théorème de Thalès en dessinant une hauteur.',
            relativePath: '/demonstration-de-la-reciproque'
        }
    ];
}

export default getThalesChapters;