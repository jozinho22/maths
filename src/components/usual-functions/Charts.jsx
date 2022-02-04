import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';

import './Charts.css';

const Charts = () => {

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

    var i = 0;
    var usualFunctions = [
        {
            id: i,
            mathJaxTitle: "\\(x^2 \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return x*x}
        },
        {
            id: i,
            mathJaxTitle: "\\(x^3 \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return x*x*x}
        },
        {
            id: i,
            mathJaxTitle: "\\(\\sqrt(x) \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return Math.sqrt(x)}
        },
        {
            id: i,
            mathJaxTitle: "\\(e^x \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return Math.exp(x)}
        },
        {
            id: i,
            mathJaxTitle: "\\(ln(x) \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return Math.log(x)}
        },
        {
            id: i,
            mathJaxTitle: "\\(\\frac{1}{x} \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return 1 / x}
        },
        {
            id: i,
            mathJaxTitle: "\\(\\cos(x) \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return Math.cos(x)}
        },
        {
            id: i,
            mathJaxTitle: "\\(\\sin(x) \\)",
            color: getFunctionColor(i++),
            formula: (x) => {return Math.sin(x)}
        }

    ];

    const [scale, setScale] = React.useState(10);
    const [step, setStep] = React.useState(1);

    const [f, setF] = React.useState(usualFunctions[0]);

    const [data, setData] = React.useState({});

    React.useEffect(() => {

        console.log('reacrUseEff')
        console.log(f)

        const xAxis = [];
        const yAxis = [];

        for(var k = -scale; k <= scale; k = k + step) {
            xAxis.push(k);
            yAxis.push(f.formula(k));
        } 

        setData(
            {
                labels: xAxis,
                datasets: 
                    [
                        {
                            data: yAxis,
                            backgroundColor: [
                                f.color === 'Default' ? 'blue' : f.color
                            ],
                            borderColor: [
                                f.color === 'Default' ? 'blue' : f.color
                            ],
                            borderWidth: 0.2
                        }
                    ]
            }
        );
    }, [f, scale, step]);

    // Gestion de l'alerte rouge !!!
    React.useEffect(() => {
        if(step > scale) {
            lowStep();
        } 
    }, [scale, step]);

    const options = {
        maintainAspectRatio: true,
        responsive: true, 
        plugins: {
            legend: false // Hide legend
        }
    }

    const getGraphTitle = (title) => {
        var eqIndex = title.indexOf("(");
        var graphTitle = title.slice(0, eqIndex + 1) + "f(x) = " + title.slice(eqIndex + 1);

        return graphTitle;
    }

    const lowScale = (min, lowinBy) => {
   
        if(scale <= min) {
            return scale;
        } else {
            setScale(scale / lowinBy);
        }
    }

    const raiseScale = (max, raisinBy) => {
        if(scale > max) {
            return scale;
        } else {
            setScale(scale * raisinBy);
        }
    }

    const lowStep = () => {
        if(step > 0.25) {
            if(step <= 1) {
                setStep(step / 2);
            } else {
                setStep(step / 10);
            }
        } 
    }

    const raiseStep = () => {
        if(step === scale) {

        }
        if(step < 10) {
            if(step >= 1) {
                setStep(step * 10);
            } else {
                setStep(step * 2);
            }
        } 
    }

    console.log(0 % 4)
    console.log(1 % 4)
    console.log(2 % 4)
    console.log(3 % 4)


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

            {!isEmpty(data) ?
                <>
                    <MathJaxDisplay 
                        toShow={getGraphTitle(f.mathJaxTitle)} 
                        color={f.color}/>
                
                    <Line
                        className="CustomChart" data={data} options={options} />

                    
                </>
                : <></>
            }
            <Row>
                <Col>
                    Echelle
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => lowScale(1, 10)}>
                        -
                    </Button>
                    {scale}
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => raiseScale(100, 10)}>
                        +
                    </Button>
                </Col>
                <Col>
                    Pas
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => lowStep()}>
                        -
                    </Button>
                    {step}
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => raiseStep()}>
                        +
                    </Button> 
                </Col> 
            </Row>
        </>
    );
}

export default Charts;