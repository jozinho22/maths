import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import ChapterTableOfContents from './ChapterTableOfContents';
import LoadingContext from '../context/LoadingContext';

import './GenericCourse.css';
import GenericChapter from './GenericChapter';

const GenericCourse = ({title, chapters}) => {

    /* -1 -> Sommaire, n >= 0 -> chapitres */
    const [count, setCount] = React.useState(0);

    const {updateIsLoadingChapter} = React.useContext(LoadingContext);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        updateIsLoadingChapter(true);
    }, [count]);

    console.log(count)

    return (
        <>
            {
                count > 0 ? 
                    <Button className="DefaultButton GreenButton" onClick={() => setCount(0)}>
                        Retour au sommaire
                    </Button> 
                        : <></>
            }
            {
                count > 0 ?
                    <NavigationButtons 
                        chapters={chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
            <p className="Title">{title} {count > 0 ? "(" + count + ")" : ''}</p>
            <Container className="CoursesContainer"> 
                {
                    count === 0 ?
                        <ChapterTableOfContents chapters={chapters} setCount={setCount} />
                            : <GenericChapter name={chapters[count - 1].name} component={chapters[count - 1].component} />
                }                  
            </Container>
            {
                count > 0 ?
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