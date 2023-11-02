import React from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {ChevronLeft, ChevronRight} from 'react-bootstrap-icons'

import pathBuilder from '../../helpers/pathBuilder';

import PagesConstants from '../../immutable/nav/PagesConstants';

const NavigationButtons = ( {setCount, chapter, chapters, courseRelativePath} ) => {

    var width = document.body.offsetWidth;
    var mobile = width < 450; 

    var chaptersLength = chapters.filter(ch => ch.relativePath).length

    return (
        <Row>
            <Col style={{textAlign:"right"}}>
                {
                    chapter.id > 0 ?  
                        <NavLink to={pathBuilder(`${PagesConstants.COURS}${courseRelativePath}${chapters.find(ch => ch.id === (chapter.id - 1)).relativePath}`)} >
                            <Button 
                                className="DefaultButton" 
                                onClick={() => setCount(prevState => prevState - 1)} >
                                { !mobile ? <ChevronLeft className="NavigationIcon" /> : <></> }
                                {
                                    mobile ? 
                                        'Précédent' 
                                            : chapters.find(ch => ch.id === (chapter.id - 1)).title
                                }
                            
                            </Button> 
                        </NavLink>
                            : <></> 
                } 
            </Col>
            <Col className="CenterTitle">
                {chapter.id + 1} / {chaptersLength} 
            </Col>
            <Col style={{textAlign:"left"}}>
                {
                    chapter.id < chaptersLength - 1 ?
                        <NavLink to={pathBuilder(`${PagesConstants.COURS}${courseRelativePath}${chapters.find(ch => ch.id === (chapter.id + 1)).relativePath}`)} >
                            <Button 
                                onClick={() => setCount(prevState => prevState + 1)}
                                className="DefaultButton" >
                                {
                                    mobile ? 
                                        'Suivant' :
                                            chapters.find(ch => ch.id === (chapter.id + 1)).title
                                }
                                { !mobile ? <ChevronRight className="NavigationIcon" /> : <></> }
                            </Button>
                        </NavLink>
                            : <></> 
                }
            </Col>
        </Row>
    );
}

export default NavigationButtons;