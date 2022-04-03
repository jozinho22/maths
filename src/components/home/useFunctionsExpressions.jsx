import React from 'react';
import SizeContext from '../context/SizeContext';

const useFunctionsExpressions = () => {

    var dLnx = "\\(\\frac{d(\\ln{x})}{dx} = \\frac{1}{x}\\)";
    var pyth = "\\(x^2 + y^2 = z^2\\)";
    var dSqrt = "\\(\\frac{d(\\sqrt{x^2+1})}{dx} = \\frac{x}{\\sqrt{x^2+1}}\\)";
    var tauxVar = "\\(\\frac{d(f(x))}{dx} = \\lim_{h \\to 0} \\enspace \\frac{f(x+h)-f(x)}{h}\\)"
    var sinCos = "\\(cos{x^2(x)} + sin{x^2(x)} = 1\\)"
    var integX2 = "\\(\\int x^2 dx = \\frac{1}{3} x^3\\)"
    var alKashi = "\\(c = \\sqrt{a^2 + b^2 - 2abcos\\gamma}\\)"
    var distrib = "\\( a(b+c) = ab + ac \\)"
    var distrib2 = "\\( a^2 - b^2 = (a+b)(a-b) \\)"
    var powTimesPow = "\\(x^a x^b = x^{a+b}\\)";
    var powPow = "\\( (x^a)^b = x^{ab}\\)";
    var intSqrtX2Minus1 = "\\(\\int \\frac{1}{\\sqrt{x^2+1}} dx = arccosh(x)\\)";
    var dExpX = "\\(\\frac{d(e^{x})}{dx} = e^{x}\\)";
    var dX3 = "\\(\\frac{d(x^{3})}{dx} = 3 x^{2}\\)";
    var dSin = "\\(\\frac{d(sin(x))}{dx} = cos(x)\\)";
    var triangleArea = "\\(S_{triangle} = \\frac{bh}{2}\\)"
    var cubeVolume = "\\(V_{cube} = c^3\\)"
    var coneVolume = "\\(V_{cone} = \\pi r^2 \\frac{h}{3}\\)"
    var cylVolume = "\\(V_{cylindre} = \\pi r^2 h\\)"
    var sphVolume = "\\(V_{sphere} = \\frac{4}{3}\\pi r^3\\)"
    var circleArea = "\\(S_{cercle} = \\pi r^2\\)"
    var circlePerim = "\\(P_{cercle} = 2\\pi r\\)"
    var cosAPlusB = "\\(cos(a+b) = cos(a)cos(b) - sin(a)sin(b)\\)"
    var dUdivV = "\\((\\frac{u}{v})' = \\frac{u' v - v' u}{v^2}\\)";
    var dUplusV = "\\( \\left(u+v \\right)' = u' + v' \\)";
    var dUV = "\\(\\left(uv\\right)' = u'v + v'u \\)";
    var phi2 = "\\(\\phi^2 = 2\\phi + 1\\)";
    var discrimant = "\\(\\Delta = b^2 -4c\\)";
    var aPLusB3 = "\\((a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3\\)";
    var lnATimesB = "\\(ln(ab) = ln(a) + ln(b) \\)";
    var sigmaN = "\\(\\Sigma_{n=1}^{\\infty} n = \\frac{n(n+1)}{2}\\)";

    var [width] = React.useContext(SizeContext);
    
    var listEqu = [];
    var k = 0;
    listEqu.push(
            {
                id: k++,
                exp: dLnx
            },
            {
                id: k++,
                exp: pyth
            },
            {
                id: k++,
                exp: dSqrt
            },
            {
                id: k++,
                exp: tauxVar
            },
            {
                id: k++,
                exp: sinCos
            },
            {
                id: k++,
                exp: integX2
            },
            {
                id: k++,
                exp: alKashi
            },
            {
                id: k++,
                exp: distrib
            },
            {
                id: k++,
                exp: distrib2
            },
            {
                id: k++,
                exp: powTimesPow
            },
            {
                id: k++,
                exp: powPow
            },
            {
                id: k++,
                exp: intSqrtX2Minus1
            },
            {
                id: k++,
                exp: dExpX
            },
            {
                id: k++,
                exp: dX3
            },
            {
                id: k++,
                exp: dSin
            },
            {
                id: k++,
                exp: triangleArea
            },
            {
                id: k++,
                exp: cubeVolume
            },
            {
                id: k++,
                exp: coneVolume
            },
            {
                id: k++,
                exp: cylVolume
            },
            {
                id: k++,
                exp: sphVolume
            },
            {
                id: k++,
                exp: circleArea
            },
            {
                id: k++,
                exp: circlePerim
            },
            {
                id: k++,
                exp: cosAPlusB
            },
            {
                id: k++,
                exp: dUdivV
            },
            {
                id: k++,
                exp: dUplusV
            },
            {
                id: k++,
                exp: dUV
            },
            {
                id: k++,
                exp: phi2
            },
            {
                id: k++,
                exp: discrimant
            },
            {
                id: k++,
                exp: aPLusB3
            },
            {
                id: k++,
                exp: lnATimesB
            },
            {
                id: k++,
                exp: sigmaN
            }
    );

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;
        
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
        
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
        
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]];
        }
        
        return array;
    }

    return width < 500 ? shuffle(listEqu).slice(0, 14) 
        : width < 1000 ? shuffle(listEqu).slice(0, 20) 
            : shuffle(listEqu).slice(0, 30);

}

export default useFunctionsExpressions;