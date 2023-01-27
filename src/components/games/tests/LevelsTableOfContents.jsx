import { Container, Button } from 'react-bootstrap';

const LevelsTableOfContents = ( {title, levels, launchGame} ) => {

    return (
        <>
            {title ? <p className="MainTitle">{title}</p> : <></>}
            <Container className="GamesContainer">
                {
                    levels.map(level => (
                        <div key={level.id}>
                            <Button   
                                className={`${level.bStyle}Button DefaultButton LargeButton`}
                                onClick={() => launchGame(level.id)}>
                                Niveau : {level.title}
                            </Button>
                        </div>
                    ))
                }
            </Container>
        </>
    )

}

export default LevelsTableOfContents;