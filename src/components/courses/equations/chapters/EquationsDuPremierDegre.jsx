import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, CartesianGrid, Tooltip, Line } from 'recharts';
import BlurryingSpinner from '../../../immutable/spinners/BlurryingSpinner';

const EquationsDuPremierDegre = () => {

    var equPremierDeg = "\\(f(x) = ax + b\\)";
    var equBase = "\\(f(x) = 2x + 3\\)";
    var equBaseEquals0 = "\\(2x + 3 = 0\\)";
    var equBaseMinus3 = "\\(2x + 3 {\\color{#E55151}{ - 3}} = 0 {\\color{#E55151}{ - 3}}\\)";
    var equBaseMinus32 = "\\(2x = - 3\\)";
    var equBaseMinus32divBy2 = "\\(\\frac{2x}{{\\color{#E55151}{ 2}}} = \\frac{-3}{{\\color{#E55151}{ 2}}} \\)";
    var equBaseMinus32divBy22 = "\\(x = -\\frac{3}{2} \\)";

    const [ab, setAb] = React.useState([1, 1]);
    const [isLoading, setIsLoading] = React.useState(false);

    var f = 
        {
            mathJaxTitle: `${ab[0] === 0 || ab[0] === 1 ? "" : ab[0]} ${ab[0] === 0 ? "" : "x"} ${ab[1] > 0 && ab[0] !== 0 ? "+" : "" } ${ab[1] === 0 ? "" : ab[1]}`,
            color: "Green",
            formula: (x) => {return ab[0]*x + ab[1]},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty; +\\infty[ \\)",
            derivative: ab[0],
            primitive: `${ab[0]} \\frac{x^2}{2} + ${ab[1]}.x + K"`,
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
            scale : 5,
            step : 1,
            width: 800,
            height: 400,
            xInterval: 1,
            aspect: 1
        }

    const [fData, setFData] = React.useState({});

    React.useEffect(() => {
        setIsLoading(true);
    }, [ab]);

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
        setIsLoading(false);
    }, [ab]);

    console.log(fData)
    console.log(isLoading)


    return  <>
                <p>
                    Les équations (par extensions les inéquations) nous permettent d'avoir une expression contenant des variables.
                    {"\n"} Par la suite, nous allons pouvoir résoudre ces équations en isolant une ou plusieurs variables.
                    {"\n"} On appelle cependant équation du premier degré, une équation ne comprenant qu'une seule variable, généralement <MathJaxInline toShow={"$x$"} />, sans autre complexité (exposant, racine carrée...etc).
                </p>
                <p>On aura une expression de ce type:</p>
                <MathJaxDisplay toShow={equPremierDeg} demo />
                <p>Avec <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> des nombres réels :</p>

                <p className="Title1">a) Résolution d'équations du premier degré</p>
                <p>Nous allons prendre par exemple cette fonction :</p>
                <MathJaxDisplay toShow={equBase} demo />
                <p>Nous allons essayer de résoudre <MathJaxInline toShow={"$f(x)=0$"} />, et ainsi trouver une valeur pour <MathJaxInline toShow={"$x$"} />.</p>
                <p>On a alors :</p>
                <MathJaxDisplay toShow={equBaseEquals0} demo />
                <p>Le but ici est d'isoler la variable <MathJaxInline toShow={"$x$"} />.</p>
                <p>Pour cela, on va d'abord se débarasser du nombre <MathJaxInline toShow={"$3$"} /> en le retirant  de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus3} demo />
                <p>Ce qui nous donne :</p>
                <MathJaxDisplay toShow={equBaseMinus32} demo />
                <p>Maintenant, nous allons transformer <MathJaxInline toShow={"$2x$"} /> en <MathJaxInline toShow={"$x$"} /> en divisant par <MathJaxInline toShow={"$2$"} /> de chaque côté :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy2} demo />
                <p>Soit :</p>
                <MathJaxDisplay toShow={equBaseMinus32divBy22} demo />
                <p>En conclusion :</p>
            
                <Container className="Focus">
                    <MathJaxDisplay toShow={equBaseEquals0} />
                    <MathJaxDisplay toShow={"$Lorsque$"} />
                    <MathJaxDisplay toShow={equBaseMinus32divBy22} />
                </Container>

                <p className="Title1">b) Aspect des équations du premier degré</p>
                <p>
                    Les fonctions qui sont de type <MathJaxInline toShow={"$f(x) = ax + b$"} /> sont appelées fonctions affines, et forment des droites.
                    {"\n"}
                    Dans le cas où <MathJaxInline toShow={"$b = 0$"} />, elles sont alors appelées fonctions linéaires et sont de type <MathJaxInline toShow={"$f(x) = ax$"} />.
                </p>

                <Container className={`GraphTitle Focus${f.color}`}>
                    <MathJaxDisplay 
                        toShow={"\\(f(x) = " + f.mathJaxTitle + " \\)"} 
                        color={f.color}/>    
                </Container>

                {
                    isLoading ? 
                        <BlurryingSpinner /> :
                            
                                <LineChart className="Graph"
                                    width={f.width}
                                    height={f.height}
                                    data={fData}
                                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Line 
                                        type={"natural"} 
                                        dataKey="y" 
                                        stroke={f.color === "Default" ? 'blue' : f.color} 
                                        dot={true} />
                                    <XAxis 
                                        dataKey="x" 
                                        interval={0}
                                        type="number"
                                        label="x"
                                        domain={[-10, 10]}
                                        position="bottom"/>
                                    <YAxis 
                                        type="number"
                                        domain={[-20, 20]}
                                        label="y" 
                                        position="left"   />
                                    <Tooltip /> 
                                    <ReferenceLine stroke="grey" x={0} />
                                    <ReferenceLine stroke="grey" y={0} />
                                </LineChart>
                           
                }
                    
                <p>Tentez-vous même de changer les valeurs pour voir comment la droite se comporte dans un repère :</p>

                <div className="RowAlignedButton">
                    <Button className="DefaultButton MiniButton" onClick={() => setAb([ab[0] - 1, ab[1]])} >-</Button>
                    <MathJaxInline toShow={`$a = ${ab[0]}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setAb([ab[0] + 1, ab[1]])} >+</Button>
                    
                    <Button className="DefaultButton MiniButton" onClick={() => setAb([ab[0], ab[1] - 1])} >-</Button>
                    <MathJaxInline toShow={`$b= ${ab[1]}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setAb([ab[0], ab[1] + 1])} >+</Button>
                    {/* <Button className="DefaultButton" >Retracer la courbe</Button> */}
                </div>
                <p>Si <MathJaxInline toShow={"$b=0 $"} />, la droite passera par l'origine <MathJaxInline toShow={"$ (0 ; 0) $"} />.</p>
                <p>
                    Si <MathJaxInline toShow={"$a$"} /> est positif, la droite sera croissante.
                    {"\n"}
                    Si <MathJaxInline toShow={"$a$"} /> est négatif, la droite sera décroissante.
                    {"\n"}
                    Enfin si <MathJaxInline toShow={"$a = 0$"} />, la droite sera plate.
                </p>
            </>
}

export default EquationsDuPremierDegre;