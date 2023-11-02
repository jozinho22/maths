import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const ArgumentDUnComplexe = () => {

    var prop1 = "\\( z = z' \\Longleftrightarrow \\Biggl\\{ \\begin{gather*}  |z| = |z'| \\\\  arg(z) = arg(z') \\end{gather*} \\)"; 
    var prop1bis = "\\( arg(z) = arg(z') \\Longleftrightarrow OM \\enspace  et \\enspace OM' \\enspace colin\\acute{e}aires  \\)"; 
    var prop2 = "\\( z \\in \\mathbb{R^*} \\Longleftrightarrow arg(z)  = k\\pi \\)"; 
    var prop21 = "\\( z \\in \\mathbb{R_+^*} \\Longleftrightarrow arg(z)  = 2k\\pi \\)"; 
    var prop22 = "\\( z \\in \\mathbb{R_-^*} \\Longleftrightarrow arg(z)  = \\pi  + 2k\\pi \\)"; 
    var prop23 = "\\( z \\in \\mathbb{iR^*} \\Longleftrightarrow arg(z)  = \\frac{\\pi}{2} + k\\pi \\)"; 

    var prop3 = "\\( arg(\\overline{z}) = -arg(z) \\)"; 

    var prop4 = "\\( arg(-z) = \\pi + arg(z) \\)"; 

    var prop5 = "\\( zz' = |zz'| \\left[ cos(\\theta + \\theta') +  isin(\\theta + \\theta') \\right] \\)"; 
    var prop5bis = "\\( arg(zz') = arg(z) + arg(z') \\)"; 
    var prop5Demo = "\\(  \\Biggl\\{ \\begin{gather*} z = |z|.\\bigl[ cos(\\theta) +  isin(\\theta) \\bigr] \\\\ z' = |z'|.\\bigl[ cos(\\theta') +  isin(\\theta') \\big] \\end{gather*} \\)"; 
    var prop5Demo2 = "\\(  zz' = |z||z'| \\bigl[ cos(\\theta) + isin(\\theta) \\bigr] \\left[ cos( \\theta') + isin(\\theta') \\right] \\)"; 
    var prop5Demo3 = "\\(  zz' = |zz'| \\Bigl[ \\left(cos(\\theta)cos(\\theta') -sin(\\theta)sin(\\theta') \\right) + i \\left( cos(\\theta)sin(\\theta') + sin(\\theta)cos(\\theta') \\right) \\Bigr]  \\)"; 
    var prop5Demo4 = "\\(  zz' = |zz'| \\left[ cos(\\theta + \\theta') + i. sin(\\theta + \\theta') \\right]  \\)"; 


    var prop6 = "\\( arg\\left(\\frac{1}{z}\\right) = -arg(z) \\)"; 
    var prop6Demo = "\\( z.\\frac{1}{z} = 1 \\)"; 
    var prop6Demo2 = "\\( arg\\left(z.\\frac{1}{z}\\right) = arg(1) \\)"; 
    var prop6Demo3 = "\\( arg(z) + arg\\left(\\frac{1}{z}\\right) = 0 \\)"; 
    var prop6Demo4 = "\\( arg\\left(\\frac{1}{z}\\right) = -arg(z) \\)"; 

    var prop7 = "\\( arg\\left(\\frac{z}{z'}\\right) = arg(z) -arg(z) \\)"; 
    var prop7Demo = "\\( arg\\left(z.\\frac{1}{z}\\right) = arg(z) + arg\\left(\\frac{1}{z}\\right) \\)"; 
    var prop7Demo2 = "\\( arg\\left(z.\\frac{1}{z}\\right) = arg(z) -arg(z) \\)"; 

    var prop8 = "\\( arg(z^n) = n.arg(z), \\enspace avec \\enspace(n \\in \\mathbb{Z}) \\)"; 

    return  <>
                <p>Soit un nombre complexe <MathJaxInline toShow={"$  z = |z| . \\left[cos(\\theta) + i sin(\\theta ) \\right] $"} />.</p>
                <p>Soit <MathJaxInline toShow={"$  z, z' $"} /> deux complexes d'argument respectif <MathJaxInline toShow={"$  \\theta, \\theta' $"} />.</p>

                <Title1 title={"Propriétés de l'argument"} />
                <p>L'argument de <MathJaxInline toShow={"$  z  $"} /> est exprimé à <MathJaxInline toShow={"$ 2k\\pi  $"} /> près.</p>
                <Title2 title={"Propriété 1"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop1} />
                </Container>
                <p>De même :</p>
                <MathJaxDisplay toShow={prop1bis} />

                <Title2 title={"Propriété 2"} />
                <MathJaxDisplay toShow={prop2} demo />
                <MathJaxDisplay toShow={prop21} demo />
                <MathJaxDisplay toShow={prop22} demo />
                <MathJaxDisplay toShow={prop23} demo />


                <Title2 title={"Propriété 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop3} />
                </Container>

                <Title2 title={"Propriété 4"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop4} />
                </Container>

                <Title2 title={"Propriété 5 : multuplication de deux complexes"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop5} />
                    <MathJaxDisplay toShow={prop5bis} />
                </Container>
                <p>Démonstration :</p>
                <MathJaxDisplay toShow={prop5Demo} demo />
                <MathJaxDisplay toShow={prop5Demo2} demo />
                <MathJaxDisplay toShow={prop5Demo3} demo />
                <MathJaxDisplay toShow={prop5Demo4} demo />

                <Title2 title={"Propriété 6 : inverse de l'argument"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop6} />
                </Container>
                <p>Démonstration :</p>
                <p>Soit <MathJaxInline toShow={"$  z \\in \\mathbb{C^*} $"} />.</p>
                <MathJaxDisplay toShow={prop6Demo} demo />
                <MathJaxDisplay toShow={prop6Demo2} demo />
                <MathJaxDisplay toShow={prop6Demo3} demo />
                <MathJaxDisplay toShow={prop6Demo4} demo />

                <Title2 title={"Propriété 7 : argument d'un quotient"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop7} />
                </Container>
                <MathJaxDisplay toShow={prop7Demo} demo />
                <MathJaxDisplay toShow={prop7Demo2} demo />
                

                <Title2 title={"Propriété 7 : argument d'une puissance"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop8} />
                </Container>   
                <p>Remarque : Toutes formules fonctionnent de la même manière que celle du logarithme népérien.</p>
            </>
}

export default ArgumentDUnComplexe;