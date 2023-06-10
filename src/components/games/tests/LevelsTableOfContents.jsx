import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PagesConstants from '../../immutable/nav/PagesConstants';
import pathBuilder from '../../helpers/pathBuilder';

const LevelsTableOfContents = ( {title, levels, launchGame} ) => {

    return (
        <>
            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.JEUX)} >
                    <Button className="DefaultButton GreenButton" >
                        Tous les jeux
                    </Button> 
                </NavLink>
            </div> 
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