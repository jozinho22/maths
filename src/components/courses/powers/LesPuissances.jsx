import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';

const LesPuissances = () => {

    var txtMillion = "6 fois le nombre 10";
    var million = "\\( 1 \\; 000 \\; 000 =  \\underbrace { 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 }_\\text{" + txtMillion + "} \\)";
    var million2 = "\\(1 \\; 000 \\; 000 = 10^6 \\)";

    var txtPowGen = " a facteurs"
    var powGen = "\\(x^a = \\underbrace{ a \\times a \\times a \\times a ...etc.}_\\text{" + txtPowGen + "} \\)";
    var powGen2 = "\\(x^a = \\prod_{n=1}^n a  \\)";

    var txtThou = "3 fois ";
    var txtHundred = "2 fois ";
    var thouByHundred = "\\( 10^3 \\times 10^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10}_\\text{" + txtHundred+ "} \\)";
    var thouByHundred2 = "\\( 10^3\\times 10^2 = 10^5 \\)";
    var powTimesPow = "\\(x^a.x^b = x^{a+b} \\)";
    
    var xPow0 = "\\( x^n  \\times x^0 = x^{n+0} \\)";
    var xPow02 = "\\( x^n  \\times x^0 = x^{n} \\)";
    var xPow03 = "\\( x^0  = 1 \\)";

    var xTimesInvX = "\\( x \\times {1 \\over x} = 1 \\)";
    var xTimesInvX2 = "\\( x \\times {1 \\over x} = x^0 \\)";
    var xTimesInvX3 = "\\( x^1 \\times x^n = x^0 \\)";
    var xTimesInvX4 = "\\( x^{1 +n} = x^0 \\)";
    var xTimesInvX5 = "\\( 1 + n = 0 \\Leftrightarrow  n = -1 \\)";
    var xTimesInvX7 = "\\(  {1 \\over x} = x ^{-1}  \\)";

    var thouPow2 = "\\( \\big(10^3\\big)^2 = \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "} \\times \\underbrace { 10 \\times 10 \\times 10}_\\text{" + txtThou + "}  \\)";
    var thouPow22 = "\\( \\big(10^3\\big)^2  = 10^6  \\)";
    var powPow = "\\( \\big(x^a\\big)^b = x^{ab} \\)";

    var comp = "\\( {1} \\over {x^3} \\)";
    var comp2 = "\\( \\frac{1}{x^3} = \\big(x^3 \\big)^{-1} \\)";
    var comp3 = "\\( \\frac{1}{x^3} =  x^{-3} \\)";
    var compEx = "\\(  0, \\; 001 = \\frac{1}{1000}  =  10^{-3} \\)";

    var compp = "\\( \\frac{x^4 y^5}{z^3} = {x^4 y^5}{z}^{-3} \\)";

    var compInv = "\\( \\frac{1}{x^{-3}} = {x^3} \\)";

    var xPowAOnXPowB = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";
    var xDiff0 = "$avec \\; x \\neq 0$"

    var xTimesYPowA = "\\( \\big(x \\times y)^{a} = x^a \\times y^a \\)";

    var xOnYPowA = "\\( \\Bigg(\\frac{x}{y}\\Bigg)^{a} = \\frac{x^a}{y^a}  \\)";
    var yDiff0 = "$ avec \\;  y \\neq 0$"

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (

        <>
            <p className="Title">Les puissances</p>
            <Container className="CoursesContainer"> 
                <p>
                    Les puissances sont une manière d'exprimer de petits ou de grands nombres de manière plus simple et plus lisibles.
                    {"\n"} Par exemple, pour un million.
                </p> 
                <MathJaxDisplay toShow={million} demo />  
                <MathJaxDisplay toShow={million2} demo />  
                <p>Le nombre en exposant sera le nombre de fois où le nombre sera multiplié par lui-même.</p>
                 <Container className="Focus"> 
                    <MathJaxDisplay toShow={powGen}/>  
                </Container>
                <p>Soit de manière plus générale : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={powGen2}/>  
                </Container>

                <p className="Title1">Multiplication de puissances</p>
                <p>Si l'on multiplie des puissances ensemble, voici ce qu'il se passe : </p>
                <MathJaxDisplay toShow={thouByHundred} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouByHundred2} demo />
                <p>On voit que les exposants s'additionnent.
                    {"\n"}Ce qui nous donne la première formule :
                </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={powTimesPow} fRef={1} />
                </Container>

                <p className="Title1">À La puissance zéro</p>
                <p>Avec la formule <MathJaxInline toShow={"$(1)$"} />, on peut dire que : </p>
                <MathJaxDisplay toShow={xPow0} demo />
                <p>Soit </p>
                <MathJaxDisplay toShow={xPow02} demo />
                <p>On en conclue que dans tous les cas : </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPow03} fRef={2} />
                </Container>

                <p className="Title1">Inverse de puissances</p>
                <p>La multiplication d'un nombre par son inverse donne toujours l'identité, à savoir <MathJaxInline toShow={"$1$"} />.</p>
                <MathJaxDisplay toShow={xTimesInvX} demo />
                <p>Mais on sait, grâce à la formule <MathJaxInline toShow={"$(2)$"} /> que :</p>
                <MathJaxDisplay toShow={xPow03} demo />
                <p>Soit alors :</p>
                <MathJaxDisplay toShow={xTimesInvX2} demo />
                <p>
                    Cherchons à savoir pour quelle puissance de <MathJaxInline toShow={"$x$"} /> correspond <MathJaxInline toShow={"$ 1 \\over x $ "} />.
                    {"\n"}Cet exposant sera appelé <MathJaxInline toShow={"$n$"} /> .
                </p>
                <MathJaxDisplay toShow={xTimesInvX3} demo />
                <p>Avec la première formule <MathJaxInline toShow={"$(1)$"} />, cela nous donne tout simplement</p>
                <MathJaxDisplay toShow={xTimesInvX4} demo />
                <p>Soit l'équation suivante :</p>
                <MathJaxDisplay toShow={xTimesInvX5} demo />
                <p>on en conclue que :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesInvX7} fRef={3}/>
                </Container>

                <p className="Title1">Puissances de puissances</p>
                <p>Si maintenant on met une puissance exposé à une puissance : </p>
                 <MathJaxDisplay toShow={thouPow2} demo />
                <p>Soit</p>
                <MathJaxDisplay toShow={thouPow22} demo />
                <p>On remarque cette fois que les exposants se multiplient.
                    {"\n"}Ce qui nous donne la formule suivante :
                </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={powPow} fRef={4}/>
                </Container>

                <p className="Title1">Puissances composées</p>
                <p className="Title2">Exemple 1 : puissance au dénominateur</p>
                <MathJaxDisplay toShow={comp} demo />
                <p>peut s'exprimer, grâce à la formule <MathJaxInline toShow={"$(3)$"} /> comme ceci :  </p>
                <MathJaxDisplay toShow={comp2} demo />
                <p>Et grâce à la formule <MathJaxInline toShow={"$(4)$"} />, on peut la transformer en : </p>
                <MathJaxDisplay toShow={comp3} demo />
                <p>Si on remplace  <MathJaxInline toShow={"$x$"} />, par  <MathJaxInline toShow={"$10$"} />, cela signifie que l'on peut écrire : </p>
                <MathJaxDisplay toShow={compEx} demo />
                <p className="Title2">Exemple 2 : linéarisation</p>
                <p>
                    On peut écrire la chose suivante, de manière à linéariser une expression avec un dénominateur :
                </p>
                <MathJaxDisplay toShow={compp} demo />
                <p className="Title2">Exemple 3 : puissance inverse au dénominateur</p>
                <p>
                    De même, si l'on a une puissance négative au dénominateur, elle devient positive lorsqu'on la linéarise :
                </p>
                <MathJaxDisplay toShow={compInv} demo />

                <p className="Title1">Autres formules générales</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPowAOnXPowB}/>
                    <MathJaxInline toShow={xDiff0} />
                </Container>
                
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesYPowA}/>
                </Container>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xOnYPowA}/>
                     <MathJaxInline toShow={yDiff0} />
                </Container>
            </Container>
        </>

    );
}

export default LesPuissances;