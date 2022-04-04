import { Spinner } from 'react-bootstrap';
import './Spinners.css';

const BlurryingSpinner = () => {

    return (
        <div className={"BlurryingSpinner"}> 
            <p>Chargement</p>
            <Spinner animation="border" />
        </div>
    );
}

export default BlurryingSpinner;