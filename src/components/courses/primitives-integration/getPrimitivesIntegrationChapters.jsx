import Presentation from "./chapters/Presentation";
import InterpretationGeometriqueDeLaPrimitive from "./chapters/InterpretationGeometriqueDeLaPrimitive";
import TableauRecapFonctionsPrimitives from "./chapters/TableauRecapFonctionsPrimitives";
import LIntegration from "./chapters/LIntegration";

const getPrimitivesIntegrationChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation de la primitive',
            metaContent: 'Présentation de la primitive et quelques exemples.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <InterpretationGeometriqueDeLaPrimitive />,
            title: 'Interprétation géométrique de la primitive',
            metaContent: 'Interprétation géométrique de la primitive.',
            relativePath: '/interpretation-geometrique'
        },
        {
            id: k++,
            component: <TableauRecapFonctionsPrimitives />,
            title: 'Tableau récapitulatif des fonctions primitives',
            metaContent: 'Tableau récapitulatif des fonctions primitives.',
            relativePath: '/tableau-recap-fonctions-primitives'
        }
    ];
}

export default getPrimitivesIntegrationChapters;