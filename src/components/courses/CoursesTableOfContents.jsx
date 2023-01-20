import GenericTableOfContents from '../immutable/GenericTableOfContents';
import { Helmet } from 'react-helmet-async';

const CoursesTableOfContents = ( {courseItems} ) => {

    var prefix = 'cours';
    var title = 'Tous les cours';
    var metaContent = "Tous les cours du site (le produit en croix, le théorème de Pythagore, le nombre d'or...etc";

    return (
        <>
            <Helmet>
                <title>
                    {title}
                </title>
                <meta name="description" content={metaContent} />
            </Helmet>
            <GenericTableOfContents items={courseItems} prefix={prefix} title={title} />
        </>
    )

}

export default CoursesTableOfContents;