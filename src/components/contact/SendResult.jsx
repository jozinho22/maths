import { Container, Button } from 'react-bootstrap';
import Home from '../home/Home';

const SendResult = ({success, error, setComponent}) => {
    console.log(success)
    return (
            <div className="SendResult">
                {
                    success ? 
                        <p>Votre message a été transmis avec succès</p> :
                            error ?
                                <p>Une erreur est survenue...</p> :
                                    <></>
                }
                <Button 
                    className="BasicButton ReturnButton"
                    onClick={() => setComponent(<Home />)}>
                    Retour au lobby
                </Button>
            </div>    
        );
}

export default SendResult;