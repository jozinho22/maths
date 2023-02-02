import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, CartesianGrid, Tooltip, Line } from 'recharts';
import ImageZoom from '../../ImageZoom';

import coefficientDirecteurCalculus from '../assets/coefficientDirecteurCalculus.png';
import differentsCoefDirecteurs from '../assets/differentsCoefDirecteurs.png';
import ordonneeAtOrigin from '../assets/ordonneeAtOrigin.png';

const AspectDesEquationsDuSecondDegre = () => {

    const [a, setA] = React.useState(1);
    const [b, setB] = React.useState(1);
    const [c, setC] = React.useState(1);

    var n = 0;

    var mobile = document.body.offsetWidth < 450;

    var tauxVar = "\\(a = \\frac{\\Delta y}{\\Delta x}\\)";
    var tauxVar2 = "\\(a = \\frac{y_b - y_a}{x_b - x_a}\\)";
    var ordAtOrigin = "\\(f(0) = a \\times 0 + b\\)";
    var ordAtOrigin2 = "\\(f(0) = b\\)";

    var f = 
        {
            mathJaxTitle: `${a === 0 || a === 1 || a === -1 ? "" : a} ${a === 0 ? "" : a === -1 ? "-x" : "x"} ${b > 0 && a !== 0 ? "+" : "" } ${b === 0 ? "" : b}`,
            color: "Green",
            formula: (x) => {return a*x^2 + b*x + c},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty; +\\infty[ \\)",
            derivative: a,
            primitive: `${a} .\\frac{x^3}{3} + ${b}.\\frac{x^2}{2} +  ${c}.x +  K"`,
            limits: [
                {
                    id: 0,
                    where: "-\\infty",
                    value: "-\\infty"
                },
                {
                    id: 1,
                    where: "+\\infty",
                    value: "+\\infty"
                }

            ],
            scale : 10,
            step : 1,
            width: 800,
            mobileWidth: 300,
            height: 400,
            mobileHeight: 150,
            xInterval: 1,
            aspect: 1
        }

    const [fData, setFData] = React.useState({});

    React.useEffect(() => {
        var scale = f.scale;
        var step = f.step;

        var it = scale / step;

        var x;
        if(!f.beginAtZero) {
            x = -scale;
        } 

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
                    Les fonctions qui sont de type <MathJaxInline toShow={"$f(x) = ax^2 + bx + c $"} /> sont appelées fonctions polynômes, et forment des paraboles dont <MathJaxInline toShow={"$a$"} /> va déterminer le sens.
                </p>

                <p className="Title1">a) Aspect dans un repère</p>
                <Container className={`GraphTitle Focus${f.color}`}>
                    <MathJaxDisplay 
                        toShow={"\\(f(x) = " + f.mathJaxTitle + " \\)"} 
                        color={f.color}/>    
                </Container>
                
                <LineChart className="Graph"
                    width={!mobile ? f.width : f.mobileWidth}
                    height={!mobile ? f.height : f.mobileHeight}
                    data={fData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Line 
                        type={"natural"} 
                        dataKey="y" 
                        stroke={f.color === "Default" ? 'blue' : f.color} 
                        dot={mobile ? false : true} />
                    <XAxis 
                        dataKey="x" 
                        interval={0}
                        type="number"
                        label="x"
                        domain={[-10, 10]}
                        position="bottom"
                        padding={{ top: 100, right: 50 }} />
                    <YAxis 
                        type="number"
                        domain={[-20, 20]}
                        label="y" 
                        position="left"   />
                    <Tooltip /> 
                    <ReferenceLine stroke="red" x={0} />
                    <ReferenceLine stroke="red" y={0} />
                </LineChart>
             
                <p>Tentez-vous même de changer les valeurs pour voir comment la droite se comporte dans un repère :</p>

                <div className="RowAlignedButton">
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a - 1)} >-</Button>
                    <MathJaxInline toShow={`$a = ${a}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a + 1)} >+</Button>
                    
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b - 1)} >-</Button>
                    <MathJaxInline toShow={`$b= ${b}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b + 1)} >+</Button>

                    <Button className="DefaultButton MiniButton" onClick={() => setC(c - 1)} >-</Button>
                    <MathJaxInline toShow={`$b= ${c}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setC(c + 1)} >+</Button>
                </div>


                <p className="Title1">b) Explications des nombres <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /></p>
                <p><MathJaxInline toShow={"$a$"} /> est appelé coefficient directeur, il donnera l'aspect de la droite.</p>
                <p><MathJaxInline toShow={"$b$"} /> est appelé l'ordonnée à l'origine, il sera le résultat de <MathJaxInline toShow={"$f(0)$"} />.</p>
                
                <p className="Title2">Le coefficient directeur <MathJaxInline toShow={"$a$"} /></p>
                <p>Le coefficient directeur détermine le taux de variation de la droite, il est aussi appelé pente car comme une pente sur une route, on observe de combien on monte comparé à ce que l'on avance horizontalement.</p>
                <p>Il se détermine de la manière suivante : </p>
                <p>Il suffit de prendre deux points <MathJaxInline toShow={"$A(x_a; y_a)$"} /> et <MathJaxInline toShow={"$B(x_b; y_b)$"} /> de la droite, et de calculer le ratio de leur différence.</p>
                <MathJaxDisplay toShow={tauxVar} demo />  
                <MathJaxDisplay toShow={tauxVar2} demo />          
                <ImageZoom src={coefficientDirecteurCalculus} name="Calcul du coefficient directeur" n={++n} />
                <p>Il n'y pas d'importance ici dans l'ordre des points car si l'on inverse l'ordre, les signes <MathJaxInline toShow={"$-$"} /> s'annuleront au dénominateur et au numérateur.</p>
                <p>
                    Si <MathJaxInline toShow={"$a > 0$"} />, la droite sera croissante.
                    {"\n"}
                    Si <MathJaxInline toShow={"$a < 0$"} />, la droite sera décroissante.
                    {"\n"}
                    Enfin si <MathJaxInline toShow={"$a = 0$"} />, la droite sera plate.
                </p>
                <ImageZoom src={differentsCoefDirecteurs} name="Aspect des droites selon différents coefficients directeurs" n={++n} />
                <p>Si <MathJaxInline toShow={"$b=0 $"} />, la droite passera par l'origine <MathJaxInline toShow={"$ (0 ; 0) $"} />.</p>
                
                <p className="Title2">L'ordonnée à l'origine <MathJaxInline toShow={"$b$"} /></p>
                <p>L'ordonnée à l'origine sera simplement le résultat de <MathJaxInline toShow={"$f(0)$"} />.</p>
                <p>Effectivement, pour <MathJaxInline toShow={"$x = 0$"} /> :</p>
                <MathJaxDisplay toShow={ordAtOrigin} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={ordAtOrigin2} demo />
                <ImageZoom src={ordonneeAtOrigin} name="L'ordonnée à l'origine" n={++n} />
            </>
}

export default AspectDesEquationsDuSecondDegre;