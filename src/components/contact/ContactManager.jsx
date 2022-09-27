import React from 'react';
import SendResult from './SendResult';
import BlurryingSpinner from '../immutable/spinners/BlurryingSpinner';
import { ContactContext } from './Contact';

const ContactManager = ({children}) => {
    
    const {success, isLoading, error} = React.useContext(ContactContext);

    return (
                isLoading ?
                    <BlurryingSpinner /> : 
                        success || error ?
                            <SendResult /> :  
                                    children
            );
}
 
export default ContactManager;