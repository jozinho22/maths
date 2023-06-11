import { Container, Button } from 'react-bootstrap';
import Constants from '../immutable/Constants';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import HiddenTitle from '../immutable/seo/HiddenTitle';
import pathBuilder from '../helpers/pathBuilder';

import { NavLink } from 'react-router-dom';
import PagesConstants from '../immutable/nav/PagesConstants';
import pathBuilder from '../helpers/pathBuilder';

const ChaptersTableOfContents = ( {courseItem} ) => {

    return (
        <>
            <CustomHelmet title={courseItem.title} metaContent={courseItem.metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.COURS}${courseItem.relativePath}`}/>
            <HiddenTitle title={courseItem.hiddenTitle} />
            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.COURS)} >
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
                            to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${courseItem.chapters[chapter.id].relativePath}`)} 
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