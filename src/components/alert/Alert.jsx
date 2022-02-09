import { Container } from "react-bootstrap";

import './Alert.css';

const Alert = ({show, message, component}) => {
 
    return (
        <>
            {show === true ?
                <div className={`${component}Alert DefaultAlert`}>{message}</div> :
                    <></>
            }
        </>
    );
}

export default Alert;