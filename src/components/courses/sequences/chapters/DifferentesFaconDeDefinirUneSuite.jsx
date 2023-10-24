import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import ImageZoom from '../../helpers/ImageZoom';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

import recurrentSequences from '../assets/recurrentSequences.png';
import Title2 from '../../helpers/Title2';

const DifferentesFaconDeDefinirUneSuite = () => {

    var n = 0;
    var sequencesGen = "\\( \\forall n \\in \\mathbb{N}, \\enspace u_n = f(n)\\)";
   
    var sequencesExplicite = "\\( \\forall n \\in \\mathbb{N}, \\enspace u_n = \\frac{(-1)^n}{n+1} \\)";
    var sequencesRecur = "\\( \\Biggl\\{ \\begin{gather*} u_0 = -2 \\\\  \\enspace \\enspace \\enspace u_{n + 1} = \\sqrt{u_n + 2} \\end{gather*} \\)";
    var sequencesRecur2 = "\\( u_{n+1} = f(u_n) \\enspace avec \\enspace f(x) = \\sqrt{x + 2 } \\)";

    return  <>
                <Title1 title={"1) Définition explicite"} />
                <p>On calcule le terme de rang <MathJaxInline toShow={"$n$"} />, à partir de l'entier <MathJaxInline toShow={"$n$"} />.</p>
                <p>La suite va se comporter comme la fonction <MathJaxInline toShow={"$f$"} /> correspondante.</p>
                <Container className="Focus">
                     <MathJaxDisplay toShow={sequencesGen} />  
                </Container>
                <p>On peut alors établir <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.DERIVATION}/variations-d-une-fonction`} external>les variations grâce à la dérivée</Link>.</p>
            
                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={sequencesExplicite} demo /> 
                <p>On peut calculer les différents termes <MathJaxInline toShow={"$ u_0, u_1,...,u_k$"} />. </p>

                <Title1 title={"2) Suites récurrentes"} />
                <p>- on connaît le premier de terme <MathJaxInline toShow={"$u_{n_0}$"} /> de la suite</p>
                <p>- le terme <MathJaxInline toShow={"$u_{n+1}$"} /> est exprimé en fonction de <MathJaxInline toShow={"$u_{n}$"} />.</p>
                <Title2 title={"Exemple"} />
                <MathJaxDisplay toShow={sequencesRecur} demo /> 
                <p>On a :</p>
                <MathJaxDisplay toShow={sequencesRecur2} demo /> 
                <p><MathJaxInline toShow={"$ (u_n) $"} /> est la suite récurrente associée à la fonction <MathJaxInline toShow={"$f$"} />.</p>
                
                <Title2 title={"Graphiquement"} />
                <p>On trace la droite d'équation <MathJaxInline toShow={"$  g(x)= x$"} />.</p>
                <p>Elle va nous servir à reporter chaque terme du rang d'après, qui lui-même va devenir l'antécédent du terme de rang suivant, et ainsi de suite.</p>
                <ImageZoom src={recurrentSequences} name="Suite récurrente convergente" n={++n} />
                <p>On aura alors la suite <MathJaxInline toShow={"$ (u_n) $"} /> représenté sur l'axe des abscisses.</p>
                <p>On pose les deux premiers termes <MathJaxInline toShow={"$ u_{n_0} $"} /> et <MathJaxInline toShow={"$ u_{n_0 + 1} $"} />.</p>
                <p>Dans notre cas la suite commence à <MathJaxInline toShow={"$ 0 $"} />, donc ce seront les termes <MathJaxInline toShow={"$ u_0 $"} /> et <MathJaxInline toShow={"$ u_1 $"} />.</p>
                <p>Et on reporte tous les autres termes sur l'axe des abscisses pour obtenir le terme suivant à chaque fois.</p>
            </>
}

export default DifferentesFaconDeDefinirUneSuite;