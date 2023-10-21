import Presentation from "./chapters/Presentation";
import InterpretationGeometriqueDeLaPrimitive from "./chapters/InterpretationGeometriqueDeLaPrimitive";
import TableauRecapFonctionsPrimitives from "./chapters/TableauRecapFonctionsPrimitives";
import LIntegration from "./chapters/LIntegration";
import ProprietesDeLIntegrale from "./chapters/ProprietesDeLIntegrale";
import RelationDeChasles from "./chapters/RelationDeChasles";
import Linearite from "./chapters/Linearite";
import Positivite from "./chapters/Positivite";
import Croissance from "./chapters/Croissance";
import ValeurMoyenne from "./chapters/ValeurMoyenne";
import IntegrationParParties from "./chapters/IntegrationParParties";
import FonctionDefinieParUneIntegrale from "./chapters/FonctionDefinieParUneIntegrale";
import CalculSurfaceCercle from "./chapters/CalculSurfaceCercle";
import CalculSurfaceSphere from "./chapters/CalculSurfaceSphere";
import CalculVolumeSphere from "./chapters/CalculVolumeSphere";
import CalculVolumeCone from "./chapters/CalculVolumeCone";
import CalculSurfaceCone from "./chapters/CalculSurfaceCone";

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
            component: <LIntegration />,
            title: 'Intégration d\'une fonction entre deux bornes',
            metaContent: 'Intégration d\'une fonction entre deux bornes.',
            relativePath: '/integration'
        },
        {
            id: k++,
            component: <ProprietesDeLIntegrale />,
            title: 'Propriétés de l\'intégrale',
            metaContent: 'Propriétés de l\'intégrale.',
            relativePath: '/proprietes-de-l-integrale'
        },
        {
            id: k++,
            component: <RelationDeChasles />,
            title: 'Relation de Chasles',
            metaContent: 'Relation de Chasles pour les intégrales.',
            relativePath: '/relation-de-chasles'
        },
        {
            id: k++,
            component: <Linearite />,
            title: 'Linéarité de l\'intégrale',
            metaContent: 'Linéarité de l\'intégrale.',
            relativePath: '/linearite'
        },
        {
            id: k++,
            component: <Positivite />,
            title: 'Positivité de l\'intégrale',
            metaContent: 'Positivité de l\'intégrale.',
            relativePath: '/positivite'
        },
        {
            id: k++,
            component: <Croissance />,
            title: 'Croissance de l\'intégrale',
            metaContent: 'Croissance de l\'intégrale.',
            relativePath: '/croissance'
        },
        {
            id: k++,
            component: <ValeurMoyenne />,
            title: 'Valeur moyenne d\'une intégrale',
            metaContent: 'Valeur moyenne d\'une intégrale.',
            relativePath: '/valeur-moyenne'
        },
        {
            id: k++,
            component: <IntegrationParParties />,
            title: 'Intégration par parties',
            metaContent: 'Intégration par parties.',
            relativePath: '/integration-par-parties'
        }, 
        {
            id: k++,
            component: <FonctionDefinieParUneIntegrale />,
            title: 'Fonction définie par une intégrale',
            metaContent: 'Fonction définie par une intégrale.',
            relativePath: '/fonction-definie-par-une-integrale'
        },
        {
            id: k++,
            component: <TableauRecapFonctionsPrimitives />,
            title: 'Tableau récapitulatif des fonctions primitives',
            metaContent: 'Tableau récapitulatif des fonctions primitives.',
            relativePath: '/tableau-recap-fonctions-primitives'
        },
        {
            id: k++,
            component: <CalculSurfaceCercle />,
            title: 'Calcul de la surface du cercle par intégration',
            metaContent: 'Calcul de la surface du cercle par intégration.',
            relativePath: '/calcul-de-la-surface-du-cercle'
        },
        {
            id: k++,
            component: <CalculSurfaceSphere />,
            title: 'Calcul de la surface de la sphère par intégration',
            metaContent: 'Calcul de la surface de la sphère par intégration.',
            relativePath: '/calcul-de-la-surface-de-la-sphere'
        },
        {
            id: k++,
            component: <CalculVolumeSphere />,
            title: 'Calcul du volume de la sphère par intégration',
            metaContent: 'Calcul du volume de la sphère par intégration.',
            relativePath: '/calcul-du-volume-de-la-sphere'
        }, 
        {
            id: k++,
            component: <CalculSurfaceCone />,
            title: 'Calcul de la surface du cône par intégration',
            metaContent: 'Calcul de la surface du cône par intégration.',
            relativePath: '/calcul-de-la-surface-du-cone'
        },   
        {
            id: k++,
            component: <CalculVolumeCone />,
            title: 'Calcul du volume du cône par intégration',
            metaContent: 'Calcul du volume du cône par intégration.',
            relativePath: '/calcul-du-volume-du-cone'
        }           
    ];
}

export default getPrimitivesIntegrationChapters;