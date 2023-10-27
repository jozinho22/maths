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

const GenericChapter = ( {chapter, courseItem} ) => {

    const [count, setCount] = React.useState(chapter.id);

    React.useEffect(() => {
        setTimeout(function(){
            window.scrollTo(0, 0)
        }, 2000);

    }, [count]); 

    return (
        <>
            <CustomHelmet title={chapter.title} metaContent={chapter.metaContent} canonicalUrl={`${Constants.WEB_APP_PREFIX}${PagesConstants.PREFIX}${PagesConstants.COURS}${courseItem.relativePath}${chapter.relativePath}`}/>
            
            <div className="FlexButton">
                <NavLink to={pathBuilder(`${PagesConstants.COURS}${courseItem.relativePath}`)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire des chapitres
                    </Button> 
                </NavLink>
            </div> 


            {/* <Button variant="warning" className="printer-button" onClick={printCourse}>
                PDF
            </Button> */}
                     
            <NavigationButtons 
                setCount={setCount}
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />
            
            <Container id="capture">
                <MainTitle title={`Cours ${courseItem.id + 1} : ${courseItem.title}`} />
                <MainSubTitle title={`Chapitre ${chapter.id + 1} : ${chapter.title}`} />
                <div className="CoursesContainer">
                    {chapter.component}        
                </div>
            </Container>  

            <NavigationButtons 
                setCount={setCount}
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} /> 
        </>
    );
}

export default GenericChapter;