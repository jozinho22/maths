import LeProduitEnCroix from './chapters/LeProduitEnCroix';
import LesOperationsDeBase from './chapters/LesOperationsDeBase';
import LaDistributiviteLaFactorisation from './chapters/LaDistributiviteLaFactorisation';

import LesFractions from './chapters/LesFractions';
import ReglesDeDivisibilite from './chapters/ReglesDeDivisibilite';

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
            component: <ReglesDeDivisibilite />,
            title: 'Les règles de divisibilité',
            metaContent: 'Les règles de divisibilité : par 2, 3, 4, 5, 9',
            relativePath: '/les-regles-de-divisibilite'
        },
        {
            id: k++,
            component: <LeProduitEnCroix />,
            title: 'Le produit en croix',
            metaContent: 'Le produit en croix : présentation, démonstration et exercices.',
            relativePath: '/le-produit-en-croix'
        }
    ];
}

export default getElementaryCalculusChapters;