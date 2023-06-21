import Presentation from './chapters/Presentation';
import DemonstrationDuTheoreme from './chapters/DemonstrationDuTheoreme';

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
        }
    ];
}

export default getThalesChapters;