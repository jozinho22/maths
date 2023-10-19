import { Container, Button } from 'react-bootstrap';
import Constants from '../immutable/Constants';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import pathBuilder from '../helpers/pathBuilder';

import { NavLink } from 'react-router-dom';
import PagesConstants from '../immutable/nav/PagesConstants';
import MainTitle from '../immutable/MainTitle';

const UnderChaptersTableOfContents = ( {courseItem, chapter} ) => {

    return (
        <>
            <CustomHelmet title={courseItem.title} metaContent={courseItem.metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`}/>
            <div className="FlexButton">
                <NavLink to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)} >
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire aux chapitres
                    </Button> 
                </NavLink>
            </div> 

            <MainTitle title={chapter.title} />
            <Container className="TableOfContents">
                {
                    chapter.underChapters.map(underChapter => (
                        <NavLink 
                            key={underChapter.id} 
                            to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${courseItem.chapters[chapter.id].relativePath}${courseItem.chapters[chapter.id].underChapters[underChapter.id].relativePath}`)} 
                            className="TableOfContentsLink" >
                                <p><u>chapitre {underChapter.id + 1}</u> - {underChapter.title}</p>
                        </NavLink>
                    ))
                }
            </Container>
        </>
    )

}

export default UnderChaptersTableOfContents;