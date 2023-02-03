import AspectDesFonctionsUsuelles from './chapters/AspectDesFonctionsUsuelles';

const getUsualFunctionsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <AspectDesFonctionsUsuelles />,
            title: 'Aspect des fonctions usuelles',
            relativePath: 'aspect-des-fonctions-usuelles'
        }
    ];
}

export default getUsualFunctionsChapters;