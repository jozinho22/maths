import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CustomHelmet from '../immutable/seo/CustomHelmet';

const ChaptersTableOfContents = ( {courseItem} ) => {

    return (
        <>
            <CustomHelmet title={courseItem.title} metaContent={courseItem.metaContent} relativePath={courseItem.relativePath}/>

            <p className="MainTitle">{courseItem.title}</p>
            <Container className="TableOfContents">
                {
                    courseItem.chapters.map(chapter => (
                        <NavLink 
                            key={chapter.id} 
                            to={`/cours/${courseItem.relativePath}/${courseItem.chapters[chapter.id].relativePath}`} 
                            className="TableOfContentsLink" >
                                <p><u>chapitre {chapter.id + 1}</u> - {chapter.name}</p>
                        </NavLink>
                    ))
                }
            </Container>
        </>
    )

}

export default ChaptersTableOfContents;