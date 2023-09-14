import React from 'react';
import { Container } from 'react-bootstrap';
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, CartesianGrid, Tooltip, Line } from 'recharts';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import Constants from '../../../immutable/Constants';

const FunctionDisplay = ( {f, fData} ) => {

    /*     'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;
 */
    const type = "natural";

    const getGraphTitle = (exp) => {
        return "\\(f(x) = " + exp + " \\)";
    }

    return <>
            <Container className={`GraphTitle Focus${f.themeColor ? f.themeColor :"Green"}`}>
                <MathJaxDisplay 
                    toShow={getGraphTitle(f.mathJaxTitle)} 
                    color={f.themeColor ? f.themeColor :"Green"}/>    
            </Container>
    
            <ResponsiveContainer 
                width="100%" 
                aspect={f.aspect} 
                className={`Graph`}>
                <LineChart
                    data={fData}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }} >
                    <Line 
                        type={type} 
                        dataKey="y" 
                        stroke={f.graphColor ? f.graphColor : Constants.GREEN_COLOR} 
                        dot={false} />
                    <XAxis 
                        dataKey="x" 
                        interval={f.xInterval} 
                        domain={f.xDomain} />
                    <YAxis 
                        dataKey="y" 
                        type="number"
                        domain={f.yDomain}
                        allowDecimals={false} 
                        allowDataOverflow={false} />
                    <Tooltip labelStyle={{backgroundColor: "silver"}} contentStyle={{backgroundColor: "silver"}} itemStyle={{backgroundColor: "silver"}} wrapperStyle={{backgroundColor: "dimgray"}}/> 
                    <ReferenceLine x={0} stroke={Constants.RED_COLOR} />
                    <ReferenceLine y={0} stroke={Constants.RED_COLOR} />
                </LineChart>
            </ResponsiveContainer>
            </>
}

export default FunctionDisplay;