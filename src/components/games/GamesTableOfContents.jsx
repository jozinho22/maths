import { Container, Row, Col } from 'react-bootstrap';
import Link from '../immutable/nav/Link';

const GamesTableOfContents = ( {gameItems} ) => {

    return (
        <>
            <p className="Title">Tous les jeux</p>
            <Row>
                {
                    gameItems.map(gameItem => (
                        <Container  key={gameItem.id} className="TableOfContentsButtonContainer">
                            <Col xs={12} md={12}>
                                <div key={gameItem.id} className="TableOfContentsLink" >
                                    <Link link={`jeux/${gameItem.relativePath}`} internalLink={true} >
                                        {gameItem.title}
                                    </Link>
                                </div>
                            </Col>
                        </Container>
                    ))
                }
            </Row>
        </>
    )

}

export default GamesTableOfContents;