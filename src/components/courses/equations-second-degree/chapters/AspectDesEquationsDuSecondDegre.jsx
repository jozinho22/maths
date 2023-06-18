import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, CartesianGrid, Tooltip, Line } from 'recharts';
import ImageZoom from '../../ImageZoom';
import Title1 from '../../helpers/Title1';
import coefficientDirecteurCalculus from '../assets/coefficientDirecteurCalculus.png';
import differentsCoefDirecteurs from '../assets/differentsCoefDirecteurs.png';
import ordonneeAtOrigin from '../assets/ordonneeAtOrigin.png';
import Title2 from '../../helpers/Title2';

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

                <Title1 title={"a) Aspect dans un repère"} />
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

                <div className="RowAlignedButtons">
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a - 1)} >-</Button>
                    <MathJaxInline toShow={`$a = ${a}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a + 1)} >+</Button>
                    
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b - 1)} >-</Button>
                    <MathJaxInline toShow={`$b= ${b}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b + 1)} >+</Button>

                    <Button className="DefaultButton MiniButton" onClick={() => setC(c - 1)} >-</Button>
                    <MathJaxInline toShow={`$c= ${c}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setC(c + 1)} >+</Button>
                </div>

                <Title1 title={"b) Explications des nombres a et <MathJaxInline b"} />
                <p><MathJaxInline toShow={"$a$"} /> est appelé coefficient directeur, il donnera l'aspect de la droite.</p>
                <p><MathJaxInline toShow={"$b$"} /> est appelé l'ordonnée à l'origine, il sera le résultat de <MathJaxInline toShow={"$f(0)$"} />.</p>
                
                
            </>
}

export default AspectDesEquationsDuSecondDegre;