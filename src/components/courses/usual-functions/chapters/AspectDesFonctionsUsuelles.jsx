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

        if(!isEmpty(f)) {
            var scale = f.xDomain[1];
            var step = f.step;

            var it = scale / step;

            var x;
            if(!f.beginAtZero) {
                x = -scale;
            } else {
                x = 0;
            }     

            var datas = []
            for(var k = -it; k <= it; k++) {
                /* console.log("x", x) */
                if(f.type === 'trigo') {
                    // bidouille car il ne trouve pas le 0...
                    if(f.mathJaxTitle ==="tan(x)" && (k === 0 || k === 16)) {
                        if(k === 0 ) x = 0;
                        else x = Math.PI/2;
                    } 
                    
                    var num = new Fractionnal.Fraction(x / Math.PI).numerator
                    var den = new Fractionnal.Fraction(x / Math.PI).denominator

         /*            console.log("num", num)
                    console.log("den", den)
                    console.log("num % 2 !==0 && den ===2", num % 2 !==0 && den ===2) */
                    let d = {
                        x: (num === 0 ? 0 : (num === -1 ? '-π' : num === 1 ? 'π' : num + 'π') + (den !== 1 ? "/" + den : "")),
                        y: f.mathJaxTitle !=="tan(x)" || (f.mathJaxTitle ==="tan(x)" && (num % 2 === 0 || den !== 2)) ? Math.round(f.formula(x) * 100) : undefined
                    }
                    /* console.log("y", d.y)
                    console.log("--------") */
                    datas.push(d);
                    x = x + step;
                } else {
                    let d = {
                        x: f.type === 'sensible' ? x : Math.round(x),
                        y: (x !== f.exclude ? (f.type === 'sensible' ?  Math.round(f.formula(x) * 100) / 100 : Math.round(f.formula(x))) : undefined)
                    }
                    datas.push(d);
                    x = Math.round((x + step)* 100) / 100;
                }
            } 
            /* console.log(datas) */
            setFData(datas);
        }
    }, [f]);

    const getButtonTitle = (exp) => {
        return "\\(" + exp + " \\)";
    }

    const getDerivativeExp = (derivative) => {
        return "\\(f'(x) = " + derivative + " \\)";
    }

    const getPrimitiveExp = (primitive) => {
        return "\\(\\int^x f(x) . \\mathrm{d}x = " + primitive + " \\)";
    }

    const getLimitExp = (where, value) => {
        return "\\(\\lim_{x \\to " + where + "} f(x) = " + value + " \\)";
    }

    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }

    return(
        <Container className="UsualFunctionsContainer">
            { !isEmpty(f) ? <></> : <p className="Title">Choisissez une fonction à afficher</p>}
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
                            <MathJaxDisplay 
                            toShow={f.definition2} 
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
                : <></>
            }
        </Container>
    );
}

export default AspectDesFonctionsUsuelles;