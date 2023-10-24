import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const SuitesGeometriques = () => {

    var suiteGeo = "\\( \\forall n \\in \\mathbb{N}, \\enspace v_{n+1} = q.v_n \\)";
    var suiteGeo2 = "\\( \\forall n \\in \\mathbb{N}, \\enspace v_{n} = v_0 . q^n \\)";

    var suiteGeoDemo = "\\( v_1 = v_0.q \\)";
    var suiteGeoDemo2 = "\\( v_2 = v_1.q \\)";
    var suiteGeoDemo_ = "\\( ............. \\)";
    var suiteGeoDemo3 = "\\( v_{n-1} = v_{n-2}.q \\)";
    var suiteGeoDemo4 = "\\( v_{n} = v_{n-1}.q \\)";
    var suiteGeoDemo5 = "\\( v_1 \\times v_2 \\enspace \\times \\enspace ... \\enspace \\times  \\enspace v_{n-1}  \\times \\underline{v_{n}} = \\underline{v_0}  \\times  v_1 \\times v_2 \\enspace \\times \\enspace ... \\enspace \\times \\enspace v_{n-1}  \\times \\underline{q^n}  \\)";

    return  <>
                <Title1 title={"Définitions"} />
                <p>On dit qu'une suite est géométrique lorsqu'il existe un réel <MathJaxInline toShow={"$ q $"} /> tel que :</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={suiteGeo} />  
                </Container>
                <p><MathJaxInline toShow={"$ q $"} /> est appellé raison de la suite <MathJaxInline toShow={"$ (v_n) $"} />.</p>

                <Title1 title={"Théorème"} />
                <p>Si <MathJaxInline toShow={"$ (v_n) $"} /> est une suite géométrique de premier terme <MathJaxInline toShow={"$ v_0 $"} /> et de raison <MathJaxInline toShow={"$ q $"} />, alors : </p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={suiteGeo2} />  
                </Container>

                <Title1 title={"Démonstration"} />
                <MathJaxDisplay toShow={suiteGeoDemo} demo />
                <MathJaxDisplay toShow={suiteGeoDemo2} demo />
                <MathJaxDisplay toShow={suiteGeoDemo_} demo />
                <MathJaxDisplay toShow={suiteGeoDemo3} demo />
                <MathJaxDisplay toShow={suiteGeoDemo4} demo />
                <p>On multiplie les <MathJaxInline toShow={"$n$"} /> égalités membre à membre :</p>
                <MathJaxDisplay toShow={suiteGeoDemo5} demo />
            </>
}

export default SuitesGeometriques;