import React from 'react';
import { Container, Button } from 'react-bootstrap';
import NavigationButtons from './NavigationButtons';
import ChaptersTableOfContents from './ChaptersTableOfContents';
import LoadingContext from '../context/LoadingContext';

import './GenericCourse.css';
import GenericChapter from './GenericChapter';
import CustomHelmet from '../immutable/seo/CustomHelmet';

const GenericCourse = ({title, chapters, state}) => {

    /* 0 -> Sommaire, n > 0 -> chapitres */
    const [count, setCount] = React.useState(0);

    const {updateIsLoading} = React.useContext(LoadingContext);
    
    React.useEffect(() => {
        window.scrollTo(0, 0);
        updateIsLoading(true);
    }, [count, updateIsLoading]);

    return (
        <>
            <CustomHelmet title={state.title} metaContent={state.metaContent} relativePath={state.relativePath}/>
            {
                count > 0 ? 
                    <div className="FlexButton">
                        <Button className="DefaultButton GreenButton" onClick={() => setCount(0)}>
                            Retour au sommaire
                        </Button> 
                    </div>
                        : <></>
            }
            <p className="MainTitle">{title}</p>
            {
                count > 0 ?
                    <NavigationButtons 
                        chapters={chapters}
                        count={count}
                        setCount={setCount} />
                        : ''
            }
            {/* <p className="Title">{title} {count > 0 ? "(" + count + ")" : ''}</p> */}
             
            {
                count === 0 ?
                    <ChaptersTableOfContents chapters={chapters} setCount={setCount} />
                        :   <Container className="CoursesContainer">
                                <GenericChapter name={chapters[count - 1].name} component={chapters[count - 1].component} count={count} />
                            </Container>
            }                  
            
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