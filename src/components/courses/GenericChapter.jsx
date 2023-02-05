import React from 'react';
import { Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import LoadingContext from '../context/LoadingContext';
import CustomHelmet from '../immutable/seo/CustomHelmet';
import HiddenTitle from '../immutable/seo/HiddenTitle';
import { NavLink } from 'react-router-dom';
import './GenericChapter.css';

const GenericChapter = ( {chapter, courseItem} ) => {

    const {updateIsLoading} = React.useContext(LoadingContext);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        updateIsLoading(true);
    }, [updateIsLoading]);

    return (
        <>
            <CustomHelmet title={chapter.title} metaContent={chapter.metaContent} relativePath={chapter.relativePath}/>
            <HiddenTitle title={chapter.hiddenTitle} />  
            <div className="FlexButton">
                <NavLink to={`/cours/${courseItem.relativePath}`}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire des chapitres
                    </Button> 
                </NavLink>
            </div> 
                     
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />

            <p className="MainTitle">{chapter.title}</p>
            <div className="CoursesContainer">
                {chapter.component}          
            </div>
                   
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />      
        </>
    );
}

export default GenericChapter;