import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const Presentation = () => {

    var seriesGen = "\\( \\forall n \\in \\mathbb{N}, \\enspace S_n = u_0 + u_1 + u_2  \\enspace + ... \\enspace  +  \\enspace u_n = \\sum_{k=0}^n u_k \\)";
   
    return  <>
                <p>Les séries numériques sont des sommes de termes d'une suite <MathJaxInline toShow={"$(u_n)_{n \\in \\mathbb{N}}$"} />.</p>

                <p>À une suite <MathJaxInline toShow={"$(u_n) \\in \\mathbb{K}^{\\mathbb{N}} $"} />, de nombres réels ou complexes, on lui associe la suite <MathJaxInline toShow={"$(S_n)_{n \\in \\mathbb{N}} $"} /> définie par :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={seriesGen} />  
                </Container>  

                <p>On appelle la suite <MathJaxInline toShow={"$(S_n)$"} /> la série de terme général <MathJaxInline toShow={"$u_n$"} />.</p>   
                <p>Pour un <MathJaxInline toShow={"$n$"} /> fixé, <MathJaxInline toShow={"$(S_n)$"} /> s'appelle la somme partielle de la série <MathJaxInline toShow={"$ \\sum u_n$"} />.</p>
                
                <p>Il existe de nombreuses séries célèbres comme <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/somme-des-n-plus-1-premiers-entiers`} external>la somme des (n+1) premiers entiers</Link>, <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.SEQUENCES}/somme-des-n-plus-1-premieres-puissances-de-n`} external>la somme des (n+1) premières puissances de n</Link>, la série harmonique...etc.</p>
            </>
}

export default Presentation;