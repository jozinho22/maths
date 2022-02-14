import React from 'react';
import SendResult from './SendResult';
import CustomSpinner from '../general-content/CustomSpinner';

const ContactManager = ({success, isLoading, error, setComponent, children}) => {

    return (
                isLoading ?
                    <CustomSpinner /> : 
                        success || error ?
                            <SendResult 
                                success={success}
                                error={error}
                                setComponent={setComponent} /> :  
                                    children
            );
}
 
export default ContactManager;