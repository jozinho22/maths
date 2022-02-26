import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import ImageZoom from '../../ImageZoom';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';
import circleTrigo from '../assets/circleTrigo.png';
import circlePi from '../assets/circlePi.png';
import circleSinusRelation from '../assets/circleSinusRelation.png';

const LeCercle = () => {

    var pOverD = "\\(\\pi = \\frac{P_{cercle}}  {D_{cercle}} \\)"
    var pCercle = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"
    var pCercle2 = "\\( P_{cercle} = \\pi D_{cercle} \\)"
    var pCercle3 = "\\( P = 2\\pi R \\)"

    var sinusRelation = "\\( \\frac{sin\\alpha}{a} = \\frac{sin\\beta}{b} = \\frac{sin\\gamma}{c} \\)"
    
    var approx1P = "\\( P_{cercle} \\approx 4a  \\)"
    var approx1 = "\\( \\frac {sin (\\alpha_0)}{a} = \\frac {sin (\\beta_0)}{R} \\)"
    var approx12 = "\\( \\frac {sin(90°)}{a} = \\frac {sin(45°)}{R} \\)"
    var approx13 = "\\( a = \\frac {sin(90°) R}{sin(45°)} \\)"
    var approx14 = "\\( a = \\frac {1 \\times R}{\\frac{\\sqrt{2}}{2}} \\)"
    var approx15 = "\\( a = \\frac {R}{\\frac{\\sqrt{2}\\sqrt{2}}{2\\sqrt{2}}} \\)"
    var approx16 = "\\( a = \\frac {R}{\\frac{1}{\\sqrt{2}}} \\)"
    var approx17 = "\\( a = R\\sqrt{2}  \\)"
    var approx1R = "\\( P_{cercle} \\approx 4R\\sqrt{2}  \\)"
    var approx1Rval = "\\( P_{cercle} \\approx 5,65  \\)"

    var approx2P = "\\( P_{cercle} \\approx 8b  \\)"
    var approx2 = "\\( \\frac {sin (\\alpha_1)}{a} = \\frac {sin (\\beta_1)}{R} \\)"
    var approx22 = "\\( \\frac {sin (\\frac{\\alpha_0}{2})}{a} = \\frac {\\frac {sin (180° - (\\frac{\\alpha_0}{2})}{2})}{R} \\)"
    var approx23 = "\\( a = \\frac {sin(45°) R}{sin(67,5°)} \\)"
    var approx24 = "\\( a = \\frac {\\frac{\\sqrt{2}}{2} \\times R}{\\frac{\\sqrt{2}}{2}} \\)"
    var approx25 = "\\( a = \\frac {R}{\\frac{\\sqrt{2}\\sqrt{2}}{2\\sqrt{2}}} \\)"
    var approx26 = "\\( a = \\frac {R}{\\frac{1}{\\sqrt{2}}} \\)"
    var approx27 = "\\( a = R\\sqrt{2}  \\)"
    var approx2R = "\\( P_{cercle} \\approx 4R\\sqrt{2}  \\)"
    var approx2Rval = "\\( P_{cercle} \\approx 5,65  \\)"

    return (
        <>
            <p>
                Le cercle est caractérisé par sa relation avec le nombre PI (π).
                π n'est autre que la rapport de la circonférence (périmètre) sur le diamètre.
                {"\n"}Cette valeur vaut environ 3,14. Mais c'est une valeur approchée...
            </p>
            <MathJaxDisplay toShow={pOverD} />
             <p>Soit</p>
            <MathJaxDisplay toShow={pCercle2} />

            <p>Étant donné que le rayon est la moitié du diamètre</p>
            <MathJaxDisplay toShow={pCercle} />
            <p>Soit</p>
            <Container className="Focus">
                <MathJaxDisplay toShow={pCercle3} />
            </Container>
           

            <p>Mais comment fait-on pour calculer la valeur de π soi même ? </p>
            <p>En voici un exemple :</p>
            <p>Il existe une relation entre les angles d'un triangle et leurs côtés</p>

            <ImageZoom src={circleSinusRelation} name="Relation entre les angles d'un triangles"/>
            <MathJaxDisplay toShow={sinusRelation} />
            <p>Le sinus est le projeté orthogonal (à angle droit) du rayon pivoté de l'angle α sur l'axe y, dans un cercle de rayon R = 1</p>
            <ImageZoom src={circleTrigo} name="Sinus et cosinus"/>
            
            <p>Avec ceci, nous pouvons calculer π par la méthode présentée ci-dessous:</p>
            <p>
                Nous avons tracé les médiatrices des côtés b et c, afin d'obtenir toujours la moitié de l'angle.
                C'est le cas car les triangles sont toujours isocèles (deux côtés identiques, ici R).
            </p>
            <ImageZoom src={circlePi} name="la trigo"/>
            <p>Prenons une première approximation, les quatre côtés du carré interne au cercle</p>
            <MathJaxDisplay toShow={approx1P} />
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
                {"\n"}Continuons...
            </p>
    
            <p>Travaillons dorénavant sur b, où l'approximation sera cette-fois de</p>
            <MathJaxDisplay toShow={approx2P} />
            <MathJaxDisplay toShow={approx2} />
            <MathJaxDisplay toShow={approx22} />
            <p>En faisant un produit en croix, on a :</p>
            <MathJaxDisplay toShow={approx23} />
            <MathJaxDisplay toShow={approx24} />
            <MathJaxDisplay toShow={approx25} />
            <MathJaxDisplay toShow={approx26} />
            <MathJaxDisplay toShow={approx27} />
        </>
    )
}

export default LeCercle;