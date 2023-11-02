import Resolution from './chapters/Resolution';
import RelationEntreCoefficientsEtRacines from './chapters/RelationEntreCoefficientsEtRacines';
import Aspect from './chapters/Aspect';
import TableauxDeSignesEtDeVariationsExemple from './chapters/TableauxDeSignesEtDeVariationsExemple';
import TableauxDeSignesEtDeVariationsCasGeneral from './chapters/TableauxDeSignesEtDeVariationsCasGeneral';
import DecompositionDUnInverseDePolynomeEnElementsSimples from './chapters/DecompositionDUnInverseDePolynomeEnElementsSimples';

const getEquationsSecondDegreeChapters = () => {

    var k = 0;

    return [    
        {
            title: 'Équations'
        },   
        {
            id: k++,
            component: <Resolution />,
            title: 'Résolution d\'équations',
            metaContent: 'Résolution d\'équations du second degré : explications.',
            relativePath: '/resolution'
        },
        {
            id: k++,
            component: <RelationEntreCoefficientsEtRacines />,
            title: 'Relation entre coefficients et racines',
            metaContent: 'La relation qu\'il existe entre les coefficients et les racines du pôlynome.',
            relativePath: '/relation-entre-coefficients-et-racines'
        },
        {
            id: k++,
            component: <Aspect />,
            title: 'Aspect des équations',
            metaContent: 'Aspect des équations du second degré.',
            relativePath: '/aspect'
        },
        {
            title: 'Tableaux de signes et de variations'
        }, 
        {
            id: k++,
            component: <TableauxDeSignesEtDeVariationsExemple />,
            title: 'Tableaux de signes et de variations : exemple',
            metaContent: 'Tableaux de signes et de variations : exemple.',
            relativePath: '/tableaux-de-signes-et-de-variations-exemple'
        },
        {
            id: k++,
            component: <TableauxDeSignesEtDeVariationsCasGeneral />,
            title: 'Tableaux de signes et de variations : cas général',
            metaContent: 'Tableaux de signes et de variations : cas général.',
            relativePath: '/tableaux-de-signes-et-de-variations-cas-general'
        },
        {
            title: 'Décomposition en éléments simples'
        }, 
        {
            id: k++,
            component: <DecompositionDUnInverseDePolynomeEnElementsSimples />,
            title: 'Décomposition d\'un inverse de polynôme en éléments simples',
            metaContent: 'Décomposition d\'un inverse de polynôme en éléments simples.',
            relativePath: '/decomposition-d-un-inverse-de-polynome-en-elements-simples'
        }
    ];
}

export default getEquationsSecondDegreeChapters;