import { Container } from 'react-bootstrap';

const LevelsTableOfContents = ( {title, levels, launchGame} ) => {

    return (
        <>
            {title ? <p className="MainTitle">{title}</p> : <></>}
            <Container className="TableOfContents">
                {
                    levels.map(level => (     
                        <div key={level.id} className="TableOfContentsLink" onClick={() => launchGame(level.id)} >
                            <div className="Clickable">
                                <p><u>Niveau :</u> {level.title}</p>
                            </div>
                        </div>    
                    ))
                }
            </Container>
        </>
    )

}

export default LevelsTableOfContents;