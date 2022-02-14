import { Button } from 'react-bootstrap';
import Home from '../home/Home';

const SendResult = ({ success, error, setComponent }) => {
    console.log(success)
    return (
            <div className="SendResult">
                {
                    success ? 
                        <p>Merci pour le message</p> :
                            error ?
                                <p>Une erreur est survenue...</p> :
                                    <></>
                }
                <Button 
                    className="DefaultButton"
                    onClick={() => setComponent(<Home />)}>
                    Retour au lobby
                </Button>
            </div>    
        );
}

export default SendResult;