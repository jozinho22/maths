import { Container, Spinner } from 'react-bootstrap';
import './Spinners.css';

const BlurryingSpinner = () => {

    return (
        <div className={"BlurryingSpinner"}> 
            <p>Loading...</p>
            <Spinner animation="border" />
        </div>
    );
}

export default BlurryingSpinner;