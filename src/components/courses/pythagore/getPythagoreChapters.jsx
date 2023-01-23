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
            relativePath: 'presentation'
        },
        {
            id: k++,
            component: <DemonstrationDuTheoreme />,
            title: 'Démonstration du théorème de Pythagore',
            relativePath: 'demonstration'
        },
        {
            id: k++,
            component: <DemonstrationDeLaReciproque />,
            title: 'Démonstration de la réciproque théorème de Pythagore',
            relativePath: 'reciproque'
        },
        {
            id: k++,
            component: <Applications />,
            title: 'Applications',
            relativePath: 'applications'
        },
        {
            id: k++,
            component: <TheoremeDAlKashi />,
            title: 'Théorème d\'Al-Kashi',
            relativePath: 'theoreme-d-al-kashi'
        } 
    ];
}

export default getPythagoreChapters;