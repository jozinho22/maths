import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import ImageZoom from '../../helpers/ImageZoom';

import coefficientDirecteurCalculus from '../assets/coefficientDirecteurCalculus.png';
import differentsCoefDirecteurs from '../assets/differentsCoefDirecteurs.png';
import ordonneeAtOrigin from '../assets/ordonneeAtOrigin.png';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';
import FunctionDisplay from '../../usual-functions/helpers/FunctionDisplay';

const Aspect = () => {

    const [a, setA] = React.useState(1);
    const [b, setB] = React.useState(1);

    var n = 0;

    var tauxVar = "\\(a = \\frac{\\Delta y}{\\Delta x}\\)";
    var tauxVar2 = "\\(a = \\frac{y_b - y_a}{x_b - x_a}\\)";
    var ordAtOrigin = "\\(f(0) = a \\times 0 + b\\)";
    var ordAtOrigin2 = "\\(f(0) = b\\)";

    var equForA = "\\(f(x_A) = a.x_A + b \\)";
    var equForA2 = "\\( b = y_A - a.x_A\\)";
    var equForA3 = "\\( b = y_A - \\frac{y_b - y_a}{x_b - x_a}.x_A\\)";

    var equForB = "\\(f(x_B) = a.x_B + b \\)";

    var f = 
        {
            mathJaxTitle: `${a === 0 || a === 1 || a === -1 ? "" : a} ${a === 0 ? "" : a === -1 ? "-x" : "x"} ${b > 0 && a !== 0 ? "+" : "" } ${b === 0 ? "" : b}`,
            formula: (x) => {return a*x + b},
            scale : 10,
            step : 1,
            xInterval: 1,
            aspect: 2
        }

    const [fData, setFData] = React.useState({});

    React.useEffect(() => {
        var scale = f.scale;
        var step = f.step;

        var it = scale / step;

        var x = -scale;

        var datas = []
        for(var k = -it; k <= it; k++) {
            
            let d = {
                x: Math.floor(x),
                y: x !== f.exclude ? f.formula(x) : undefined
            }
            datas.push(d);
            x = x + step;
        } 
        setFData(datas);
    }, [a, b]);

    return  <>
                <p>
                    Les fonctions qui sont de type <MathJaxInline toShow={"$f(x) = ax + b$"} /> sont appelées fonctions affines, et forment des droites.
                    {"\n"}{"\n"}
                    Dans le cas où <MathJaxInline toShow={"$b = 0$"} />, elles sont alors appelées fonctions linéaires.
                    {"\n"}
                    Elles forment aussi des droites et sont de type <MathJaxInline toShow={"$f(x) = ax$"} />.
                </p>

                <Title1 title={"a) Aspect dans un repère"} />

                <FunctionDisplay f={f} fData={fData} reduced />
                
                <p>Tentez-vous même de changer les valeurs pour voir comment la droite se comporte dans un repère :</p>

                <div className="RowAlignedButtons">
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a - 1)} >-</Button>
                    <MathJaxInline toShow={`$a = ${a}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a + 1)} >+</Button>
                    
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b - 1)} >-</Button>
                    <MathJaxInline toShow={`$b= ${b}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b + 1)} >+</Button>
                    {/* <Button className="DefaultButton" >Retracer la courbe</Button> */}
                </div>

                <Title1 title={"b) Explications des nombres a et b"} />
                <p><MathJaxInline toShow={"$a$"} /> est appelé coefficient directeur, il donnera l'aspect de la droite.</p>
                <p><MathJaxInline toShow={"$b$"} /> est appelé l'ordonnée à l'origine, il sera le résultat de <MathJaxInline toShow={"$f(0)$"} />.</p>
                
                <Title2 title={"Le coefficient directeur a"} />
                <p>Le coefficient directeur détermine le taux de variation de la droite, il est aussi appelé pente car comme une pente sur une route, on observe de combien on monte comparé à ce que l'on avance horizontalement.</p>
                <p>Il se détermine de la manière suivante : </p>
                <p>Il suffit de prendre deux points <MathJaxInline toShow={"$A(x_a; y_a)$"} /> et <MathJaxInline toShow={"$B(x_b; y_b)$"} /> de la droite, et de calculer le ratio de leur différence.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={tauxVar}  /> 
                </Container>
                <p>Ou encore : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={tauxVar2}  /> 
                </Container>
                <ImageZoom src={coefficientDirecteurCalculus} name="Calcul du coefficient directeur" n={++n} />
                <p>Il n'y pas d'importance ici dans l'ordre des points car si l'on inverse l'ordre, les signes <MathJaxInline toShow={"$-$"} /> s'annuleront au dénominateur et au numérateur.</p>
                
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 1 : a > 0}$"} /></p>
                <p>La droite sera croissante.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 2 : a = 0}$"} /></p>
                <p>La droite sera plate.</p>
                <p><MathJaxInline toShow={"$\\underline{cas \\enspace 3 : a < 0}$"} /></p>
                <p>La droite sera décroissante.</p>
                
                <ImageZoom src={differentsCoefDirecteurs} name="Aspect des droites selon différents coefficients directeurs" n={++n} />
                <p>Si <MathJaxInline toShow={"$b=0 $"} />, la droite passera par l'origine <MathJaxInline toShow={"$ (0 ; 0) $"} />.</p>
                
                <Title2 title={"L'ordonnée à l'origine b"} />
                <p>L'ordonnée à l'origine sera simplement le résultat de <MathJaxInline toShow={"$f(0)$"} />.</p>
                <p>Effectivement, pour <MathJaxInline toShow={"$x = 0$"} /> :</p>
                <MathJaxDisplay toShow={ordAtOrigin} demo />
                <p>Soit :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={ordAtOrigin2}  /> 
                </Container>
                <ImageZoom src={ordonneeAtOrigin} name="L'ordonnée à l'origine" n={++n} />
                <p>Ce sera le point d'intersection entre l'axe des ordonnées et la droite, d'où son nom.</p>
                <p>Pour trouver <MathJaxInline toShow={"$b$"} /> à l'aide des deux points <MathJaxInline toShow={"$A$"} /> et <MathJaxInline toShow={"$B$"} /> dont on dispose, on part du principe qu'ils sont tous les deux sur la droite, ils répondent donc à l'équation <MathJaxInline toShow={"$f(x) = ax + b$"} />, et que l'on peut alors écrire :</p>
                <MathJaxDisplay toShow={equForA} demo />  
                <MathJaxDisplay toShow={equForB} demo /> 
                <p>On peut prendre soit l'une, soit l'autre. Prenons la première :</p> 
                <MathJaxDisplay toShow={equForA} demo />  
                <MathJaxDisplay toShow={equForA2} demo />
                <p>Si on n'a pas encore calculé <MathJaxInline toShow={"$a$"} />, on peut l'avoir sous cette forme :</p>  
                <Container className="Focus">
                    <MathJaxDisplay toShow={equForA3}  /> 
                </Container>
            </>
}

export default Aspect;