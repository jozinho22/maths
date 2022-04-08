import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import ChapterTableOfContents from './ChapterTableOfContents';
import LoadingContext from '../context/LoadingContext';

import './GenericCourse.css';
import GenericChapter from './GenericChapter';

const GenericCourse = ({title, chapters}) => {

    /* -1 -> Sommaire, n >= 0 -> chapitres */
    const [count, setCount] = React.useState(-1);

    const {updateIsLoadingChapter} = React.useContext(LoadingContext);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        updateIsLoadingChapter(true);
    }, [count]);

    return (
        <>
            {
                count !== -1 ? 
                    <Button className="DefaultButton GreenButton" onClick={() => setCount(-1)}>
                        Retour au sommaire
                    </Button> 
                        : <></>
            }
            {
                count >= 0 ?
                    <NavigationButtons 
                        chapters={chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
            <p className="Title">{title} {count >= 0 ? "(" + (count + 1) + ")" : ''}</p>
            <Container className="CoursesContainer"> 
                {
                    count < 0 ?
                        <ChapterTableOfContents chapters={chapters} setCount={setCount} />
                            : <GenericChapter name={chapters[count].name} component={chapters[count].component} />
                }                  
            </Container>
            {
                count >= 0 ?
                    <NavigationButtons 
                        chapters={chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
        </>
    );
}

export default GenericCourse;