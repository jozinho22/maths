import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SendSuccess = () => {
    return (
        <Container className="RelativeContainer">
                <div className="LoadingSpinner">
                    <p>Votre message a été transmis avec succès</p>
                    <br></br>
                    <Link 
                        to="/" >
                        <Button className="BasicButton ReturnButton">
                            Retour au lobby
                        </Button>
                    </Link>
                </div> 
        </Container>
    );
}

export default SendSuccess;