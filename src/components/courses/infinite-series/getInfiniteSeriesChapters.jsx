import Exemple from "./chapters/Exemple";
import Presentation from "./chapters/Presentation";
import TableauRecapDeveloppementsLimites from "./chapters/TableauRecapDeveloppementsLimites";

const getInfiniteSeriesChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation des développement limités',
            metaContent: 'Présentation des développement limités, démonstration.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <Exemple />,
            title: 'Exemple de développement limité : la fonction sin(x)',
            metaContent: 'Exemple de développement limité : la fonction sin(x).',
            relativePath: '/exemple'
        },
        {
            id: k++,
            component: <TableauRecapDeveloppementsLimites />,
            title: 'Tableau récapitulatif des développements limités usuels',
            metaContent: 'Tableau récapitulatif des développements limités usuels.',
            relativePath: '/tableau-recap-developpements-limités'
        }

    ];
}

export default getInfiniteSeriesChapters;