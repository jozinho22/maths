import { Container, Button } from 'react-bootstrap';

import LesBoucles from './LesBoucles';
import './ProgrammationBasics.css';

const Code = () => {

    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    var k = 0;
    var chapters = [
        {
            id: k++,
            step: 'les-boucles',
            name: 'Les boucles'
        }
    ]

    return (
            <>
                <p className="Title">Bases de la programmation</p>
                <Container className="ProgrammationBasicsContainer">   
                    <Container className="ChaptersMenuContainer">
                    {
                        chapters.map(chapter => (
                            <a href={`#${chapter.step}`}>
                                <Button key={chapter.id}
                                    className={`DefaultButton InColumnButton GreenButton`} >
                                    {chapter.name}
                                </Button>
                            </a>
                        ))
                    }
                    </Container>      
                    <p>
                        Il existe de nombreux langages de programmation différents.
                        {"\n"}
                        Pour l'exemple, nous étudierons avec un langage bien connu, le <a href={jsLink} target="_blank">javascript</a>.
                    </p> 
                    <LesBoucles />                   
                    
                    <a href={jsLink} target="_blank">
                        La documentation complète de javascript ici
                    </a>
                </Container>
            </>
            );

}

export default Code;