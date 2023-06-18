import React from "react";

import { Container, Button } from "react-bootstrap";
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import buildUsualFunctions from "../helpers/buildUsualFunctions";

import Fractionnal from 'fractional';

import FunctionDisplay from "../helpers/FunctionDisplay";

import '../UsualFunctions.css';

const AspectDesFonctionsUsuelles = () => {

    var usualFunctions = buildUsualFunctions();

    var ufLeft = usualFunctions.slice(0, usualFunctions.length /2);
    var ufRight = usualFunctions.slice(usualFunctions.length /2);
    const [f, setF] = React.useState({});
    const [fData, setFData] = React.useState({});
 
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
            if(f.type === 'trigo') {
                var num = new Fractionnal.Fraction(x / Math.PI).numerator
                var den = new Fractionnal.Fraction(x / Math.PI).denominator
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
    }, [f]);

    const getButtonTitle = (exp) => {
        return "\\(" + exp + " \\)";
    }

    const getDerivativeExp = (derivative) => {
        return "\\(f'(x) = " + derivative + " \\)";
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
        <Container className="UsualFunctionsContainer">
            <Container className="UsualFunctionsButtonsContainer Left">
                {
                    ufLeft.map(f => (
                        <Button key={f.id}
                            className={`DefaultButton UsualFunctionsButton ${f.themeColor}Button`}
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
                            className={`DefaultButton UsualFunctionsButton ${f.themeColor}Button`}
                            onClick={() => setF(usualFunctions[f.id])} >
                            <MathJaxDisplay toShow={getButtonTitle(f.mathJaxTitle)} />
                        </Button>
                    ))
                }
            </Container>
            { !isEmpty(f) ?
                <>
                    <FunctionDisplay f={f} fData={fData} />

                    <Container className="FunctionAttributes">
                        <p className="FunctionAttributesTitle">Définie sur</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                            toShow={f.definition} 
                            color={f.themeColor}/> 
                        </div> 

                        <p className="FunctionAttributesTitle">Dérivée</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                                toShow={getDerivativeExp(f.derivative)} 
                                color={f.themeColor}/>    
                        </div>

                        <p className="FunctionAttributesTitle">Primitives</p> 
                        <div className="FunctionAttributesValue">
                            <MathJaxDisplay 
                                toShow={getPrimitiveExp(f.primitive)} 
                                color={f.themeColor}/> 
                        </div>

                        <p className="FunctionAttributesTitle">Limites</p> 
                        {
                            f.limits !== undefined ?
                                
                                f.limits.map(limit => (
                                    <div key={limit.id} className="FunctionAttributesValue">
                                        <MathJaxDisplay  
                                            toShow={getLimitExp(limit.where, limit.value)} 
                                            color={f.themeColor}/> 
                                    </div>
                                )) 
                                
                                    :   <div className="FunctionAttributesValue">
                                            <MathJaxDisplay 
                                                toShow={"\\(\\varnothing\\)"} 
                                                color={f.themeColor}/> 
                                        </div>
                        }
                   
                    </Container>
                </>
                : <p className="Title">Choisissez une fonction à afficher</p>
            }
        </Container>
    );
}

export default AspectDesFonctionsUsuelles;