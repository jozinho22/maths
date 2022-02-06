import { Container, Spinner } from 'react-bootstrap';

const CustomSpinner = ({hidden}) => {

    var hiddenClass = "Hidden";

    return (
        <Container className="RelativeContainer">
            <div className={`LoadingSpinner ${hidden ? hiddenClass: ''}`}>
                <p>Loading...</p>
                <Spinner animation="border" />
            </div> 
        </Container>
    );
}

export default CustomSpinner;