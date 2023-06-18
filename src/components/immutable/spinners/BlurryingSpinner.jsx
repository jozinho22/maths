import { Spinner } from 'react-bootstrap';
import './BlurryingSpinner.css';
import MainTitle from '../MainTitle';

const BlurryingSpinner = ( {children} ) => {

    return (
        <div className="BlurryingSpinner"> 
            <MainTitle title={"Chargement"} />
            <Spinner animation="border" />
            {children}
        </div>
    );
}

export default BlurryingSpinner;