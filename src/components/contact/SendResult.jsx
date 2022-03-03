import { Button } from 'react-bootstrap';
import Home from '../home/Home';
import { GiCheckMark , GiCrossMark} from 'react-icons/gi';

const SendResult = ({ success, error, setComponent }) => {

    return (
            <div className="SendResult">
                {
                    success ? 
                        <p>Merci pour le message<GiCheckMark className="CheckIcon Icon InlineIcon" /></p> 
                            :   error ?
                                    <p>Une erreur est survenue...<GiCrossMark className="WrongIcon Icon" /></p>
                                        :   <></>
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