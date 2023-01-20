import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import ChaptersTableOfContents from './ChaptersTableOfContents';
import LoadingContext from '../context/LoadingContext';

import './GenericCourse.css';
import GenericChapter from './GenericChapter';
import CustomHelmet from '../immutable/seo/CustomHelmet';

const GenericCourse = ({courseItem}) => {

    console.log(courseItem)
    /* 0 -> Sommaire, n > 0 -> chapitres */
    const [count, setCount] = React.useState(0);

    const {updateIsLoading} = React.useContext(LoadingContext);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        updateIsLoading(true);
    }, [count, updateIsLoading]);

    return (
        <>
            <CustomHelmet title={courseItem.title} metaContent={courseItem.metaContent} relativePath={courseItem.relativePath}/>
            {
                count > 0 ? 
                    <div className="FlexButton">
                        <Button className="DefaultButton GreenButton" onClick={() => setCount(0)}>
                            Retour au sommaire
                        </Button> 
                    </div>
                        : <></>
            }
            <p className="MainTitle">{courseItem.title}</p>
            {
                count > 0 ?
                    <NavigationButtons 
                        chapters={courseItem.chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
            {/* <p className="Title">{title} {count > 0 ? "(" + count + ")" : ''}</p> */}
             
            {
                count === 0 ?
                    <ChaptersTableOfContents chapters={courseItem.chapters} setCount={setCount} />
                        :   <Container className="CoursesContainer">
                                <GenericChapter name={courseItem.chapters[count - 1].name} component={courseItem.chapters[count - 1].component} count={count} />
                            </Container>
            }                  
            
            {
                count > 0 ?
                    <NavigationButtons 
                        chapters={courseItem.chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
        </>
    );
}

export default GenericCourse;