import React from "react";
import { Container, Button } from "react-bootstrap";
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Tooltip, Line } from 'recharts';
import LoadingContext from "../../context/LoadingContext";
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import buildUsualFunctions from "./buildUsualFunctions";
import './LesFonctionsUsuelles.css';

const LesFonctionsUsuelles = () => {

    var usualFunctions = buildUsualFunctions();

    var ufLeft = usualFunctions.slice(0, usualFunctions.length /2);
    var ufRight = usualFunctions.slice(usualFunctions.length /2);
    const [f, setF] = React.useState({});
    const [fData, setFData] = React.useState({});

/*     'basis' | 'basisClosed' | 'basisOpen' | 'linear' | 'linearClosed' | 'natural' | 'monotoneX' | 'monotoneY' | 'monotone' | 'step' | 'stepBefore' | 'stepAfter' | CurveFactory;
 */
    const type = "natural";
    const {updateIsLoading} = React.useContext(LoadingContext);
 
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
        } 

        setFData(datas);
        updateIsLoading(true);

    }, [f, updateIsLoading]);

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
        return "\\(\\int f(x) . \\mathrm{d}x = " + primitive + " \\)";
    }

    const getLimitExp = (where, value) => {
        return "\\(\\lim_{x \\to " + where + "} f(x) = " + value + " \\)";
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return(
        <>
            <Container className="UsualFunctionsButtonsContainer Left">
                {
                    ufLeft.map(f => (
                        <Button key={f.id}
                            className={`DefaultButton UsualFunctionsButton ${f.color}Button`}
                            onClick={() => setF(usualFunctions[f.id])} >
                            <MathJaxDisplay toShow={getButtonTitle(f.mathJaxTitle)} />
                        </Button>
                    ))
                }
            </Container>
            <Container className="UsualFunctionsButtonsContainer Right">
                {
                    ufRight.map(f => (
                        <Button key={f.id}
                            className={`DefaultButton UsualFunctionsButton ${f.color}Button`}
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
                    
                    <ResponsiveContainer 
                        width="80%" 
                        aspect={f.aspect} 
                        className="Graph">
                        <LineChart
                            width={f.width}
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
                            {/* <Tooltip />  */}
                            <ReferenceLine x={0} />
                            <ReferenceLine y={0} />
                        </LineChart>
                    </ResponsiveContainer>

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
                : <p className="Title">Choisissez une fonction à afficher</p>
            }
        </>
    );
}

export default LesFonctionsUsuelles;