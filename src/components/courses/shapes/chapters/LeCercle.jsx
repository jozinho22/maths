import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import ImageZoom from '../../ImageZoom';
import GenericShape from '../GenericShape';
import ShapeType from '../ShapeType';

const LeCercle = () => {

    var pOverD = "\\(\\pi = \\frac{P_{cercle}}  {D_{cercle}} \\)"
    var pCercle = "\\( P_{cercle} = 2\\pi R_{cercle} \\)"
    var pCercle2 = "\\( P_{cercle} = \\pi D_{cercle} \\)"
    var pCercle3 = "\\( P = 2\\pi R \\)"

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
           
        </>
    )
}

export default LeCercle;