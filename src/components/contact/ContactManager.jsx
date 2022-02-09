import React from 'react';
import SendResult from './SendResult';
import CustomSpinner from '../general-content/CustomSpinner';

import CustomLogger from '../general-content/CustomLogger'
const ContactManager = ({success, isLoading, error, setComponent, children}) => {

    CustomLogger('success', success, 'ContactManager')
    CustomLogger('error', error, 'ContactManager')
    CustomLogger('isLoading', isLoading, 'ContactManager')

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