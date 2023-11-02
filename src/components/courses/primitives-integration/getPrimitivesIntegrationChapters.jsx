import Presentation from "./chapters/Presentation";
import TheoremeFondamentalDeLAnalyse from "./chapters/TheoremeFondamentalDeLAnalyse";

import InterpretationGeometriqueDeLaPrimitive from "./chapters/InterpretationGeometriqueDeLaPrimitive";
import InterpretationGeometriqueDeLaPrimitive2 from "./chapters/InterpretationGeometriqueDeLaPrimitive2";

import TableauRecapFonctionsPrimitives from "./chapters/TableauRecapFonctionsPrimitives";
import IntegrationEntreDeuxBornes from "./chapters/IntegrationEntreDeuxBornes";
import ProprietesDeLIntegrale from "./chapters/ProprietesDeLIntegrale";
import RelationDeChasles from "./chapters/RelationDeChasles";
import Linearite from "./chapters/Linearite";
import Positivite from "./chapters/Positivite";
import Croissance from "./chapters/Croissance";
import IntegrationParParties from "./chapters/IntegrationParParties";
import FonctionDefinieParUneIntegrale from "./chapters/FonctionDefinieParUneIntegrale";
import CalculSurfaceCercle from "./chapters/CalculSurfaceCercle";
import CalculSurfaceSphere from "./chapters/CalculSurfaceSphere";
import CalculVolumeSphere from "./chapters/CalculVolumeSphere";
import CalculVolumeCone from "./chapters/CalculVolumeCone";
import CalculSurfaceCone from "./chapters/CalculSurfaceCone";
import IntegrationParChangementDeVariable from "./chapters/IntegrationParChangementDeVariable";
import ValeurMoyenneEtInegaliteTriangulaire from "./chapters/ValeurMoyenneEtInegaliteTriangulaire";
import TableauRecapFonctionsPrimitivesComposees from "./chapters/TableauRecapFonctionsPrimitivesComposees";

const getPrimitivesIntegrationChapters = () => {

    var k = 0;

    return [ 
        {
            title: 'Présentation'
        },       
        {
            id: k++,
            component: <Presentation />,
            title: 'Présentation de la primitive',
            metaContent: 'Présentation de la primitive et quelques exemples.',
            relativePath: '/presentation'
        },
        {
            id: k++,
            component: <TheoremeFondamentalDeLAnalyse />,
            title: 'Théorème fondamental de l\'analyse',
            metaContent: 'Théorème fondamental de l\'analyse.',
            relativePath: '/theoreme-fondamental-de-l-analyse'
        },
        {
            title: 'Intégration'
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
            component: <InterpretationGeometriqueDeLaPrimitive />,
            title: 'Interprétation géométrique de la primitive',
            metaContent: 'Interprétation géométrique de la primitive.',
            relativePath: '/interpretation-geometrique'
        },
        {
            id: k++,
            component: <InterpretationGeometriqueDeLaPrimitive2 />,
            title: 'Interprétation géométrique de la primitive (suite)',
            metaContent: 'Interprétation géométrique de la primitive(suite).',
            relativePath: '/interpretation-geometrique-2'
        },
        {
            id: k++,
            component: <IntegrationEntreDeuxBornes />,
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
            component: <ValeurMoyenneEtInegaliteTriangulaire />,
            title: 'Valeur moyenne d\'une intégrale, inégalité triangulaire',
            metaContent: 'Valeur moyenne d\'une intégrale, inégalité triangulaire.',
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
            component: <IntegrationParChangementDeVariable />,
            title: 'Intégration par changement de variable',
            metaContent: 'Intégration par changement de variable : explication et exemples.',
            relativePath: '/integration-par-changement-de-variable'
        },
        {
            title: 'Récapitulatif'
        },  
        {
            id: k++,
            component: <TableauRecapFonctionsPrimitives />,
            title: 'Tableau récapitulatif des primitives de fonctions usuelles',
            metaContent: 'Tableau récapitulatif des primitives de fonctions usuelles.',
            relativePath: '/tableau-recap-primitives-fonctions-usuelles'
        },
        {
            id: k++,
            component: <TableauRecapFonctionsPrimitivesComposees />,
            title: 'Tableau récapitulatif des primitives de fonctions composées usuelles',
            metaContent: 'Tableau récapitulatif des primitives de fonctions composées usuelles.',
            relativePath: '/tableau-recap-primitives-fonctions-composees-usuelles'
        },
        {
            title: 'Calcul d\'intégration sur des figures géométriques'
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