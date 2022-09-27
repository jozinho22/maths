import GenericTableOfContents from '../immutable/GenericTableOfContents';

const CoursesTableOfContents = ( {courseItems} ) => {

    var prefix = 'cours';
    var title = 'Tous les cours';

    return (
        <>
            <GenericTableOfContents items={courseItems} prefix={prefix} title={title} />
        </>
    )

}

export default CoursesTableOfContents;