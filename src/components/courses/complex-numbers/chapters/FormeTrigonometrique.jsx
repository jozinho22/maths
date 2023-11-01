import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import ImageZoom from '../../helpers/ImageZoom';
import complexNumbersPlanTrigo from '../assets/complexNumbersPlanTrigo.png';
import complexNumbersPlanTrigo2 from '../assets/complexNumbersPlanTrigo2.png';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';

const FormeTrigonometrique = () => {

    var n = 0;

    var circEqu = "\\( (x - a)^2 + (y - b)^2 = R^2 \\)";
    var trigo = "\\( z = cos(\\theta) + i sin(\\theta) \\)";

    var moduleOM0 = "\\( || \\overrightarrow{OM_0} || = |z_0| = 1 \\)"; 
    var theta = "\\( (\\overrightarrow{u}, \\overrightarrow{OM_0}) = (\\overrightarrow{u}, \\overrightarrow{OM}) = \\theta + 2k\\pi\\)"; 
    var z0 = "\\( z_0 = cos(\\theta) + i sin(\\theta) \\)"; 

    var colVect = "\\( \\overrightarrow{OM} = \\lambda . \\underbrace{\\overrightarrow{OM_0}} _\\text{= 1}, \\enspace (avec \\enspace \\lambda \\in \\mathbb{R_+^*}) \\)"; 
    var lambda = "\\( \\lambda = || \\overrightarrow{OM} || = |z| \\)"; 
    var OM = "\\( \\overrightarrow{OM}  = |z|.\\overrightarrow{OM_0} \\)"; 
    var affOM = "\\( aff_{\\overrightarrow{OM}}  = aff_{|z|.\\overrightarrow{OM_0}} \\)"; 
    var affOM2 = "\\( aff_{\\overrightarrow{OM}} = |z|.aff_{\\overrightarrow{OM_0}} \\)"; 

    var z = "\\( z = |z|. z_0 \\)"; 
    var zGen = "\\( z = |z| . \\left[cos(\\theta) + i sin(\\theta ) \\right] \\)"; 
    var zGenCond = "\\( avec \\enspace \\Biggl\\{ \\begin{gather*} |z| = || \\overrightarrow{OM} || = \\sqrt{x^2 + y^2} \\\\ (\\overrightarrow{u}, \\overrightarrow{OM}) = \\theta + 2k\\pi \\end{gather*}  \\)"; 

    return  <>
                <p>Le plan <MathJaxInline toShow={"$  \\mathcal{P} $"} /> est rapporté au repère orthonormal.</p>
                <p>Pour rappel, l'équation d'un cercle de centre <MathJaxInline toShow={"$ I(a, b)$"} /> et de rayon <MathJaxInline toShow={"$  R $"} /> est : </p>
                <MathJaxDisplay toShow={circEqu} demo />
                
                <Title1 title={"Cas d'un complexe de module 1"} />
                <p><MathJaxInline toShow={"$  M(x, y) $"} /> est un point d'affixe <MathJaxInline toShow={"$  z $"} />, avec <MathJaxInline toShow={"$  |z| = 1 $"} />.</p>
                <ImageZoom src={complexNumbersPlanTrigo} name="La forme trigonométrique d'un complexe de module 1" n={++n} />

                <p>Le plan complexe est rapporté au repère <MathJaxInline toShow={"$  (0, \\overrightarrow{u}, \\overrightarrow{v}) $"} />.</p>
                <p>On pose <MathJaxInline toShow={"$ (\\overrightarrow{u}, \\overrightarrow{OM}) = \\theta + 2k\\pi $"} />.</p>
                <p>On considère <MathJaxInline toShow={"$ z \\neq 0 $"} /> sinon l'angle <MathJaxInline toShow={"$ \\theta $"} /> n'existe pas.</p>

                <p><MathJaxInline toShow={"$ M$"} /> a pour coordonnées <MathJaxInline toShow={"$ M(cos(\\theta), sin(\\theta) )$"} />.</p>
                <p>Soit une forme trigonométrique complexe :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={trigo} />
                </Container>

                <Title1 title={"Cas d'un complexe de module |z|"} />
                <ImageZoom src={complexNumbersPlanTrigo2} name="La forme trigonométrique d'un complexe de module |z|" n={++n} />
                <p>Le vecteur <MathJaxInline toShow={"$ \\overrightarrow{OM} $"} /> coupe le cercle trigonométrique en un seul point <MathJaxInline toShow={"$ M_0(z_0) $"} />. </p>
                <p>On a par définition : </p>
                <MathJaxDisplay toShow={moduleOM0} demo />
                <p>On a aussi : </p>
                <MathJaxDisplay toShow={theta} demo />
                <p>D'après le cas précédent, on avait pour <MathJaxInline toShow={"$ z_0 $"} /> :</p>
                <MathJaxDisplay toShow={z0} demo />
                <p>D'autre part, <MathJaxInline toShow={"$ \\overrightarrow{OM} $"} /> et <MathJaxInline toShow={"$ \\overrightarrow{OM_0} $"} /> sont colinéaires, donc on a la relation : </p>
                <MathJaxDisplay toShow={colVect} demo />
                <p>Donc :</p>
                <MathJaxDisplay toShow={lambda} demo />
                <p>Finalement :</p>
                <MathJaxDisplay toShow={OM} demo />

                <MathJaxDisplay toShow={affOM} demo />

                <p>Grâce à <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.COMPLEXES}/interpretation-geometrique`} external>la formule sur les affixes</Link>,</p>
                <MathJaxDisplay toShow={affOM2} demo />
                <p>Alors :</p>
                <MathJaxDisplay toShow={z} demo />
                <MathJaxDisplay toShow={zGen} demo />

                <p>Pour conclure :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={zGen} />
                    <MathJaxDisplay toShow={zGenCond} />
                </Container>

                <p>Pour la suite, on appellera <MathJaxInline toShow={"$ \\theta$"} /> l'argument de <MathJaxInline toShow={"$ z $"} /> et on notera <MathJaxInline toShow={"$ \\theta = arg(z) $"} />.</p>
            </>
}

export default FormeTrigonometrique;