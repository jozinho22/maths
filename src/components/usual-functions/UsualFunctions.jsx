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
    var usualFunctions = [
        {
            id: ++i,
            mathJaxTitle: "\\(x^2 \\)",
            color: getFunctionColor(i),
            formula: (x) => {return x*x},
            scale : 10,
            step : 1,
            height: 300,
            xInterval: 4
        },
        {
            id: ++i,
            mathJaxTitle: "\\(x^3 \\)",
            color: getFunctionColor(i),
            formula: (x) => {return x*x*x},
            scale : 10,
            step : 1,
            height: 400,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\sqrt(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sqrt(x)},
            scale : 30,
            step : 1,
            height: 200,
            xInterval: 9,
            beginAtZero: true
        },
        {
            id: ++i,
            mathJaxTitle: "\\(e^x \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.exp(x)},
            scale : 3,
            step : 1,
            height: 300,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(ln(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.log(x)},
            scale : 50,
            step : 1,
            height: 200,
            xInterval: 8,
            beginAtZero: true,
            exclude: 0
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\frac{1}{x} \\)",
            color: getFunctionColor(i),
            formula: (x) => {return 1 / x},
            scale : 100,
            step : 1,
            height: 300,
            xInterval: 9,
            exclude: 0
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\cos(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.cos(x)},
            type: 'trigo',
            scale : 2,
            step : 1/4,
            height: 150,
            xInterval: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\sin(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sin(x)},
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

        var x = 0;
        if(!f.beginAtZero) {
            x = -scale;
        } 

        var xTrigo = -2*step;

        var datas = []
        for(var k = -it; k <= it; k++) {

            if(f.type === 'trigo') {
                let d = {
                    x: (xTrigo === 0) ? 0 : xTrigo +'π',
                    y: f.formula(xTrigo*Math.PI),
                }
                datas.push(d);
                xTrigo = xTrigo + step;
            } else {
                if(x !== f.exclude) {
                    let d = {
                        x: Math.floor(x),
                        y: f.formula(x),
                    }
                    datas.push(d);
                }
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

    const getGraphTitle = (title) => {
        var index = title.indexOf("(");
        var graphTitle = title.slice(0, index + 1) + "f(x) = " + title.slice(index + 1);

        return graphTitle;
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
                            <MathJaxDisplay toShow={f.mathJaxTitle} />
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
                            <YAxis />
                            <ReferenceLine x={0} />
                            <ReferenceLine y={0} />
                        </LineChart>
                    </div>
                </>
                : <></>
            }
        </>
    );
}

export default UsualFunctions2;