import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';
import newtonMethod from '../assets/newtonMethod.png';
import newtonMethod2 from '../assets/newtonMethod2.png';
import Link from '../../../immutable/nav/Link';
import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';

const MethodeDeNewton = () => {

    var n = 0;
    var Tao = "\\( T_{a_0}(x) = f'(a_0)(x -a_0 )+ f(a_0) \\)";
    var TaoEquals0 = "\\( f'(a_0)(x -a_0 )+ f(a_0)  = 0 \\)";
    var TaoEquals02 = "\\( \\Longleftrightarrow f'(a_0)x - f'(a_0)a_0 + f(a_0)  = 0 \\)";
    var TaoEquals03 = "\\( \\Longleftrightarrow f'(a_0)x - f'(a_0)a_0 + f(a_0)  = 0 \\)";
    var TaoEquals04 = "\\( \\Longleftrightarrow f'(a_0)x = f'(a_0)a_0 - f(a_0) \\)";
    var TaoEquals05 = "\\( \\Longleftrightarrow x = \\frac{f'(a_0)a_0 - f(a_0)}{f'(a_0)} \\)";
    var TaoEquals06 = "\\( \\Longleftrightarrow x = a_1 = a_0 - \\frac{f(a_0)}{f'(a_0)} \\)";

    var Ta1Equals0 = "\\(  a_2 = a_1 - \\frac{f(a_1)}{f'(a_1)} \\)";

    var newtonSequence = "\\( a_{n + 1} = a_n - \\frac{f(a_n)}{f'(a_n)} \\)";
    var newtonSequenceLimit = "\\( x_{0} = lim_{n \\to +\\infty} \\enspace  (a_n) \\)";
    
    return  <>
                <p>
                    Cette méthode consiste à calculer une certaine valeur plus ou moins connue, mais que l'on souhaiterait approximer plus précisément. La méthode se fait par itération successive.
                </p>
                <p>Soit une fonction <MathJaxInline toShow={"$ f $"} /> convexe et strictement croissante sur un intervalle <MathJaxInline toShow={"$ I \\in \\mathbb{R} $"} /> et <MathJaxInline toShow={"$ a_0 $"} /> un réel appartenant à <MathJaxInline toShow={"$ I $"} /> tel que <MathJaxInline toShow={"$ f(a_0) > 0 $"} />.</p>
                <ImageZoom src={newtonMethod} name="Une fonction convexe sur un intervalle et sa tangente en un point arbitraire" n={++n} />
                <p>Nous savons que cette fonction va s'annuler à un moment donné, mais nous ne savons pas exactement pour quelle valeur.</p>
                <p>Nous allons alors prendre le réel <MathJaxInline toShow={"$ a_0 $"} /> volontairement grand pour que l'on soit sûr que <MathJaxInline toShow={"$ f(a_0) > 0 $"} />.</p>
                <p>Nous avons représenté <Link url={`${PagesConstants.COURS}${CoursesConstants.DERIVEE}/equation-de-la-tangente`} external >la tangente de cette courbe</Link> au point <MathJaxInline toShow={"$ x = a_0 $"} />, et répondant à l'équation :</p>
                <MathJaxDisplay toShow={Tao} demo /> 

                <p>On essayer de déterminer lorsque cette fonction s'annule, c'est-à-dire lorsque <MathJaxInline toShow={"$ T_{a_0}(x) = 0 $"} />.</p>
                <p>On a : </p>
                <MathJaxDisplay toShow={TaoEquals0} demo />
                <MathJaxDisplay toShow={TaoEquals02} demo />
                <MathJaxDisplay toShow={TaoEquals03} demo />
                <MathJaxDisplay toShow={TaoEquals04} demo />
                <MathJaxDisplay toShow={TaoEquals05} demo />
                <MathJaxDisplay toShow={TaoEquals06} demo />
                <p>Si l'on continue et que l'on fait la même chose ne partant cette fois-ci de <MathJaxInline toShow={"$ a_1 $"} />, nous obtiendrons :</p>
                <MathJaxDisplay toShow={Ta1Equals0} demo />
                <ImageZoom src={newtonMethod2} name="Projection de la deuxième tangente sur l'axe des abscisses" n={++n} />
                <p>Nous obtenons par conséquence une suite récurrente, à savoir une suite numérique <MathJaxInline toShow={"$ (a_n)_{n \\in \\mathbb{N} $"} /> exprimée en fonction de <MathJaxInline toShow={"$ a_{n+1} $"} />, <MathJaxInline toShow={"$ f(a_{n}) $"} /> et <MathJaxInline toShow={"$ f'(a_{n}) $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={newtonSequence} />  
                </Container>
                <p>Le nombre que nous cherchons, appellons le <MathJaxInline toShow={"$ x_{0} $"} />, à savoir la valeur de <MathJaxInline toShow={"$ x $"} /> pour laquelle <MathJaxInline toShow={"$ f $"} /> s'annule peut alors être défini par :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={newtonSequenceLimit} />  
                </Container>

                <Title1 title={"Généralisation"} />
                <p>De manière générale, il faut que la fonction d'étude soit convexe ou concave, mais aussi strictement monotone sur son intervalle d'étude.</p>
                <p>On pourra alors tenter de trouver une valeur <MathJaxInline toShow={"$ x = x_{k} $"} /> étant une solution de l'équation <MathJaxInline toShow={"$ f(x) = k$"} />, avec <MathJaxInline toShow={"$ k \\in \\mathbb{R}$"} />.</p>
                <p>La valeur de départ <MathJaxInline toShow={"$a_0 $"} /> importe peu tant qu'il convient aux exigences d'étude et que <MathJaxInline toShow={"$ f(a_0) \\geq 0 $"} />, car de toute manière la suite <MathJaxInline toShow={"$ (a_n)$"} /> va converger assez vite vers la valeur cherchée. </p>
            </>
}

export default MethodeDeNewton;