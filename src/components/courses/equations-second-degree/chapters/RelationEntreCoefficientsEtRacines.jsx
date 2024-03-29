import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title2 from '../../helpers/Title2';

const RelationEntreCoefficientsEtRacines = () => {

    var equSecondDegEquiv = "\\( ax^2 + bx + c = a (x - x_1)(x - x_2) \\)";
    var equSecondDegEquivDev = "\\( ax^2 + bx + c = a (x^2 - x.x_2 - x_1.x + x_1.x_2) \\)";
    var equSecondDegEquivDev2 = "\\( ax^2 + bx + c = a (x^2 - x. (x_2 + x_1) + x_1.x_2) \\)";
    var equSecondDegEquivDev3 = "\\( ax^2 + bx + c = a.x^2 - a. (x_2 + x_1).x + a.x_1.x_2) \\)";
    var x1PlusX2 = "\\( S= x_1 + x_2 = -\\frac{b}{a} \\)";
    var x1TimesX2 = "\\(P= x_1.x_2 = \\frac{c}{a} \\)";
    var equSecondDegreWithSandP = "\\( x^2 -S.x + P = 0 \\)";

    return  <>
                <p>Il existe une relation entre les coefficients <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> avec les deux racines du pôlynome <MathJaxInline toShow={"$x_1$"} /> et <MathJaxInline toShow={"$x_2$"} />. </p>
                <p>Cette relation d'appelle relation de Viète.</p>
                <p>Grâce au calcul du premier chapitre, on a pu voir que : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={equSecondDegEquiv}  />
                </Container>
                <p>En développant l'expression de droite, on obtient ceci : </p>
                <MathJaxDisplay toShow={equSecondDegEquivDev} demo />
                <MathJaxDisplay toShow={equSecondDegEquivDev2} demo />
                <MathJaxDisplay toShow={equSecondDegEquivDev3} demo />
                <p>En identifiant les coefficients, on a les deux équations suivantes : </p>

                <Title2 title={"La somme S"}/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={x1PlusX2}  />
                </Container>
                <p>Lorsqu'une racine évidente est <MathJaxInline toShow={"$x_1 = 0$"} />, l'autre racine est <MathJaxInline toShow={"$x_2 = -\\frac{b}{a}$"} />.</p>
                <Title2 title={"Le produit P"}/>
                <Container className="Focus">
                    <MathJaxDisplay toShow={x1TimesX2}  />
                </Container>
                                <p>Lorsqu'une racine évidente est <MathJaxInline toShow={"$x_1 = 1$"} />, l'autre racine est <MathJaxInline toShow={"$x_2 = \\frac{c}{a}$"} />.</p>
                <p><MathJaxInline toShow={"$x_1$"} /> et <MathJaxInline toShow={"$x_2$"} /> sont alors aussi solutions de l'équation : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={equSecondDegreWithSandP} />
                </Container>
            </>

}

export default RelationEntreCoefficientsEtRacines;