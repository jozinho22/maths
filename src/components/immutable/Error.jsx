import { Button } from 'react-bootstrap';

const Error = () => {
    return (
        <div className={"Error"}>
            <p className="MainTitle">Erreur...</p>
            <Button className="DefaultButton" href="/">
                Retour au lobby
            </Button>
        </div> 
    );
}

export default Error;