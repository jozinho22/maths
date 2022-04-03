import React from 'react';
import { Container } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import TableOfContents from './TableOfContents';
import RefFormulasContext from './context/RefFormulasContext';

import './GenericCourse.css';

const GenericCourse = ({title, chapters}) => {

    /* -1 -> Sommaire, n >= 0 -> chapitres */
    const [count, setCount] = React.useState(-1);

    const [refFormulas, setRefFormulas] = React.useState([]); 

    const refFormulasContext = {
        refFormulas : refFormulas,
        updateRefFormulas: setRefFormulas
    }
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
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
            <p className="Title">{title} {count >= 0 ? "- " + chapters[count].name : ''}</p>
            <Container className="CoursesContainer"> 
                {
                    count < 0 ?
                        <TableOfContents chapters={chapters} setCount={setCount} />
                            :       
                                <RefFormulasContext.Provider value ={refFormulasContext} >
                                    {chapters[count].component}
                                </RefFormulasContext.Provider>          
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