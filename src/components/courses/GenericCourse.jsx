import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import TableOfContents from './TableOfContents';
import LoadingContext from '../context/LoadingContext';

import './GenericCourse.css';

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
                        <TableOfContents chapters={chapters} setCount={setCount} />
                            :  chapters[count].component
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