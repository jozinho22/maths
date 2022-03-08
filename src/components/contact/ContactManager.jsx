import React from 'react';
import SendResult from './SendResult';
import CustomSpinner from '../general-content/CustomSpinner';
import { ContactContext } from './Contact';

const ContactManager = ({children}) => {
    
    const {success, isLoading, error} = React.useContext(ContactContext);

    return (
                isLoading ?
                    <CustomSpinner /> : 
                        success || error ?
                            <SendResult /> :  
                                    children
            );
}
 
export default ContactManager;