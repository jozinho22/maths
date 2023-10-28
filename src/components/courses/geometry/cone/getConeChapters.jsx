import LaSurface from "./chapters/LaSurface";
import LeVolume from "./chapters/LeVolume";


const getConeChapters = () => {

    var k = 0;

    return [
        {
            id: k++,
            component: <LaSurface />,
            title: 'La surface du cône',
            metaContent: 'La surface du cône : calcul par intégration',
            relativePath: '/la-surface'
        },  
        {
            id: k++,
            component: <LeVolume />,
            title: 'Le volume du cône',
            metaContent: 'Le volume du cône : calcul par intégration',
            relativePath: '/le-volume'
        }
    ];
}

export default getConeChapters;