import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

import Title1 from '../../helpers/Title1';
import Constants from '../../../immutable/Constants';

import Title2 from '../../helpers/Title2';

import AppContext from './../../../context/AppContext';
import Themes from './../../../../styles/Themes';

const LaMultiplicationLaDivision = () => {

    var {theme} = React.useContext(AppContext)

    var commut = "\\( a \\times b = b \\times a \\)";

    var exemple = "\\( 3 \\div 4 \\)";
    var exemple2 = "\\( 3 \\times \\frac{1}{4} \\)";

    var inverse = "\\( inverse(n) = \\frac{1}{n} \\)";
    var inverse2 = "\\( inverse \\left(\\frac{1}{n}\\right) = n \\)";

    var nombFoisInverse = "\\( nombre \\times inverse = 1\\)";
    var nombFoisInverse2 = "\\( 5 \\times \\frac{1}{5}  = 1\\)";

    var neutral = "\\( nombre \\times (\\acute{e}l\\acute{e}ment \\enspace neutre) = nombre \\)";
    var neutral2 = "\\( 4 \\times 1 = 4 \\)";

    var signesExemple = "\\( 4 \\times (-4) \\times (-3) \\times (-6) \\Longrightarrow (-) \\)";
    var signesExemple2 = "\\( A = (-2) \\times 4 \\times (-3) \\times (-1) \\Longrightarrow (-) \\)";

    var signesExemple3 = "\\( A = - (2 \\times 4 \\times 3) = -24  \\)";

    return  <>

                <Title1 title={"1) La commutativité"} />
                <p>
                    La commutativité nous dit que :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={commut}/>
                </Container>

                <Title1 title={"2) La multiplication « = » la division"} />
                <p>Une division peut s’écrire comme une multiplication.</p>
                <p>C’est la multiplication par l’inverse d’un nombre.</p>
                <p>Par exemple :</p>
                <MathJaxDisplay toShow={exemple} demo />
                <p>peut s’écrire :</p>
                <MathJaxDisplay toShow={exemple2} demo />

                <p>Dans le cas de la multiplication, on dit que l'on multiplie des facteurs entre eux.</p>
            
                <Title2 title={"Inverse d'une nombre"} />
                <p>On appelle l'inverse d'un nombre, ce nombre retourné sous forme de fractions.</p>
                <MathJaxDisplay toShow={inverse} demo />
                <MathJaxDisplay toShow={inverse2} demo />
                <p>Diviser un nombre revient alors à le multiplier par son inverse.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={nombFoisInverse} />
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={nombFoisInverse2} demo/>

                <Title1 title={"3) Élément neutre"} />
                <p>Pour la multiplication/division, on appelle le nombre <MathJaxInline toShow={"$1$"} /> l’élément neutre.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={neutral} />
                </Container>
                <p>Exemple : </p>
                <MathJaxDisplay toShow={neutral2} demo/>
                <p>De même que pour l'addition/soustraction, la multiplication/division peuvent être considérées comme une seule et même chose.</p>

                <Title1 title={"4) La division"} />
                <p>Dans le cas de la division, on appelle :
                    {"\n"} - dividende : le nombre à diviser
                    {"\n"} - diviseur : le nombre par lequel on divise
                    {"\n"} - quotient : le résultat
                    {"\n"} - reste : le reste de la division euclidienne
                </p>
                
                <p style={{color: theme === Themes.BRAZIL ? Constants.RED_COLOR : Constants.RED_DARCULA_COLOR }}>À noter : il est interdit de diviser par 0 !</p>
            
                <Title1 title={"5) Signe d'une multiplication/division"} />
                <p>Pour obtenir directement le signe d’une multiplication, on compte le nombre de signes <MathJaxInline toShow={"$(-)$"} />.</p>
                <p>Deux cas se présentent :</p>

                <p>- nombre de signes <MathJaxInline toShow={"$(-)$"} /> pair <MathJaxInline toShow={"$ \\Longrightarrow $"} /> résultat <MathJaxInline toShow={"$(+)$"} /></p>
                <p>- nombre de signes <MathJaxInline toShow={"$(-)$"} /> impair <MathJaxInline toShow={"$ \\Longrightarrow $"} /> résultat <MathJaxInline toShow={"$(-)$"} /></p>
                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={signesExemple} demo/>
                <p>Une fois le signe déterminé, on le met devant et on multiplie tout.</p>
                <MathJaxDisplay toShow={signesExemple2} demo/>
                <MathJaxDisplay toShow={signesExemple3} demo/>
            </>
}

export default LaMultiplicationLaDivision; 