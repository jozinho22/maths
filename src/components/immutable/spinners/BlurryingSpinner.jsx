import { Spinner } from 'react-bootstrap';
import './BlurryingSpinner.css';

const BlurryingSpinner = ( {children} ) => {

    return (
        <div className="BlurryingSpinner"> 
            <p className="MainTitle">Chargement</p>
            <Spinner animation="border" />
            {children}
        </div>
    );
}

export default BlurryingSpinner;