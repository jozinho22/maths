import React from 'react';
/* import { Button } from 'react-bootstrap'; */
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
/* import Title1 from '../../helpers/Title1';
import FunctionDisplay from '../../usual-functions/helpers/FunctionDisplay'; */
import equ2degAspect from '../assets/equ2degAspect.png';
import ImageZoom from '../../helpers/ImageZoom';

const Aspect = () => {

    var n = 0;

   /*  const [a, setA] = React.useState(2);
    const [b, setB] = React.useState(-3);
    const [c, setC] = React.useState(1);
    const [scale, setScale] = React.useState(12);

    const [zoomed, setZoomed] = React.useState(false);

    const zoom = () => {
        setScale(zoomed ? 12 : 6);
        setZoomed(!zoomed);
    }

    var f = 
        {
            mathJaxTitle: `${a === 0 || a === 1 || a === -1 ? "" : a} ${a === 0 ? "" : a === -1 ? "-x^2" : "x^2"} ${b > 0 && a !== 0 ? "+" : "" } ${b === 0 ? "" : `${b}x`} ${c > 0 && (a !== 0 || b !== 0) ? "+" : "" } ${c === 0 ? "" : c}`,
            color: "Green",
            formula: (x) => {return a*x*x + b*x + c},
            xDomain:[-scale, scale],
            yDomain:[-100, 100],
            scale : scale,
            step : 1,
            xInterval: scale/6,
            aspect: 1
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
    }, [a, b, c, zoomed]); */

    return  <>
                <p>
                    Les fonctions qui sont de type <MathJaxInline toShow={"$f(x) = ax^2 + bx + c \\enspace (avec \\enspace a \\in \\mathbb{R^*}, \\enspace (b, c) \\in \\mathbb{R}^2) $"} /> sont appelées fonctions polynômes, et forment des hyperboles dont <MathJaxInline toShow={"$a$"} /> va déterminer le sens.
                </p>
                <ImageZoom src={equ2degAspect} name="Aspect des équations du second degré" n={++n} />

                {/* <Title1 title={"a) Aspect dans un repère"} />

                <FunctionDisplay f={f} fData={fData} reduced />

                <div className="FlexButton">
                    <Button className="DefaultButton GreenButton" onClick={zoom}>
                        {zoomed ? "Zoom out" : "Zoom in"}
                    </Button> 
                </div> 
             
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
                </div> */}
            </>
}

export default Aspect;