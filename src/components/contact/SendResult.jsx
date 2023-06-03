import React from 'react';
import { Button } from 'react-bootstrap';
import { Check2, X } from 'react-bootstrap-icons';
import { ContactContext } from './Contact';

const SendResult = () => {

    const {success, error} = React.useContext(ContactContext);

    return (
            <div className="SendResult">
                {
                    success ? 
                        <p>Merci pour le message<Check2 className="CheckIcon Icon InlineIcon" /></p> 
                            :   error ?
                                    <p>Une erreur est survenue...<X className="WrongIcon Icon" /></p>
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