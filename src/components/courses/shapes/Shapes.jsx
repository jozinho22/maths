import React from 'react';
import { Container } from 'react-bootstrap';
import getChapters from './chapters/getChapters';
import NavigationButtons from '../NavigationButtons';

import '../Courses.css';
import './Shapes.css';

const Shapes = () => {

    var chapters = getChapters();

    const [count, setCount] = React.useState(0);

    window.scrollTo(0, 0);

    return (
        <>
            <p className="Title">Les formes</p>
            <Container className="CoursesContainer">   
                {chapters[count].component}   
            </Container>
            <p className="TextureCopyRight">Textures : Copyright &copy; <a href="http://unsplash.com" target="_blank">unsplash.com</a></p>           
            <NavigationButtons 
                chapters={chapters}
                count={count}
                setCount={setCount} />
        </>
    )

}

export default Shapes;