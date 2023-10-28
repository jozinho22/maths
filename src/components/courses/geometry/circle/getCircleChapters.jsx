import LaSurface from "./chapters/LaSurface";
import LePerimetre from "./chapters/LePerimetre";


const getCircleChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LePerimetre />,
            title: 'Le périmètre du cercle',
            metaContent: 'Le périmètre du cercle : ',
            relativePath: '/le-perimetre'
        },  
        {
            id: k++,
            component: <LaSurface />,
            title: 'La surface du cercle',
            metaContent: 'La surface du cercle : ',
            relativePath: '/la-surface'
        }
    ];
}

export default getCircleChapters;