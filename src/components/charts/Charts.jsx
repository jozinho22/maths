import React from "react";
import { Line, Bar } from "react-chartjs-2";
import moment from "moment";
import {Chart as ChartJS} from 'chart.js/auto';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';


const Charts = () => {

    const [scale, setScale] = [100];

    var toShow = "\\(f(x) = x^2 \\)";
/*     const [mathTitle, setMathTitle] = React.useState[toShow];
 */
    const x2 = (x) => {
        return (
            {
                id: 0,
                title: 'x^2',
                y: x*x
            }
        );    
    }

    const calculator = (f) => {

        const xAxis = [];
        const yAxis = [];
    
        for(var k = -scale; k < scale; k++) {
            xAxis.push(k);
            yAxis.push(f(k).y);
        } 

        return {
            xValues: xAxis,
            yValues: yAxis
        }
    }

    const data = {
    labels: calculator(x2).xValues,
    datasets: 
        [
            {
                label: x2("").title,
                data: calculator(x2).yValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)'
                ],
                borderWidth: 1
            }
        ]
    };
    
    return(
        <>
            <MathJaxDisplay toShow={toShow} />
            <Line data={data} />
        </>
    );
}

export default Charts;