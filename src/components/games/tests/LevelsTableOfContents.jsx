import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import PagesConstants from '../../immutable/nav/PagesConstants';
import pathBuilder from '../../helpers/pathBuilder';
import MainTitle from '../../immutable/MainTitle';
import AppContext from '../../context/AppContext';

const LevelsTableOfContents = ( {title, levels, launchGame} ) => {
    
    const {updatePlayMode} = React.useContext(AppContext);

    return (
        <>
            <div className="FlexButton">
                <NavLink to={pathBuilder(PagesConstants.JEUX)} onClick={() => updatePlayMode(false)}>
                    <Button className="DefaultButton GreenButton" >
                        Retour au menu des jeux
                    </Button> 
                </NavLink>
            </div> 
            {title ? <MainTitle title={title} /> : <></>}
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