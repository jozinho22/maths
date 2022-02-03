import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';

import './Charts.css';

const Charts = () => {

    var usualFunctions = [
        {
            id: 0,
            mathJaxTitle: "\\(x^2 \\)",
            color: "Default",
            formula: (x) => {return x*x}
        },
        {
            id: 1,
            mathJaxTitle: "\\(x^3 \\)",
            color: "Green",
            formula: (x) => {return x*x*x}
        },
        {
            id: 2,
            mathJaxTitle: "\\(\\sqrt(x) \\)",
            color: "Orange",
            formula: (x) => {return Math.sqrt(x)}
        },
        {
            id: 3,
            mathJaxTitle: "\\(e^x \\)",
            color: "Red",
            formula: (x) => {return Math.exp(x)}
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

        for(var k = -scale; k <= scale; k++) {
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
                                f.color
                            ],
                            borderColor: [
                                f.color
                            ],
                            borderWidth: 1
                        }
                    ]
            }
        );
    }, [f, scale, step]);

    
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

        console.log(graphTitle)
        return graphTitle;
    }

    const lowScale = () => {
        if(scale === 0.1) {
            return scale;
        } else {
            setScale(scale / 10);
        }
    }

    const raiseScale = () => {
        if(scale === 100) {
            return scale;
        } else {
            setScale(scale * 10);
        }
    }

    const lowStep = () => {
        if(step === 0.1) {
            return step;
        } else {
            setStep(step - 0.1);
        }
    }

    const raiseStep = () => {
        if(step === 1) {
            return step;
        } else {
            setStep(step + 0.1);
        }
    }

    console.log(data)

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
                    <Container className="Scale" >
                        Echelle
                        <Button 
                            className="DefaultButton"
                            onClick={() => lowScale()}>
                            -
                        </Button>
                        {scale}
                        <Button 
                            className="DefaultButton"
                            onClick={() => raiseScale()}>
                            +
                        </Button>
                    </Container>
                    <Container className="Steps" >
                        Pas
                        <Button 
                            className="DefaultButton"
                            onClick={() => lowStep()}>
                            -
                        </Button>
                        {step}
                        <Button 
                            className="DefaultButton"
                            onClick={() => raiseStep()}>
                            +
                        </Button>
                    </Container> 
                </>
                : <></>
            }  
        </>
    );
}

export default Charts;