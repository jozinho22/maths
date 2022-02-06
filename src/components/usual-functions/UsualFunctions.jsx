import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Line, Bar } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';

import './UsualFunctions.css';

const UsualFunctions = () => {

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
            scale : 5,
            step : 0.25,
            scaleRatio: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(x^3 \\)",
            color: getFunctionColor(i),
            formula: (x) => {return x*x*x},
            scale : 5,
            step : 0.25,
            scaleRatio: 0.5
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\sqrt(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sqrt(x)},
            scale : 5,
            step : 0.25,
            scaleRatio: 4
        },
        {
            id: ++i,
            mathJaxTitle: "\\(e^x \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.exp(x)},
            scale : 5,
            step : 0.25,
            scaleRatio: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(ln(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.log(x)},
            scale : 10,
            step : 0.1,
            scaleRatio: 3
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\frac{1}{x} \\)",
            color: getFunctionColor(i),
            formula: (x) => {return 1 / x},
            scale : 5,
            step : 0.25,
            scaleRatio: 1
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\cos(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.cos(x)},
            scale : 2,
            step : 1/8,
            scaleRatio: 5,
            type: 'trigo'
        },
        {
            id: ++i,
            mathJaxTitle: "\\(\\sin(x) \\)",
            color: getFunctionColor(i),
            formula: (x) => {return Math.sin(x)},
            scale : 2,
            step : 1/8,
            scaleRatio: 5,
            type: 'trigo'
        }

    ];

    const [f, setF] = React.useState({});
    const [fData, setFData] = React.useState({});

    React.useEffect(() => {

        const xDatas = [];
        const yDatas = [];

        var scale = f.scale;
        var step = f.step;
        console.log(scale)
        console.log(step)

        var it = scale / step;
        console.log('it', it);

        var x = -scale;

        var xTrigo = -2*step;

        for(var k = -it; k <= it; k++) {

            if(f.type === 'trigo') {
                xDatas.push(xTrigo +'PI');
                yDatas.push(f.formula(xTrigo*Math.PI));
                xTrigo = xTrigo + step;

                /* if(k % 8 === 0) {
                    xDatas.push(xTrigo +'PI');
                } else if(k % 8 === 1) {
                    xDatas.push('-PI/8');
                } else if(k % 8 === 2) {
                    xDatas.push('0');
                } else if(k % 8 === 3) {
                    xDatas.push('PI/8');
                } else if(k % 8 === 4) {
                    xDatas.push('PI/4');
                } else if(k % 8 === 5) {
                    xDatas.push('3PI/8');
                } else if(k % 8 === 6) {
                    xDatas.push('2PI/4');
                } else if(k % 8 === 7) {
                    xDatas.push('5PI/8');
                }  */
            } else {
                if(Math.floor(x) !== Math.floor(x - step)) {
                    xDatas.push(Math.floor(x));
                } else {
                    xDatas.push('');
                }
                yDatas.push(f.formula(x));
                x = x + step;
            }

        } 

        console.log(xDatas)

        const xAxisDatas = [];
        const yAxisDatas = [];

        for(var k = -scale; k <= scale; k = k + step) {
            xAxisDatas.push(0);
        } 

        setFData(
            {
                data: {
                    labels: xDatas,
                    datasets: 
                        [
                            {
                                data: yDatas,
                                backgroundColor: [
                                    f.color === 'Default' ? 'blue' : f.color
                                ],
                                borderColor: [
                                    f.color === 'Default' ? 'blue' : f.color
                                ],
                                borderWidth: 0.2
                            }
                            ,
                            {
                                data: xAxisDatas,
                                backgroundColor: [
                                    'black'
                                ],
                                borderWidth: 0.01
                            }
                        ]
                },
                options:
                    {
                        maintainAspectRatio: false,
                        aspectRatio: f.scaleRatio,
                        responsive: true, 
                        plugins: {
                            legend: false // Hide legend
                        },
                        scales: {
                            yAxes: 
                                {
                                    barPercentage: 1.6,
                                    grid: {
                                        display: true,
                                        zeroLineColor: 'green',
                                        zeroLineWidth: 12
                                    },
                                    ticks: {
                                        suggestedMin: 0,
                                        suggestedMax: 125000,
                                        padding: 2,
                                        backdropPadding: 2,
                                        color: 'blue',
                                        font: {
                                            family: "Montserrat", // Add your font here to change the font of your y axis
                                            size: 16
                                        },
                                        major: {
                                            enable: true
                                        }
                                }
                            },
                            xAxes: 
                                {
                                    barPercentage: 1.6,
                                    grid: {
                                        display: true,
                                        zeroLineColor: 'green'
                                    },
                                    ticks: {
                                        padding: 2,
                                        color: 'blue',
                                        font: {
                                            family: "Montserrat", // Add your font here to change the font of your x axis
                                            size: 16
                                        },
                                        major: {
                                            enable: false
                                        }
                                    }
                                }
                            }
                    }
            }
            
        );

/*         var minX = minMaxExcludingUndefined('min', xDatas)
        var maxX = minMaxExcludingUndefined('max', xDatas)

        var minY = minMaxExcludingUndefined('min', yDatas)
        var maxY = minMaxExcludingUndefined('max', yDatas)
 */
        

    }, [f]);

    var options = 
        {
            
        }

    function minMaxExcludingUndefined(what, numbers) {
        var par = []
        for (var i = 0; i < numbers.length; i++) {
            if (!isNaN(numbers[i])) {
                par.push(numbers[i]);
            }
        }
        if(what === 'min') {
            return Math.min.apply(Math, par);
        } else if(what === 'max') {
            return Math.max.apply(Math, par);
        }
    }

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
                    
                    <Line data={fData.data} options={fData.options} />
                </>
                : <></>
            }
        </>
    );
}

export default UsualFunctions;