import LeProduitEnCroix from './chapters/LeProduitEnCroix';
import LesOperationsDeBase from './chapters/LesOperationsDeBase';
import LaDistributiviteLaFactorisation from './chapters/LaDistributiviteLaFactorisation';

import LesFractions from './chapters/LesFractions';
import LesReglesDeDivisibilite from './chapters/LesReglesDeDivisibilite';
import LesIdentitesRemarquables from './chapters/LesIdentitesRemarquables';
import LeTriangleDePascal from './chapters/LeTriangleDePascal';
import LesTablesDeMultiplication from './chapters/LesTablesDeMultiplication';
import LesTablesDeMultiplication2 from './chapters/LesTablesDeMultiplication2';

const getElementaryCalculusChapters = () => {

    var k = 0;

    return [      
         {
            id: k++,
            component: <LesOperationsDeBase />,
            title: 'Les opérations de base',
            metaContent: 'Les opérations de base : addition, soustraction, multiplication, division et priorités.',
            relativePath: '/les-operations-de-base'
        }, 
        {
            id: k++,
            component: <LesTablesDeMultiplication />,
            title: 'Les tables de multiplication',
            metaContent: 'Les tables de multiplication de 0 à 9.',
            relativePath: '/les-tables-de-multiplication'
        }, 
        {
            id: k++,
            component: <LesTablesDeMultiplication2 />,
            title: 'Les tables de multiplication (suite)',
            metaContent: 'Les tables de multiplication de 10 à 19.',
            relativePath: '/les-tables-de-multiplication-suite'
        }, 
        {
            id: k++,
            component: <LeProduitEnCroix />,
            title: 'Le produit en croix',
            metaContent: 'Le produit en croix : présentation, démonstration et exercices.',
            relativePath: '/le-produit-en-croix'
        },
        {
            id: k++,
            component: <LaDistributiviteLaFactorisation />,
            title: 'Le distributivité et la factorisation',
            metaContent: 'La distributivité et la factorisation : explications, liens et exemples.',
            relativePath: '/la-distributivite-et-la-factorisation'
        },
        {
            id: k++,
            component: <LesFractions />,
            title: 'Les fractions',
            metaContent: 'Les fractions : opérations de base et exemples',
            relativePath: '/les-fractions'
        },
        {
            id: k++,
            component: <LesReglesDeDivisibilite />,
            title: 'Les règles de divisibilité',
            metaContent: 'Les règles de divisibilité : par 2, 3, 4, 5, 9',
            relativePath: '/les-regles-de-divisibilite'
        },
        {
            id: k++,
            component: <LesIdentitesRemarquables />,
            title: 'Les identités remarquables',
            metaContent: 'Les identités remarquables',
            relativePath: '/les-identites-remarquables'
        },
        {
            id: k++,
            component: <LeTriangleDePascal />,
            title: 'Le triangle de Pascal',
            metaContent: 'Le triangle de Pascal : détermination des coefficient binomiaux',
            relativePath: '/le-triangle-de-pascal'
        }
    ];
}

export default getElementaryCalculusChapters;