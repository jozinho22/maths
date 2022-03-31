import { Spinner } from 'react-bootstrap';
import './Spinners.css'

const BasicSpinner = () => {

    return (
        <div className={"LoadingSpinner"}>
            <p>Loading...</p>
            <Spinner animation="border" />
        </div> 
    );
}

export default BasicSpinner;