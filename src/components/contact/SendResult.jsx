import React from 'react';
import { Button } from 'react-bootstrap';
import Home from '../home/Home';
import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import AppContext from '../context/AppContext';
import { ContactContext } from './Contact';

const SendResult = () => {

    const {success, error} = React.useContext(ContactContext);

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
                    href="/" >
                    Retour au lobby
                </Button>
            </div>    
        );
}

export default SendResult;