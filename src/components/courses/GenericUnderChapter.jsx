import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './helpers/NavigationButtons';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import Constants from '../immutable/Constants';
import { NavLink } from 'react-router-dom';
import MainTitle from '../immutable/MainTitle';

import './GenericChapter.css';
import pathBuilder from '../helpers/pathBuilder';
import PagesConstants from '../immutable/nav/PagesConstants';
import MainSubTitle from '../immutable/MainSubTitle';
import BlurryingSpinner from '../immutable/spinners/BlurryingSpinner';
import AppContext from '../context/AppContext';
/* import printCourse from './helpers/printCourse'; */

const GenericUnderChapter = ( {underChapter, chapter, courseItem} ) => {

    const [count, setCount] = React.useState(underChapter.id);
    const {updateLoc} = React.useContext(AppContext);

    const loc = useLocation()
    React.useEffect(() => {
        updateLoc(loc.pathname);
    }, [loc])

    React.useEffect(() => {
        setTimeout(function(){
            window.scrollTo(0, 0)
        }, 2000);

    }, [count]); 

    return (
        <>
            <CustomHelmet title={underChapter.title} metaContent={underChapter.metaContent} canonicalUrl={`${Constants.WEB_APP_URL}${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}${underChapter.relativePath}`}/>
            
            <div className="FlexButton">
                <NavLink to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire du chapitre
                    </Button> 
                </NavLink>
            </div> 


            {/* <Button variant="warning" className="printer-button" onClick={printCourse}>
                PDF
            </Button> */}
                     
            <NavigationButtons 
                setCount={setCount}
                chapter={underChapter}
                chapters={chapter.underChapters} 
                courseRelativePath={`${courseItem.relativePath}${chapter.relativePath}`} />
            
            <Container id="capture">
                <MainTitle title={`Cours ${courseItem.id + 1} : ${courseItem.title}`} />
                <MainSubTitle title={`Chapitre ${chapter.id + 1} : ${chapter.title}`} />
                <MainSubTitle title={`${underChapter.title}`} />
                <div className="CoursesContainer">
                    {underChapter.component}        
                </div>
            </Container>  

            <NavigationButtons 
                setCount={setCount}
                chapter={underChapter}
                chapters={chapter.underChapters} 
                courseRelativePath={`${courseItem.relativePath}${chapter.relativePath}`} /> 
        </>
    );
}

export default GenericUnderChapter;