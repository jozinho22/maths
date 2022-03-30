import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../mathjax-display/MathJaxInline';

const LesPuissances = () => {

    var txtMillion = "6 fois le nombre 10";
    var million = "\\( 1 \\; 000 \\; 000 =  \\underbrace { 10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 }_\\text{" + txtMillion + "} \\)";
    var million2 = "\\(1 \\; 000 \\; 000 = 10^6 \\)";

    var txtPowGen = " a facteurs"
    var powGen = "\\(x^a = \\underbrace{ a \\times a \\times a \\times a ...}_\\text{" + txtPowGen + "} \\)";
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


    var xTimesYPowA = "\\( (x \\times y)^{a} = x^a \\times y^a \\)";
    var xTimesYPowADemo = "\\( (x \\times y)^{a} = \\underbrace{ (x \\times y) \\times (x \\times y) \\times (x \\times y) ...}_\\text{a fois} \\)";
    var xTimesYPowADemo2 = "\\( (x \\times y)^{a} = \\underbrace{ (x  \\times x  \\times x ...) }_\\text{a fois} \\underbrace{ (y  \\times y  \\times y ...) }_\\text{a fois} \\)";

    var xOnYPowA = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\frac{x^a}{y^a}  \\)";
    var yDiff0 = "$ avec \\;  y \\neq 0$"
    var xOnYPowADemo = "\\( \\Big(\\frac{x}{y}\\Big)^{a} = \\underbrace{ \\frac{x}{y} \\times \\frac{x}{y} \\times \\frac{x}{y} ...}_\\text{a fois} \\)";
    var xOnYPowADemo2 = "\\( \\Big(\\frac{x}{y}\\Big)^{a} =  \\frac{ \\overbrace{x  \\times x  \\times x ... }^\\text{a fois} }  { \\underbrace{ y  \\times y  \\times y ... }_\\text{a fois} }  \\)";

    var xPowAOnXPowB = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";
    var xDiff0 = "$avec \\; x \\neq 0$"
    var xPowAOnXPowBDemo = "\\( \\frac{x^a}{x^b} = x^a x^{-b} \\)";
    var xPowAOnXPowBDemo2 = "\\( \\frac{x^a}{x^b} = x^{a + (- b)} \\)";
    var xPowAOnXPowBDemo3 = "\\( \\frac{x^a}{x^b} = x^{a - b} \\)";

    var sqrt2 = "\\( \\sqrt{x} \\times \\sqrt{x} = x \\)";
    var sqrt22 = "\\( x^{n} \\times x^{n} = x^1 \\)";
    var sqrt23 = "\\( x^{n + n} = x^1 \\)";
    var sqrt24 = "\\( x^{2n} = x^1 \\)";
    var sqrt25 = "\\( 2n = 1 \\Leftrightarrow  n = \\frac{1}{2} \\)";
    var sqrt26 = "\\( \\sqrt{x} = x^{\\frac{1}{2}} \\)";

    var sqrt3 = "\\( \\sqrt[3]{x} \\times \\sqrt[3]{x} \\times \\sqrt[3]{x} = x \\)";
    var sqrt32 = "\\( 3n = 1 \\Leftrightarrow  n = \\frac{1}{3} \\)";
    var sqrt33 = "\\( \\sqrt[3]{x} = x^{\\frac{1}{3}} \\)";

    var sqrtn = "\\( \\sqrt[n]{x} = x^{\\frac{1}{n}} \\)";

    var sqrtnInv = "\\( \\frac{1}{\\sqrt[n]{x}} = x^{-\\frac{1}{n}} \\)";
    var sqrtnInvPow = "\\( \\Big( \\frac{1}{\\sqrt[n]{x}}\\Big)^{m} = x^{-\\frac{m}{n}} \\)";

    var sqrtnEx = "\\( \\sqrt{x}^{6} = x^{\\frac{6}{2}} = x^3  \\)";
    var sqrtnEx2 = "\\( \\Big( \\frac{1}{\\sqrt[3]{x}}\\Big)^{2} = x^{-\\frac{2}{3}} \\)";


    var terreLune = "\\(D_{Terre-lune} = 400 \\; 000 \\;km   \\)";
    var terreLune2 = "\\( D_{Terre-lune} = 4.0  \\times 10^5 \\;km  \\)";

    var terreSol = "\\( D_{Terre-soleil} = 150 \\;000 \\;000 \\;km  \\)";
    var terreSol2 = "\\( D_{Terre-soleil} = 1.5  \\times 10^{10}\\; km  \\)";

    var vLumiere = "\\( V_{lumiere (vide)} = 300 \\;000 \\;km.s^{-1}  \\)";
    var vLumiere2 = "\\( V_{lumiere (vide)} = 3.0  \\times 10^5 \\;km.s^{-1}  \\)";

    var aLumiere = "\\( annee-lumiere = 10 \\;000 \\;000 \\;000 \\;000 \\;000 \\;m \\)";
    var aLumiere2 = "\\( annee-lumiere = 10^{16} \\;m \\)";

    var mic = "\\( D_{microbe} = 0, \\;000 \\;001 \\;m \\)";
    var mic2 = "\\( D_{microbe} = 10^{-6} \\;m \\)";

    var atom = "\\( D_{atome} = 0, \\;000 \\;000 \\;000 \\;000 \\;001 \\;m \\)";
    var atom2 = "\\( D_{atome} = 10^{-16} \\;m \\)";

    React.useEffect(() => {
        if(process.env.NODE_ENV !== "development")
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
                <p className="Title2">Puissance de produit</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xTimesYPowA}/>
                </Container>
                <p>Car </p>
                <MathJaxDisplay toShow={xTimesYPowADemo} demo />
                <MathJaxDisplay toShow={xTimesYPowADemo2} demo />
                <MathJaxDisplay toShow={xTimesYPowA} demo />

                <p className="Title2">Puissance de quotient</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xOnYPowA}/>
                    <MathJaxInline toShow={yDiff0} />
                </Container>
                <p>Idem que pour précédemment : </p>
                <MathJaxDisplay toShow={xOnYPowADemo} demo />
                <MathJaxDisplay toShow={xOnYPowADemo2} demo />
                <MathJaxDisplay toShow={xOnYPowA} demo />

                <p className="Title2">Quotient de puissance</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={xPowAOnXPowB}/>
                    <MathJaxInline toShow={xDiff0} />
                </Container>
                <p>Car avec <MathJaxInline toShow={"$(4)$"} /> on a vu que :</p>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo} demo />
                <p>et avec <MathJaxInline toShow={"$(1)$"} /> on a :</p>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo2} demo/>
                <MathJaxDisplay toShow={xPowAOnXPowBDemo3} demo/>

                <p className="Title1">Liens entre puissances et racines</p>
                <p>La définition de la racine carrée est la suivante : </p>
                <MathJaxDisplay toShow={sqrt2} demo/>
                <p>Nous allons essayer de déterminer la valeur de <MathJaxInline toShow={"$n$"} /> pour laquelle <MathJaxInline toShow={"$x^n = \\sqrt{x}$"} /> </p>
                <MathJaxDisplay toShow={sqrt22} demo/>
                <p>Avec la formule <MathJaxInline toShow={"$(1)$"} /> on sait que :</p>
                <MathJaxDisplay toShow={sqrt23} demo/>
                <MathJaxDisplay toShow={sqrt24} demo/>
                <p>Il nous suffit alors de résoudre l'équation :</p>
                <MathJaxDisplay toShow={sqrt25} demo/>
                <p>Ce qui nous nous donne comme résultat :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrt26} />
                </Container>
                <p>
                    Mais la racine carrée est une racine particulière avec <MathJaxInline toShow={"$n = 2$"} />.
                    {"\n"}
                    La racine carrée pourrait alors éventuellement s'écrire aussi <MathJaxInline toShow={"$sqrt[2]{x}$"} />
                    {"\n"}
                    Nous pouvons généraliser cette formule pour tout <MathJaxInline toShow={"$n$"} />...
                    {"\n"}{"\n"}
                </p>
                <p>Par exemple, si l'on prend par exemple <MathJaxInline toShow={"$n = 3$"} />, autrement dit la racine cubique a comme définition :</p>
                <MathJaxDisplay toShow={sqrt3} demo/>
                <p>En réitérant le même processus que plus haut, on obtient comme équation à résoudre :</p>
                <MathJaxDisplay toShow={sqrt32} demo/>
                <p>Soit : </p>
                <MathJaxDisplay toShow={sqrt33} demo/>
                <p>On a alors pour tout <MathJaxInline toShow={"$n$"} /> :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtn} fRef={5}/>
                </Container>
                <p>En mixant les formules <MathJaxInline toShow={"$(3)$"} /> et <MathJaxInline toShow={"$(5)$"} />, on peut voir par exemple que :</p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtnInv} />
                </Container>
                <p>Et y ajoutant la formule <MathJaxInline toShow={"$(4)$"} />, on a :   </p>
                <Container className="Focus"> 
                    <MathJaxDisplay toShow={sqrtnInvPow} />
                </Container>
                <p className="Title2">Exemples</p>
                <MathJaxDisplay toShow={sqrtnEx} />
                <MathJaxDisplay toShow={sqrtnEx2} />

                <p className="Title1">L'écriture scientifique</p>
                <p>
                    Les puissances nous permettent d'écrire les nombres de l'infiniment grand et de l'infiniment petit.
                    L'écriture utilisée dans la norme internationale est l'écriture scientifique.
                    Elle se définit comme ceci :
                    {"\n"}{"\n"}
                    Un nombre avec au moins chiffre significatif avant la virgule (autre que <MathJaxInline toShow={"$0$"} />), multiplié par une puissance de <MathJaxInline toShow={"$10$"} />.
                    {"\n"}Le (les) nombre(s) va (vont) apporter une précision et la puissance de <MathJaxInline toShow={"$10$"} /> un ordre de grandeur.
                    {"\n"}{"\n"} Exemples :
                </p>
                <p className="Title1">Distance Terre-lune</p>
                <MathJaxDisplay toShow={terreLune} demo />
                <MathJaxDisplay toShow={terreLune2}  demo />
                <p className="Title1">Distance Terre-soleil</p>
                <MathJaxDisplay toShow={terreSol}  demo />
                <MathJaxDisplay toShow={terreSol2} demo  />
                <p className="Title1">Vitesse de la lumière dans le vide</p>
                <MathJaxDisplay toShow={vLumiere}  demo />
                <MathJaxDisplay toShow={vLumiere2} demo  />
                <p className="Title1">Année-lumière</p>
                <MathJaxDisplay toShow={aLumiere}  demo />
                <MathJaxDisplay toShow={aLumiere2}  demo />

                <p className="Title1">Microbe</p>
                <MathJaxDisplay toShow={mic}  demo />
                <MathJaxDisplay toShow={mic2} demo  />
                <p className="Title1">Atome</p>
                <MathJaxDisplay toShow={atom}  demo />
                <MathJaxDisplay toShow={atom2} demo  />

            </Container>
        </>

    );
}

export default LesPuissances;