import React from 'react';
import { Container } from 'react-bootstrap';
import getChapters from './getChapters';
import NavigationButtons from '../NavigationButtons';

import '../Courses.css';
import './Shapes.css';

const Shapes = () => {

    var chapters = getChapters();

    const [count, setCount] = React.useState(0);

    return (
        <>
            <p className="Title">Les formes</p>
            <Container className="CoursesContainer">   
                {chapters[count].component}             
            </Container>
            <NavigationButtons 
                chapters={chapters}
                count={count}
                setCount={setCount} />
        </>
    )

}

export default Shapes;