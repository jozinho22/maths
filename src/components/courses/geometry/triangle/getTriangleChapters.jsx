import Presentation from '../../elementary-calculus/chapters/triangle/Presentation';
import LaHauteur from '../../elementary-calculus/chapters/triangle/LaHauteur';
import LaMediane from '../../elementary-calculus/chapters/triangle/LaMediane';
import LaMediatrice from '../../elementary-calculus/chapters/triangle/LaMediatrice';
import LaBissectrice from '../../elementary-calculus/chapters/triangle/LaBissectrice';
import LoiDesSinus from '../../elementary-calculus/chapters/triangle/LoiDesSinus';
import LoiDesCosinus from '../../elementary-calculus/chapters/triangle/LoiDesCosinus';

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