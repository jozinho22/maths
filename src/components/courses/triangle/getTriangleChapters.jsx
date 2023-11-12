import PresentationDuTriangle from './chapters/PresentationDuTriangle';
import LaHauteur from './chapters/LaHauteur';
import LaMediane from './chapters/LaMediane';
import LaMediatrice from './chapters/LaMediatrice';
import LaBissectrice from './chapters/LaBissectrice';
import LoiDesSinus from './chapters/LoiDesSinus';
import LoiDesCosinus from './chapters/LoiDesCosinus';

const getTriangleChapters = () => {

    var k = 0;

    return [     
        {
            title: 'Généralités'
        }, 
        {
            id: k++,
            component: <PresentationDuTriangle />,
            title: 'Présentation du triangle',
            metaContent: 'La présentation du triangle (différents types de triangles).',
            relativePath: '/presentation-du-triangle'
        },  
        {
            title: 'Constructions'
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
            title: 'Relations entre angles et longueurs'
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

export default getTriangleChapters;