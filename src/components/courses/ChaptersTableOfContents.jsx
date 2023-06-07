import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Constants from '../immutable/Constants';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import HiddenTitle from '../immutable/seo/HiddenTitle';
import pathBuilder from '../helpers/pathBuilder';

const ChaptersTableOfContents = ( {courseItem} ) => {

    return (
        <>
            <CustomHelmet title={courseItem.title} metaContent={courseItem.metaContent} canonicalUrl={`${Constants.WEB_APP_URL}/cours/${courseItem.relativePath}`}/>
            <HiddenTitle title={courseItem.hiddenTitle} />
            <div className="FlexButton">
                <NavLink to={pathBuilder(`/cours`)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire des cours
                    </Button> 
                </NavLink>
            </div> 
            <p className="MainTitle">{courseItem.title}</p>
            <Container className="TableOfContents">
                {
                    courseItem.chapters.map(chapter => (
                        <NavLink 
                            key={chapter.id} 
                            to={pathBuilder(`/cours/${courseItem.relativePath}/${courseItem.chapters[chapter.id].relativePath}`)} 
                            className="TableOfContentsLink" >
                                <p><u>chapitre {chapter.id + 1}</u> - {chapter.title}</p>
                        </NavLink>
                    ))
                }
            </Container>
        </>
    )

}

export default ChaptersTableOfContents;