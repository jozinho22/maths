import LeProduitEnCroix from './chapters/LeProduitEnCroix';
import LaDistributiviteLaFactorisation from './chapters/LaDistributiviteLaFactorisation';

import LesFractions from './chapters/LesFractions';
import LesReglesDeDivisibilite from './chapters/LesReglesDeDivisibilite';
import LesIdentitesRemarquables from './chapters/LesIdentitesRemarquables';
import LeTriangleDePascal from './chapters/LeTriangleDePascal';
import LesTablesDeMultiplication from './chapters/LesTablesDeMultiplication';
import LesTablesDeMultiplication2 from './chapters/LesTablesDeMultiplication2';

import LesPrioritesDeCalcul from './chapters/LesPrioritesDeCalcul';
import LAdditionLaSoustraction from './chapters/LAdditionLaSoustraction';
import LaMultiplicationLaDivision from './chapters/LaMultiplicationLaDivision';

const getElementaryCalculusChapters = () => {

    var k = 0;

    return [     
        {
            title: 'Bases du calcul'
        }, 
        {
            id: k++,
            component: <LAdditionLaSoustraction />,
            title: 'L\'addition / la soustraction',
            metaContent: 'L\'addition / la soustraction : addition, soustraction, élément neutre, signe.',
            relativePath: '/l-addition-la-soustraction'
        },
        {
            id: k++,
            component: <LaMultiplicationLaDivision />,
            title: 'La multiplication / la division',
            metaContent: 'La multiplication / la division : multiplication, division, élément neutre, signe.',
            relativePath: '/la-multiplication-la-division'
        },
        {
            id: k++,
            component: <LesPrioritesDeCalcul />,
            title: 'Les priorités de calcul',
            metaContent: 'Les priorités de calcul et gestion des parenthèses.',
            relativePath: '/les-priorites-de-calcul'
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
            title: 'Les tables de multiplication (de 10 à 100)',
            metaContent: 'Les tables de multiplication de 10 à 100.',
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
            component: <LesReglesDeDivisibilite />,
            title: 'Les règles de divisibilité',
            metaContent: 'Les règles de divisibilité : par 2, 3, 4, 5, 9',
            relativePath: '/les-regles-de-divisibilite'
        },
        {
            id: k++,
            component: <LesFractions />,
            title: 'Les fractions',
            metaContent: 'Les fractions : opérations de base et exemples',
            relativePath: '/les-fractions'
        },
        {
            title: 'Identités remarquables'
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