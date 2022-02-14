import { Container } from 'react-bootstrap';

const Code = ( {children} ) => {

    return(
            <Container className="CodeContainer">
                <div className="Code">{children}</div>
            </Container>

    );
}

export default Code;