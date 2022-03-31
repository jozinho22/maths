import React from 'react';
import SendResult from './SendResult';
import BasicSpinner from '../immutable/spinners/BasicSpinner';
import { ContactContext } from './Contact';

const ContactManager = ({children}) => {
    
    const {success, isLoading, error} = React.useContext(ContactContext);

    return (
                isLoading ?
                    <BasicSpinner /> : 
                        success || error ?
                            <SendResult /> :  
                                    children
            );
}
 
export default ContactManager;