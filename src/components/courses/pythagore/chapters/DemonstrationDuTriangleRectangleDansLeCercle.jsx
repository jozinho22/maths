import React from 'react';
import { Container } from 'react-bootstrap'
import ImageZoom from '../../helpers/ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Title1 from '../../helpers/Title1';
import demoTriangleRectangleDansCercle from '../assets/demoTriangleRectangleDansCercle.png';
import demoTriangleRectangleDansCercleFin from '../assets/demoTriangleRectangleDansCercleFin.png';

import PagesConstants from '../../../immutable/nav/PagesConstants';
import CoursesConstants from '../../helpers/CoursesConstants';
import Link from '../../../immutable/nav/Link';
import Title2 from '../../helpers/Title2';
import Aside from '../../helpers/Aside';

const DemonstrationDuTriangleRectangleDansLeCercle = () => {

    var n =0;
    var pyth = "\\(a ^2 + b^2 = c^2\\)";

    var pythInA = "\\(h^2 + (R - x_R)^2 = a^2 \\)";
    var pythInB = "\\(h^2 + (R + x_R)^2 = b^2 \\)";
    var pythInR = "\\(h^2 + {x_R}^2 = R^2 \\)";
    var pythInR2 = "\\(h^2  = R^2 -  {x_R}^2\\)";

    var pythInAB = "\\( \\Biggl \\{ \\begin{gather*} R^2 -  {x_R}^2 + (R - x_R)^2 = a^2 \\enspace \\enspace \\enspace \\enspace (5) \\\\ R^2 -  {x_R}^2 + (R + x_R)^2 = b^2 \\enspace \\enspace \\enspace \\enspace(6) \\end{gather*} \\)";
    
    var aSquPlusBSqu = "\\( a^2 + b ^2 = R^2 -  {x_R}^2 + (R - x_R)^2 + R^2 -  {x_R}^2 + (R + x_R)^2  \\)";
    var idRem = "\\( (a+b)^2 = a^2 + 2ab + b^2\\)";
    var idRem2 = "\\((a-b)^2  = a^2 - 2ab + b^2\\)";

    var aSquPlusBSqu2 = "\\( a^2 + b ^2 = R^2 -  {x_R}^2 + R^2 - 2R.x_R + {x_R}^2 + R^2 -{x_R}^2 + R^2 + 2R.x_R + {x_R}^2  \\)";
    var aSquPlusBSqu3 = "\\( a^2 + b ^2 = 4R^2  \\)";

    var aSquPlusBSqu4 = "\\( a^2 + b ^2 = (2R)^2  \\)";
    var aSquPlusBSqu5 = "\\( c = 2R \\)";
    var aSquPlusBSqu6 = "\\( a^2 + b ^2 = c^2  \\)";


    return (
        <> 
            <Title1 title={"Contexte"} />
            <p>On dessine un cercle dans un repère <MathJaxInline toShow={"$\\vec{x}, \\vec{y}$"} />, centré en <MathJaxInline toShow={"$0$"} />.</p>
            <p>On y inscrit de même un triangle formé par <MathJaxInline toShow={"$\\{a,b,c\\}$"} />, avec le plus grand côté <MathJaxInline toShow={"$c$"} /> comme diamètre du cercle.</p>
            <ImageZoom src={demoTriangleRectangleDansCercle} name="Un triangle formé par {a, b, c} dans un cercle avec c comme diamètre du cercle" n={++n} />
            
            <p>On va chercher à démontrer que le triangle formé par <MathJaxInline toShow={"$\\{a,b,c\\}$"} /> est rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />.</p>
            <p>Pour cela, on va appliquer <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/demonstration-de-la-reciproque`} external>la réciproque du théorème de Pythagore</Link> et ainsi montrer que :</p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={pyth} />
            </Container>
            <p>Et d'après la réciproque du théorème de Pythagore, cela impliquera qu'on aura un angle droit entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />, et donc que le triangle formé par <MathJaxInline toShow={"$\\{a,b,c\\}$"} /> sera rectangle entre <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} />. </p>

            <Title1 title={"Démonstration"} />
            <p>Sur la figure ci-dessus, on y projète la hauteur <MathJaxInline toShow={"$h$"} /> sur l'axe <MathJaxInline toShow={"$\\vec{x}$"} /> qui forme alors un angle droit entre <MathJaxInline toShow={"$\\vec{x}$"} /> et <MathJaxInline toShow={"$h$"} />.</p>
            <p>On peut alors appliquer <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/presentation`} external>le théorème de Pythagore</Link> sur trois triangles rectangles :</p>
            <p>- celui formé par <MathJaxInline toShow={"$\\{ h, (R - x_R), a \\}$"} /></p>
            <p>- celui formé par <MathJaxInline toShow={"$ \\{h, (R + x_R), b \\} $"} /></p>
            <p>- celui formé par <MathJaxInline toShow={"$ \\{h, x_R, R \\} $"} /></p>
            <p>On pose les trois équations <MathJaxInline toShow={"$(1), (2), (3)$"} /> :</p>
            <MathJaxDisplay toShow={pythInA} fRef={1} demo />
            <MathJaxDisplay toShow={pythInB} fRef={2} demo />
            <MathJaxDisplay toShow={pythInR} fRef={3} demo />
            <p>On peut arranger l'équation <MathJaxInline toShow={"$(3)$"} /> en </p>
            <MathJaxDisplay toShow={pythInR2} fRef={4} demo />
            <p>On va alors injecter l'expression de <MathJaxInline toShow={"$h^2$"} /> de l'équation <MathJaxInline toShow={"$(4)$"} /> <MathJaxInline toShow={"$(4)$"} /> dans <MathJaxInline toShow={"$(1)$"} /> et <MathJaxInline toShow={"$(2)$"} /> pour obtenir deux nouvelles équations :</p>
            <MathJaxDisplay toShow={pythInAB} demo />

            <Title2 title={"Calcul de a² + b²"} />
            <p>Grâce aux deux équations <MathJaxInline toShow={"$(5), (6) $"} />, on peut calculer <MathJaxInline toShow={"$a^2 + b^2$"} /> : </p>
            <MathJaxDisplay toShow={aSquPlusBSqu} demo />
            <Aside>
                <p>On sait développer des additions au carré grâce aux <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.ELEM_CALCULUS}/les-identites-remarquables`} external>identités remarquables</Link> que :</p>
                <Container className="Focus LittleFocus">
                    <MathJaxDisplay toShow={idRem} />
                    <MathJaxDisplay toShow={idRem2} />
                </Container>
                <p>Attention, ici <MathJaxInline toShow={"$a $"} /> et <MathJaxInline toShow={"$b $"} /> ne sont pas les mêmes que dans notre problème !</p>
            </Aside>
            <p>On va alors développer les deux expressions mises au carré :</p>
            <MathJaxDisplay toShow={aSquPlusBSqu2} demo />
            <MathJaxDisplay toShow={aSquPlusBSqu3} demo />
            <MathJaxDisplay toShow={aSquPlusBSqu4} demo />
            <Aside>
                <p>Or, on sait que :</p>
                <MathJaxDisplay toShow={aSquPlusBSqu5} demo />
                <p>Car <MathJaxInline toShow={"$c $"} /> est le diamètre du cercle.</p>
            </Aside>
            <p>Soit :</p>
            <MathJaxDisplay toShow={aSquPlusBSqu6} demo />
            <p>Nous avons bien prouvé l'égalité : </p>
            <Container className="Focus LittleFocus">
                <MathJaxDisplay toShow={pyth} />
            </Container>
            <p>Grâce à <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PYTHAGORE}/demonstration-de-la-reciproque`} external>la réciproque du théorème de Pythagore</Link>, on a bien prouvé qu'un triangle inscrit dans un cercle, avec le plus grand côté comme diamètre du cercle est bien un triangle rectangle.</p>
            <ImageZoom src={demoTriangleRectangleDansCercleFin} name="Un triangle formé par {a, b, c} dans un cercle avec c comme diamètre du cercle est rectangle entre a et b" n={++n} />
        </>
    );

}

export default DemonstrationDuTriangleRectangleDansLeCercle;