import { Container } from 'react-bootstrap';

import './Home.css';

const Home = () => {

    return (
        <Container className="RelativeContainer">
            <h1> Bienvenue sur le site des maths pour tous !</h1>
            <Container className="HomeContainer">
                <h3>Un site pour faire plein de choses :</h3>
                <h3>- réviser ses tables</h3>
                <h3>- apprendre et s'exercer en s'amusant</h3>

            </Container>
 
        </Container>     
    );

}

export default Home;