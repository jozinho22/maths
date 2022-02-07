import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { LineChart, XAxis, YAxis, ReferenceLine, Tooltip, CartesianGrid, Line } from 'recharts';

import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';

import './UsualFunctions.css';

const UsualFunctions2 = () => {

    const getFunctionColor = (id) => {
        var modulo = 3;
        if(id % modulo === 0) {
            return "Default";
        } else if(id % modulo === 1) {
            return "Green";
        } else if(id % modulo === 2) {
            return "Red";
        } 
    } 

    var i = -1;
    var j = -1;
    var usualFunctions = [
        {
            id: ++i,
            mathJaxTitle: "x^2",
            color: getFunctionColor(i),
            formula: (x) => {return x*x},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty, +\\infty[ \\)",
            derivative: "2x",
            primitive: "\\frac{x^3}{3} + K",
            limits: [
                {
                    id: j++,
                    where: "-\\infty",
                    value: "+\\infty"
                },
                {
                    id: j++,
                    where: "+\\infty",
                    value: "+\\infty"
                }

            ],
            scale : 10,
            step : 1,
            height: 300,
            xInterval: 4
        },
        {
            id: ++i,
            mathJaxTitle: "x^3",
            color: getFunctionColor(i),
            formula: (x) => {return x*x*x},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty, +\\infty[ \\)",
            derivative: "3x^2",
            primitive: "\\frac{x^4}{4} + K",
            limits: [
                {
                    id: j++,
                    where: "-\\infty",
                    value: "-\\infty"
                },
                {
                    id: j++,
                    where: "+\\infty",
                    value: "+\\infty"
                }

            ],
            scale : 10,
            step : 1,
            height: 400,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\sqrt(x)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sqrt(x)},
            definition: "\\(\\xi = \\mathbb{R^+} = [ 0, +\\infty[ \\)",
            derivative: "\\frac{1}{2\\sqrt{x}}",
            primitive: "\\frac{2x^{\\frac{3}{2}}}{3} + K",
            limits: [
                {
                    id: j++,
                    where: "+\\infty",
                    value: "+\\infty"
                }

            ],
            scale : 100,
            step : 1,
            height: 200,
            xInterval: 9,
            beginAtZero: true
        },
        {
            id: ++i,
            mathJaxTitle: "e^x",
            color: getFunctionColor(i),
            formula: (x) => {return Math.exp(x)},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty, +\\infty[ \\)",
            derivative: "e^x",
            primitive: "e^x+ K",
            limits: [
                {
                    id: j++,
                    where: "-\\infty",
                    value: "-\\infty"
                },
                {
                    id: j++,
                    where: "+\\infty",
                    value: "+\\infty"
                }

            ],
            scale : 3,
            step : 1,
            height: 300,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "ln(x)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.log(x)},
            definition: "\\(\\xi = \\mathbb{R^{+*}} = ] 0, +\\infty[ \\)",
            derivative: "\\frac{1}{x}",
            primitive: "x(ln(x) - 1) + K",
            limits: [
                {
                    id: j++,
                    where: "0",
                    value: "-\\infty"
                },
                {
                    id: j++,
                    where: "+\\infty",
                    value: "+\\infty"
                }
            ],
            scale : 10,
            step : 0.1,
            height: 200,
            xInterval: 10,
            beginAtZero: true,
            exclude: 0
        },
        {
            id: ++i,
            mathJaxTitle: "\\frac{1}{x}",
            color: getFunctionColor(i),
            formula: (x) => {return 1 / x},
            definition: "\\(\\xi = \\mathbb{R} - \\{0\\} = \\mathbb{R^{*}} =  ]-\\infty, 0[\\bigcup] 0, +\\infty[ \\)",
            derivative: "-\\frac{1}{x^2}",
            primitive: "ln(|x|) + K",
            limits: [
                {
                    id: j++,
                    where: "-\\infty",
                    value: "0_{-}"
                },
                {
                    id: j++,
                    where: "0_{-}",
                    value: "-\\infty"
                },
                {
                    id: j++,
                    where: "0_{+}",
                    value: "+\\infty"
                },
                {
                    id: j++,
                    where: "+\\infty",
                    value: "0_{+}"
                }
            ],
            scale : 100,
            step : 1,
            height: 300,
            xInterval: 9,
            exclude: 0
        },
        {
            id: ++i,
            mathJaxTitle: "cos(x)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.cos(x)},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty, +\\infty[ \\)",
            derivative: "-sin(x)",
            primitive: "sin(x) + K",
            type: 'trigo',
            scale : 2,
            step : 1/4,
            height: 150,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "sin(x)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sin(x)},
            definition: "\\(\\xi = \\mathbb{R} = ]-\\infty, +\\infty[ \\)",
            derivative: "cos(x)",
            primitive: "-cos(x) + K",
            type: 'trigo',
            scale : 2,
            step : 1/4,
            height: 150,
            xInterval: 1
        }

    ];

    const [f, setF] = React.useState({});
    const [fData, setFData] = React.useState({});

    const type = "monotone";
    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center",
        fontSize: 12
      };

    React.useEffect(() => {

        var scale = f.scale;
        var step = f.step;

        var it = scale / step;

        var x;
        if(!f.beginAtZero) {
            x = -scale;
        } else {
            x = 0;
            it = it / 2;
        }

        var xTrigo = -2*step;

        var datas = []
        for(var k = -it; k <= it; k++) {

            if(f.type === 'trigo') {
                let d = {
                    x: (xTrigo === 0) ? 0 : xTrigo +'π',
                    y: f.formula(xTrigo*Math.PI)
                }
                datas.push(d);
                xTrigo = xTrigo + step;
            } else {
                let d = {
                    x: Math.floor(x),
                    y: x !== f.exclude ? f.formula(x) : undefined
                }
                datas.push(d);
                x = x + step;
            }
            

   /*          if(f.type === 'trigo') {
                xDatas.push(xTrigo +'PI');
                yDatas.push(f.formula(xTrigo*Math.PI));
                xTrigo = xTrigo + step;
            } else {}  

            } */
    
        } 

        console.log(datas)
        setFData(datas);


    }, [f]);

    const getButtonTitle = (exp) => {
        return "\\(" + exp + " \\)";
    }

    const getGraphTitle = (exp) => {
        return "\\(f(x) = " + exp + " \\)";
    }

    const getDerivativeExp = (derivative) => {
        return "\\(\\frac{d(f(x))}{dx} = " + derivative + " \\)";
    }

    const getPrimitiveExp = (primitive) => {
        return "\\(\\int f(x) \\mathrm{d}x = " + primitive + " \\)";
    }

    const getLimitExp = (where, value) => {
        var derivExp = "\\(\\lim_{x \\to " + where + "} f(x) = " + value + " \\)";
        console.log(derivExp)
        return derivExp;
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return(
        <>
            <Container className="UsualFunctionsButton">
                {
                    usualFunctions.map(f => (
                        <Button key={f.id}
                            className={`DefaultButton InColumnButton ${f.color}Button`}
                            onClick={() => setF(usualFunctions[f.id])} >
                            <MathJaxDisplay toShow={getButtonTitle(f.mathJaxTitle)} />
                        </Button>
                    ))
                }
            </Container>

            { !isEmpty(f) ?
                <>
                    <Container className="GraphTitle">
                        <MathJaxDisplay 
                            toShow={getGraphTitle(f.mathJaxTitle)} 
                            color={f.color}/>    
                    </Container>
                    
                    <div style={styles}>
                        <LineChart
                            width={500}
                            height={f.height}
                            data={fData}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                            <Line 
                                type={type} 
                                dataKey="y" 
                                stroke={f.color === "Default" ? 'blue' : f.color} 
                                dot={false} />
                            <XAxis 
                                dataKey="x" 
                                interval={f.xInterval} />
                            <YAxis 
                                 />
                            <ReferenceLine x={0} />
                            <ReferenceLine y={0} />
                        </LineChart>
                    </div>
                    <Container className="FunctionAttributes">
                        <p className="FunctionAttributesTitle">Définie sur</p> 
                        <MathJaxDisplay 
                            toShow={f.definition} 
                            color={f.color}/>  

                        <p className="FunctionAttributesTitle">Dérivée</p> 
                        <MathJaxDisplay 
                            toShow={getDerivativeExp(f.derivative)} 
                            color={f.color}/>    

                        <p className="FunctionAttributesTitle">Primitives</p> 
                        <MathJaxDisplay 
                            toShow={getPrimitiveExp(f.primitive)} 
                            color={f.color}/> 

                        <p className="FunctionAttributesTitle">Limites</p> 
                        {
                            f.limits !== undefined ?
                                
                                f.limits.map(limit => (
                                    <MathJaxDisplay 
                                        key={limit.id}
                                        toShow={getLimitExp(limit.where, limit.value)} 
                                        color={f.color}/> 
                                )) 
                                
                                    : <MathJaxDisplay 
                                            toShow={"\\(\\varnothing\\)"} 
                                            color={f.color}/> 
                        }
                   
                    </Container>
                </>
                : <p>Choisissez une fonction à afficher</p>
            }
        </>
    );
}

export default UsualFunctions2;