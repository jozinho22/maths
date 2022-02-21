import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import ImageZoom from '../../ImageZoom';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import circleTrigo from '../assets/circleTrigo.png';
import circlePi from '../assets/circlePi.png';
import circleSinusRelation from '../assets/circleSinusRelation.png';

const LeCercle = () => {

    var pOverD = "\\(\\pi = P_{cercle} \\over D_{cercle} \\)"
    var pCercle = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"
    var pCercle2 = "\\( P = 2\\pi R \\)"

    var sinusRelation = "\\( \\frac{sin\\alpha}{a} = \\frac{sin\\beta}{b} = \\frac{sin\\gamma}{c} \\)"
    
    var approx1 = "\\( \\frac {sin \\alpha_1}{a} = \\frac {sin \\beta_1}{R} \\)"
    var approx12 = "\\( \\frac {sin(90°)}{a} = \\frac {sin(45°)}{R} \\)"
    var approx13 = "\\( a = \\frac {sin(90°) R}{sin(45°)} \\)"
    var approx14 = "\\( a = \\frac {1 \\times R}{\\frac{\\sqrt{2}}{2}} \\)"
    var approx15 = "\\( a = \\frac {R}{\\frac{\\sqrt{2}\\sqrt{2}}{2\\sqrt{2}}} \\)"
    var approx16 = "\\( a = \\frac {R}{\\frac{1}{\\sqrt{2}}} \\)"
    var approx17 = "\\( a = R\\sqrt{2}  \\)"
    var approx1R = "\\( P_{cercle} \\approx 4R\\sqrt{2}  \\)"
    var approx1Rval = "\\( P_{cercle} \\approx 5,65  \\)"

    return (
        <>
            <p>
                Le cercle est caractérisé par sa relation avec le nombre π.
                π n'est autre que la rapport de la circonférence sur le diamètre.
                {"\n"}Cette valeur vaut environ 3,14.
                {"\n"}Mais c'est une valeur approchée.
            </p>
            <MathJaxDisplay toShow={pOverD} />
            <p>Étant donné que la rayon est la moitié du diamètre</p>
            <MathJaxDisplay toShow={pCercle} />
            <p>Soit</p>
            <MathJaxDisplay toShow={pCercle2} />

            <ImageZoom src={circleTrigo} name="la trigo"/>

            <p>Mais comment fait-on pour calculer la valeur de π soi même ? </p>
            <p>En voici un exemple</p>
            <p>Il existe une relation entre les angles d'un triangle et leurs côtés</p>

            <ImageZoom src={circleSinusRelation} name="la trigo"/>
            <MathJaxDisplay toShow={sinusRelation} />
            <p>Avec ceci, nous pouvons calculer π par la méthode présentée ci-dessous</p>
            <ImageZoom src={circlePi} name="la trigo"/>

            <p>Prenons une première approximation, les quatre côtés du carré interne au cercle</p>
            <MathJaxDisplay toShow={approx1} />
            <MathJaxDisplay toShow={approx12} />
            <p>En faisant un produit en croix, on a :</p>
            <MathJaxDisplay toShow={approx13} />
            <MathJaxDisplay toShow={approx14} />
            <MathJaxDisplay toShow={approx15} />
            <MathJaxDisplay toShow={approx16} />
            <MathJaxDisplay toShow={approx17} />
            <p>Assemblons maintenant les quatre côtés</p>
            <MathJaxDisplay toShow={approx1R} />
            <p>Sur un cercle de rayon 1, cela nous donne environ</p>
            <MathJaxDisplay toShow={approx1Rval} />
            <p>Un cercle de rayon 1 est normalement d'environ 6,28.
                {"\n"}Continuons
            </p>


        </>
    )
}

export default LeCercle;