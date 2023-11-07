import LeProduitEnCroix from './chapters/LeProduitEnCroix';
import LesOperationsDeBase from './chapters/LesOperationsDeBase';
import LaDistributiviteLaFactorisation from './chapters/LaDistributiviteLaFactorisation';

import LesFractions from './chapters/LesFractions';
import LesReglesDeDivisibilite from './chapters/LesReglesDeDivisibilite';
import LesIdentitesRemarquables from './chapters/LesIdentitesRemarquables';
import LeTriangleDePascal from './chapters/LeTriangleDePascal';
import LesTablesDeMultiplication from './chapters/LesTablesDeMultiplication';
import LesTablesDeMultiplication2 from './chapters/LesTablesDeMultiplication2';

import PresentationDuTriangle from './chapters/triangle/PresentationDuTriangle';
import LaHauteur from './chapters/triangle/LaHauteur';
import LaMediane from './chapters/triangle/LaMediane';
import LaMediatrice from './chapters/triangle/LaMediatrice';
import LaBissectrice from './chapters/triangle/LaBissectrice';
import LoiDesSinus from './chapters/triangle/LoiDesSinus';
import LoiDesCosinus from './chapters/triangle/LoiDesCosinus';


const getElementaryCalculusChapters = () => {

    var k = 0;

    return [     
        {
            title: 'Bases du calcul'
        }, 
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
        },
        {
            title: 'La géométrie du triangle'
        },
        {
            id: k++,
            component: <PresentationDuTriangle />,
            title: 'Présentation du triangle',
            metaContent: 'La présentation du triangle (différents types de triangle).',
            relativePath: '/presentation-du-triangle'
        },  
        {
            id: k++,
            component: <LaHauteur />,
            title: 'La hauteur du triangle',
            metaContent: 'La hauteur du triangle : définition et concourance.',
            relativePath: '/la-hauteur-du-triangle'
        },  
        {
            id: k++,
            component: <LaMediane />,
            title: 'La médiane du triangle',
            metaContent: 'La médiane du triangle : définition et concourance.',
            relativePath: '/la-mediane-du-triangle'
        },
        {
            id: k++,
            component: <LaMediatrice/>,
            title: 'La mediatrice du triangle',
            metaContent: 'La mediatrice du triangle : définition et concourance.',
            relativePath: '/la-mediatrice-du-triangle'
        },
        {
            id: k++,
            component: <LaBissectrice />,
            title: 'La bissectrice du triangle',
            metaContent: 'La mediatrice du triangle : définition et concourance.',
            relativePath: '/la-bissectrice-du-triangle'
        },
        {
            id: k++,
            component: <LoiDesSinus />,
            title: 'La loi des sinus',
            metaContent: 'La loi des sinus : définition et démonstration.',
            relativePath: '/loi-des-sinus'
        },
        {
            id: k++,
            component: <LoiDesCosinus />,
            title: 'La loi des cosinus',
            metaContent: 'La loi des cosinus : définition et démonstration.',
            relativePath: '/loi-des-cosinus'
        }
    ];
}

export default getElementaryCalculusChapters;