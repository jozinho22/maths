import React from 'react';
import NavigationButtons from './NavigationButtons';
import LoadingContext from '../context/LoadingContext';
import CustomHelmet from '../immutable/seo/CustomHelmet';

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
               
            {/* <div className="FlexButton">
                <Button className="DefaultButton GreenButton" onClick={() => setCount(0)}>
                    Retour au sommaire
                </Button> 
            </div> */}
                     
            <p className="MainTitle">{chapter.title}</p>
    
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />
        
            {/* <p className="Title">{title} {count > 0 ? "(" + count + ")" : ''}</p> */}
             
            {chapter.component}                
            
            <NavigationButtons 
                chapter={chapter}
                chapters={courseItem.chapters} 
                courseRelativePath={courseItem.relativePath} />
                        
        </>
    );
}

export default GenericChapter;