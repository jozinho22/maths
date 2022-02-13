import { Container } from 'react-bootstrap';

const Presentation = () => {
    var jsLink = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
    
    return (
        <>
            <p>
                Il existe de nombreux langages de programmation différents.
                {"\n"}
                Pour l'exemple, nous étudierons avec un langage bien connu, le <a href={jsLink} target="_blank">javascript</a>.
            </p> 
        </>
    )

}

export default Presentation;