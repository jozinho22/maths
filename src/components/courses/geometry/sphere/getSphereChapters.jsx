import LaSurface from "./chapters/LaSurface";
import LeVolume from "./chapters/LeVolume";


const getSphereChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LaSurface />,
            title: 'La surface de la sphère',
            metaContent: 'La surface de la sphère : calcul par intégration',
            relativePath: '/la-surface'
        },  
        {
            id: k++,
            component: <LeVolume />,
            title: 'Le volume de la sphère',
            metaContent: 'Le volume de la sphère : calcul par intégration',
            relativePath: '/le-volume'
        }
    ];
}

export default getSphereChapters;