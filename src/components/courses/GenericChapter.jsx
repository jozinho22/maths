import React from 'react';
import { Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import LoadingContext from '../context/LoadingContext';
import CustomHelmet from '../immutable/seo/CustomHelmet';
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
            {/* <CustomHelmet title={chapter.title} metaContent={chapter.metaContent} relativePath={chapter.relativePath}/> */}
               
            <div className="FlexButton">
                <NavLink to={`/cours/${courseItem.relativePath}`}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au sommaire
                    </Button> 
                </NavLink>
            </div> 
                     
            <p className="MainTitle">{chapter.title}</p>
    
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />
        
            {/* <p className="Title">{title} {count > 0 ? "(" + count + ")" : ''}</p> */}
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