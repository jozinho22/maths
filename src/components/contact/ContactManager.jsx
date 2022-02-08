import React from 'react';
import SendSuccess from './SendSuccess';
import CustomSpinner from '../general-content/CustomSpinner';

const ContactManager = ({success, isLoading, children}) => {

    return (
                success ?
                    <SendSuccess /> :   
                        isLoading ?
                            <CustomSpinner /> :  
                                children
            );
}
 
export default ContactManager;