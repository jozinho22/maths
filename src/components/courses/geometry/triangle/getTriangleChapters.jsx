import Presentation from './chapters/Presentation';
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
            id: k++,
            component: <Presentation />,
            title: 'Présentation',
            metaContent: 'La présentation du triangle (différents types de triangle).',
            relativePath: '/presentation'
        },  
        {
            id: k++,
            component: <LaHauteur />,
            title: 'La hauteur du triangle',
            metaContent: 'La hauteur du triangle : définition et concourance.',
            relativePath: '/la-hauteur'
        },  
        {
            id: k++,
            component: <LaMediane />,
            title: 'La médiane du triangle',
            metaContent: 'La médiane du triangle : définition et concourance.',
            relativePath: '/la-mediane'
        },
        {
            id: k++,
            component: <LaMediatrice />,
            title: 'La mediatrice du triangle',
            metaContent: 'La mediatrice du triangle : définition et concourance.',
            relativePath: '/la-mediatrice'
        },
        {
            id: k++,
            component: <LaBissectrice />,
            title: 'La bissectrice du triangle',
            metaContent: 'La mediatrice du triangle : définition et concourance.',
            relativePath: '/la-bissectrice'
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