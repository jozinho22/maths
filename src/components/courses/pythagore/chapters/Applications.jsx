import React from 'react';
import { Container } from 'react-bootstrap'
import ImageZoom from '../../ImageZoom';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

import pythagoreApplication from '../assets/pythagoreApplication.png';
import pythagoreApplication2 from '../assets/pythagoreApplication2.png';

import pythagoreApplication3d from '../assets/pythagoreApplication3d.png';
import pythagoreApplication3d2 from '../assets/pythagoreApplication3d2.png';

const Applications = () => {

    var ab22d = "\\(AB^2 =  AC^2 + BC^2  \\)";
    var ab22d2 = "\\(AB^2 =  (x_b - x_a)^2 + (y_b - y_a)^2  \\)";
    var ab22d3 = "\\(AB = \\sqrt{ (x_b - x_a)^2 + (y_b - y_a)^2 }  \\)";

    var abbaX = "\\( CA = x_a - x_b = -(x_b - x_a) \\)";
    var abbaY = "\\( CB = y_a - y_b = -(y_b - y_a) \\)";
    var abbaX2 = "\\( (-(x_b - x_a))^2 = (x_b - x_a)^2 \\)";
    var abbaY2 = "\\( (-(y_b - y_a))^2 = (y_b - y_a)^2 \\)";

    var ac = "\\( AC = \\sqrt{ (x_b - x_a)^2 + (y_b - y_a)^2 } \\)";
    var ab23d = "\\(AB^2 =  AC^2 + BC^2  \\)";
    var ab23d2 = "\\(AB^2 = (\\sqrt{ (x_b - x_a)^2 + (y_b - y_a)^2 })^2 + (z_b - z_a)^2  \\)";
    var ab23d3 = "\\(AB^2 = (x_b - x_a)^2 + (y_b - y_a) + (z_b - z_a)^2  \\)";
    var ab23d4 = "\\(AB = \\sqrt{ (x_b - x_a)^2 + (y_b - y_a)^2  + (z_b - z_a)^2 }  \\)";

    return (
        <> 
            <p className="Title1">Mesurer une longueur dans le plan</p>    
            <ImageZoom src={pythagoreApplication} name="Une longueur AB dans le plan" n={6} />
            <p>Nous disposons d'un plan à deux dimensions <MathJaxInline toShow={"$\\vv{x}, \\vv{y}$"} /> dans lequel nous avons placé deux points <MathJaxInline toShow={"$A$"} /> et <MathJaxInline toShow={"$B$"} />. </p>
            <p>En prolongeant <MathJaxInline toShow={"$A$"} /> jusque <MathJaxInline toShow={"$x_b$"} /> et <MathJaxInline toShow={"$B$"} /> jusque <MathJaxInline toShow={"$y_a$"} />, on obtient un troisième point <MathJaxInline toShow={"$C$"} />.</p>
            <ImageZoom src={pythagoreApplication2} name="Une longueur AB dans le plan (bis)" n={7} />
            <p>Sur la figure ci-dessus, nous avons un triangle rectangle formé par <MathJaxInline toShow={"$AC$"} />, <MathJaxInline toShow={"$BC$"} /> et <MathJaxInline toShow={"$AB$"} /> représentant l'hypothénuse.</p>
            <p>En appliquant tout simplement le théorème de Pythagore dans ce triangle on a :</p>
            <MathJaxDisplay toShow={ab22d} demo />
            <MathJaxDisplay toShow={ab22d2} demo />
            <p>Soit </p>
            <Container className="Focus">
                <MathJaxDisplay toShow={ab22d3} />
            </Container>
            <p>Si l'on inverse <MathJaxInline toShow={"$A$"} /> et <MathJaxInline toShow={"$B$"} /> on aura le même résultat puisqu'on aura toujours : </p>
            <MathJaxDisplay toShow={ab22d} demo />

            <p className="Title1">Mesurer une droite dans l'espace</p>    
            <ImageZoom src={pythagoreApplication3d} name="Une longueur AB dans l'espace" n={9} />
            <p>Nous souhaitons à présent calculer la droite AB, mais dans un espace tridimensionnelle.</p>
            <p>Nous avons ajouté la longueur précédemment calculée (reportée pour former à présent <MathJaxInline toShow={"$AC$"} />) afin de former un nouveau triangle <MathJaxInline toShow={"$ABC$"} /> .</p>
            <ImageZoom src={pythagoreApplication3d2} name="Une longueur AB dans l'espace (bis)" n={10} />
            <p>On sait par le calcul précédent que :</p>
            <MathJaxDisplay toShow={ac} demo />
            <p>Ensuite, on applique comme juste avant le théorème dans le triangle <MathJaxInline toShow={"$ABC$"} /> : </p>
            <MathJaxDisplay toShow={ab23d} demo />
            <MathJaxDisplay toShow={ab23d2} demo />
            <MathJaxDisplay toShow={ab23d3} demo />
            <Container className="Focus">
                <MathJaxDisplay toShow={ab23d4} />
            </Container>
        </>
    );

}

export default Applications;