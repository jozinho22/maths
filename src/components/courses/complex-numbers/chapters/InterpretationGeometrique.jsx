import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import ImageZoom from '../../helpers/ImageZoom';
import complexNumbersPlan from '../assets/complexNumbersPlan.png';
import complexNumbersPlanTrigo from '../assets/complexNumbersPlanTrigo.png';
import complexNumbersPlanTrigo2 from '../assets/complexNumbersPlanTrigo2.png';

const InterpretationGeometrique = () => {

    var n = 0;

    var prop1 = "\\( A = B \\Longleftrightarrow z_A = z_B\\)";
    var prop2 = "\\( \\overrightarrow{w_1} = \\overrightarrow{w_1} \\Longleftrightarrow z_{\\overrightarrow{w_1}} = z_{\\overrightarrow{w_2}} \\)";
    var prop3 = "\\( M(z) \\Longleftrightarrow  M(\\overline{z}) \\enspace sym\\acute{e}trique \\enspace  par \\enspace rapport \\enspace \\overset{’}{a} \\enspace la \\enspace droite \\enspace d'\\acute{e}quation \\enspace (y = 0) \\)";
    var prop4 = "\\( M(z) \\Longleftrightarrow |z| = |\\overrightarrow{OM}| = x^2 + y^2 \\)";
    
    var prop5 = "\\( aff_{\\overrightarrow{w_1} + \\overrightarrow{w_2}} = aff_{\\overrightarrow{w_1} } +  aff_{\\overrightarrow{w_2} } \\)";
    var prop6 = "\\(  aff_{k.\\overrightarrow{w}} = k. aff_{\\overrightarrow{w}} \\)";
    var prop7 = "\\( aff_{\\overrightarrow{AB}} = z_b - z_a \\)";

    return  <>
                <p>Le plan <MathJaxInline toShow={"$  \\mathcal{P} $"} /> est rapporté au repère orthonormal.</p>
                <p><MathJaxInline toShow={"$  \\mathcal{P} $"} /> est le plan complexe ci-dessous :</p>
                <ImageZoom src={complexNumbersPlan} name="Le plan des complexes" n={++n} />

                <p>À tout complexe <MathJaxInline toShow={"$ z = x +iy \\enspace (avec \\enspace  (x, y) \\in  \\mathbb{R}) $"} />, on fait correspondre le point <MathJaxInline toShow={"$ M(x, y) $"} />.</p>
                
                <p>On dit que <MathJaxInline toShow={"$  z = x +iy $"} /> est l'affixe du point <MathJaxInline toShow={"$ M(x, y) $"} />.</p>
                
                <Title1 title={"Notations"} />
                <p>Pour le point <MathJaxInline toShow={"$ A $"} /> d'affixe <MathJaxInline toShow={"$ 1 + i $"} /> :</p>
                <p>On note <MathJaxInline toShow={"$ A(1+i) $"} /> ou <MathJaxInline toShow={"$ z_A = 1+i $"} />.</p>
                
                <Title1 title={"Axe des réels - axe des imaginaires"} />
                <p>Si <MathJaxInline toShow={"$ z_M $"} /> est sur l'axe des abscisses, <MathJaxInline toShow={"$ z_M \\in \\mathbb{R} $"} />.</p>
                <p>Si <MathJaxInline toShow={"$ z_M $"} /> est sur l'axe des ordonnées, <MathJaxInline toShow={"$ z_M \\in i\\mathbb{R} $"} />.</p>             

                <Title1 title={"Propriétés"} />
                <p>Si deux points <MathJaxInline toShow={"$ A $"} /> et <MathJaxInline toShow={"$ B $"} /> sont confondus : </p>
                <Title1 title={"Propriété 1"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop1} />
                </Container>
                <Title1 title={"Propriété 2"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop2} />
                </Container>                
                
                <Title1 title={"Propriété 3"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop3} />
                </Container>

                <Title1 title={"Propriété 4 : module de z"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop4} />
                </Container>

                <Title1 title={"Propriété 5 : affixes"} />
                <Title2 title={"Somme de deux affixes"} />
                <Container className="Focus">
                    <MathJaxDisplay toShow={prop5} />
                </Container>

                <Title2 title={"Affixe multiplié par une constante"} />
                 <Container className="Focus">
                    <MathJaxDisplay toShow={prop6} />
                </Container>

                <Title2 title={"Distance entre deux points"} />
                
                 <Container className="Focus">
                    <MathJaxDisplay toShow={prop7} />
                </Container>
                
            </>
}

export default InterpretationGeometrique;