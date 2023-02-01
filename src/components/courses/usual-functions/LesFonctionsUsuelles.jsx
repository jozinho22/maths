import React from "react";
import { useLocation } from 'react-router-dom';

import { Container, Button } from "react-bootstrap";
import { LineChart, XAxis, YAxis, ReferenceLine, ResponsiveContainer, Tooltip, Line } from 'recharts';
import LoadingContext from "../../context/LoadingContext";
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';
import buildUsualFunctions from "./buildUsualFunctions";

import CustomHelmet from "../../immutable/seo/CustomHelmet";
import Fractionnal from 'fractional';

import './LesFonctionsUsuelles.css';

const LesFonctionsUsuelles = () => {

    var title = 'Les fonctions usuelles';
    var metaContent = "Les fonctions usuelles : les différentes fonctions usuelles (carré, cube, sinus, cosinus, exp...etc) et leur réprésention sur un axe ainsi que leur caractéritiques"
    var relativePath = useLocation();
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

        var datas = []
        for(var k = -it; k <= it; k++) {
            var num = new Fractionnal.Fraction(x / Math.PI).numerator
            var den = new Fractionnal.Fraction(x / Math.PI).denominator
            if(f.type === 'trigo') {
                let d = {
                    x: num + `${den !== 1 ? "/" + den :""}` + 'π',
                    y: f.formula(x)
                }
                datas.push(d);
                x = x + step;
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
            <CustomHelmet title={title} metaContent={metaContent} canonicalPath={`/cours/${relativePath}`}/>
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
                    <Container className={`GraphTitle Focus${f.color}`}>
                        <MathJaxDisplay 
                            toShow={getGraphTitle(f.mathJaxTitle)} 
                            color={f.color}/>    
                    </Container>
                    
                    <ResponsiveContainer 
                        width="100%" 
                        aspect={f.aspect} 
                        className="Graph">
                        <LineChart
                            width={f.width}
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
                                interval={f.xInterval} 
                                domain={f.domain && f.domain.length > 0 ? f.domain : []}/>
                            <YAxis 
                                 />
                            <Tooltip itemStyle={{backgroundColor: "grey"}} wrapperStyle={{backgroundColor: "dimgray"}}/> 
                            <ReferenceLine x={0} />
                            <ReferenceLine y={0} />
                        </LineChart>
                    </ResponsiveContainer>

                    <Container className="FunctionAttributes">
                        <p className="FunctionAttributesTitle">Définie sur</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                            toShow={f.definition} 
                            color={f.color}/> 
                        </div> 

                        <p className="FunctionAttributesTitle">Dérivée</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                                toShow={getDerivativeExp(f.derivative)} 
                                color={f.color}/>    
                        </div>

                        <p className="FunctionAttributesTitle">Primitives</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                                toShow={getPrimitiveExp(f.primitive)} 
                                color={f.color}/> 
                        </div>

                        <p className="FunctionAttributesTitle">Limites</p> 
                        {
                            f.limits !== undefined ?
                                
                                f.limits.map(limit => (
                                    <div key={limit.id} className="FunctionAttributesValue">
                                        <MathJaxDisplay  
                                            toShow={getLimitExp(limit.where, limit.value)} 
                                            color={f.color}/> 
                                    </div>
                                )) 
                                
                                    :   <div className="FunctionAttributesValue">
                                            <MathJaxDisplay 
                                                toShow={"\\(\\varnothing\\)"} 
                                                color={f.color}/> 
                                        </div>
                        }
                   
                    </Container>
                </>
                : <p className="Title">Choisissez une fonction à afficher</p>
            }
        </>
    );
}

export default LesFonctionsUsuelles;