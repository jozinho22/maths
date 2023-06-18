import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Link from '../../../immutable/nav/Link';
import pathBuilder from '../../../helpers/pathBuilder';
import PagesConstants from '../../../immutable/nav/PagesConstants';

import CoursesConstants from '../../helpers/CoursesConstants';

const LesOperationsDeBase = () => {

    var equPremierDeg = "\\(f(x) = ax + b\\)";
   
    return  <>
                <p>
                    Les équations (par extensions les inéquations) nous permettent d'avoir une expression contenant des variables.
                    {"\n"} Par la suite, nous allons pouvoir résoudre ces équations en isolant une ou plusieurs variables.
                    {"\n"} On appelle cependant équation du premier degré, une équation ne comprenant qu'une seule variable, généralement <MathJaxInline toShow={"$x$"} />, sans autre complexité (exposant, racine carrée...etc).
                </p>
                
            </>
}

export default LesOperationsDeBase;