import React from 'react';
import { Button } from 'react-bootstrap';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import FunctionDisplay from '../../usual-functions/helpers/FunctionDisplay';

const AspectDesEquationsDuSecondDegre = () => {

    const [a, setA] = React.useState(2);
    const [b, setB] = React.useState(-3);
    const [c, setC] = React.useState(1);

    var mobile = document.body.offsetWidth < 450;

    var f = 
        {
            mathJaxTitle: `${a === 0 || a === 1 || a === -1 ? "" : a} ${a === 0 ? "" : a === -1 ? "-x^2" : "x^2"} ${b > 0 && a !== 0 ? "+" : "" } ${b === 0 ? "" : `${b}x`} ${c > 0 && b !== 0 ? "+" : "" } ${c === 0 ? "" : c}`,
            color: "Green",
            formula: (x) => {return a*x*x + b*x + c},
            scale : 10,
            step : 1,
            xInterval: 1,
            aspect: 1.5
        }

    const [fData, setFData] = React.useState({});

    React.useEffect(() => {
        var scale = f.scale;
        var step = f.step;

        var it = scale / step;
        var x = -scale;

        var datas = []
        for(var k = -it; k <= it + Math.floor(-b/(2*a) + 1); k++) {
            
            let d = {
                x: x,
                y: f.formula(x)
            }
            datas.push(d);
            x = x + step;
        } 
        setFData(datas);
    }, [a, b]);

    return  <>
                <p>
                    Les fonctions qui sont de type <MathJaxInline toShow={"$f(x) = ax^2 + bx + c $"} /> sont appelées fonctions polynômes, et forment des hyperboles dont <MathJaxInline toShow={"$a$"} /> va déterminer le sens.
                </p>

                <Title1 title={"a) Aspect dans un repère"} />

                <FunctionDisplay f={f} fData={fData} />
             
                <p>Tentez-vous même de changer les valeurs pour voir comment la droite se comporte dans un repère :</p>

                <div className="RowAlignedButtons Wrap">
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a - 1)} >-</Button>
                    <MathJaxInline toShow={`$a = ${a}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setA(a + 1)} >+</Button>
                    
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b - 1)} >-</Button>
                    <MathJaxInline toShow={`$b= ${b}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setB(b + 1)} >+</Button>

                    <Button className="DefaultButton MiniButton" onClick={() => setC(c - 1)} >-</Button>
                    <MathJaxInline toShow={`$c= ${c}$`} />
                    <Button className="DefaultButton MiniButton" onClick={() => setC(c + 1)} >+</Button>
                </div>
            </>
}

export default AspectDesEquationsDuSecondDegre;