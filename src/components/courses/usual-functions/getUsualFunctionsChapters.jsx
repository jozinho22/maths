import AspectDesFonctionsUsuelles from './chapters/AspectDesFonctionsUsuelles';

const getUsualFunctionsChapters = () => {

    var k = 0;

    return [      
        {
            id: k++,
            component: <AspectDesFonctionsUsuelles />,
            title: 'Aspect des fonctions usuelles',
            metaContent: 'L\'aspect des fonctions mathématiques usuelles (carrée, cube, racine carréé...etc) dans une repère.',
            hiddenTitle: 'L\'aspect des fonctions mathématiques usuelles dans un repère',
            relativePath: '/aspect-des-fonctions-usuelles'
        }
    ];
}

export default getUsualFunctionsChapters;