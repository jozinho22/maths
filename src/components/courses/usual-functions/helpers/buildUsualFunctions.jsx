import Constants from '../../../immutable/Constants';

const buildUsualFunctions = () => {

    var i = -1;
    var j = -1;

    const getFunctionThemeColor = (id) => {
        var modulo = 3;
        //"#4365ad"
        if(id % modulo === 0) {
            return "Default";
            //"#54854d"
        } else if(id % modulo === 1) {
            return "Green";
            //"#854242"
        } else if(id % modulo === 2) {
            return "Red";
        } 
    } 

    const getFunctionGraphColor = (id) => {
        var modulo = 3;
       
        if(id % modulo === 0) {
            return Constants.BLUE_COLOR;
        } else if(id % modulo === 1) {
            return Constants.GREEN_COLOR;
        } else if(id % modulo === 2) {
            return Constants.RED_COLOR;
        } 
    } 

    return [
            {
                id: ++i,
                mathJaxTitle: "x^2",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return x*x},
                definition: "\\(\\mathcal{D} = ]-\\infty; +\\infty[  \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "2x",
                primitive: "\\frac{x^3}{3} + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "+\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }

                ],
                xDomain: [-10, 10],
                yDomain: [0, 100],
                step : 1,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "x^3",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return x*x*x},
                definition: "\\(\\mathcal{D} = ]-\\infty; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "3x^2",
                primitive: "\\frac{x^4}{4} + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "-\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }

                ],
                xDomain: [-10, 10],
                yDomain: [0, 1000],
                step : 1,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "\\sqrt(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.sqrt(x)},
                definition: "\\(\\mathcal{D} = [ 0 ; +\\infty[ \\hspace{4cm} \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R^+} \\)",
                derivative: "\\frac{1}{2\\sqrt{x}}",
                primitive: "\\frac{2x^{\\frac{3}{2}}}{3} + K",
                limits: [
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }

                ],
                type: 'sensible',
                xDomain: [0, 5],
                yDomain: [0, 5],
                step : 0.1,
                xInterval: 9,
                beginAtZero: true,
                aspect: 2
            },
            {
                id: ++i,
                mathJaxTitle: "e^x",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.exp(x)},
                definition: "\\(\\mathcal{D} = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "e^x",
                primitive: "e^x+ K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "0"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }

                ],
                type: 'sensible',
                xDomain: [-5, 5],
                yDomain: [0, 100],
                step : 1,
                xInterval: 0,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "ln(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.log(x)},
                definition: "\\(\\mathcal{D} = ] 0 ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R^{+*}} \\)",
                derivative: "\\frac{1}{x}",
                primitive: "x(ln(x) - 1) + K",
                limits: [
                    {
                        id: j++,
                        where: "0^+",
                        value: "-\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }
                ],
                type: 'sensible',
                xDomain: [0, 5],
                yDomain: [-3, 3],
                step : 0.1,
                xInterval: 9,
                beginAtZero: true,
                exclude: 0,
                aspect: 2
            },
            {
                id: ++i,
                mathJaxTitle: "\\frac{1}{x}",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return 1 / x},
                definition: "\\(\\mathcal{D} =  ]-\\infty ; 0[\\cup] 0 ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R^{*}} \\)",
                derivative: "-\\frac{1}{x^2}",
                primitive: "ln|x| + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "0^{-}"
                    },
                    {
                        id: j++,
                        where: "0^{-}",
                        value: "-\\infty"
                    },
                    {
                        id: j++,
                        where: "0^{+}",
                        value: "+\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "0^{+}"
                    }
                ],
                type: 'sensible',
                xDomain: [-5, 5],
                yDomain: [-5, 5],
                step : 0.1,
                xInterval: 9,
                exclude: 0,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "cos(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.cos(x)},
                definition: "\\(\\mathcal{D}  = [-\\pi + 2k\\pi ; \\pi + 2k\\pi] \\enspace (k \\in \\mathbb{R}) \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "-sin(x)",
                primitive: "sin(x) + K",
                type: 'trigo',
                xDomain: [-2*Math.PI, 2*Math.PI],
                yDomain: [-1, 1],
                step : Math.PI/4,
                xInterval: 1,
                aspect: 3
            },
            {
                id: ++i,
                mathJaxTitle: "sin(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.sin(x)},
                definition: "\\(\\mathcal{D}  = [-\\pi + 2k\\pi ; \\pi + 2k\\pi] \\enspace (k \\in \\mathbb{R})  \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R}  \\)",
                derivative: "cos(x)",
                primitive: "-cos(x) + K",
                type: 'trigo',
                xDomain: [-2*Math.PI, 2*Math.PI],
                yDomain: [-1, 1],
                step : Math.PI/4,
                xInterval: 1,
                aspect: 3
            },
            {
                id: ++i,
                mathJaxTitle: "tan(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.tan(x)},
                definition: "\\(\\mathcal{D}  = \\Bigl]-\\frac{\\pi}{2} + k\\pi ; \\frac{\\pi}{2} + k\\pi \\Bigr[ \\enspace \\enspace (k \\in \\mathbb{R}) \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} - \\Bigl\\{ \\frac{\\pi}{2} + k\\pi \\Bigr\\} \\enspace \\enspace (k \\in \\mathbb{R})  \\)",
                derivative: "1 + tan^2(x)",
                primitive: "-ln|cos(x)| + K",
                limits: [
                    {
                        id: j++,
                        where: "\\frac{\\pi}{2} + k\\pi ^{+}",
                        value: "+\\infty"
                    },
                    {
                        id: j++,
                        where: "\\frac{\\pi}{2} + k\\pi^{-}",
                        value: "-\\infty"
                    }
                ],
                type: 'trigo',
                xDomain: [-2*Math.PI/2, 2*Math.PI/2],
                yDomain: [-10, 10],
                step : Math.PI/16,
                xInterval: 17,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "arccos(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.acos(x)},
                definition: "\\(\\mathcal{D}  = [-1 ; 1] \\)",
                derivative: "-\\frac{1}{\\sqrt{1 - x^2}}",
                primitive: "x.arccos(x) - \\sqrt{1 - x^2} + K",
                limits: [
                    {
                        id: j++,
                        where: "-1^{+}",
                        value: "\\pi"
                    },
                    {
                        id: j++,
                        where: "1^{-}",
                        value: "0"
                    }
                ],
                type: 'sensible',
                xDomain: [-2, 2],
                yDomain: [0, 4],
                step : 0.1,
                xInterval: 9,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "arcsin(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.asin(x)},
                definition: "\\(\\mathcal{D} = [-1 ; 1] \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "\\frac{1}{\\sqrt{1 - x^2}}",
                primitive: "x.arcsin(x) + \\sqrt{1 - x^2} + K",
                limits: [
                    {
                        id: j++,
                        where: "-1^{+}",
                        value: "-\\frac{\\pi}{2}"
                    },
                    {
                        id: j++,
                        where: "1^{-}",
                        value: "\\frac{\\pi}{2}"
                    }
                ],
                type: 'sensible',
                xDomain: [-2, 2],
                yDomain: [-2, 2],
                step : 0.1,
                xInterval: 9,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "arctan(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.atan(x)},
                definition: "\\(\\mathcal{D} = ]-\\infty ; +\\infty [ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "\\frac{1}{\\sqrt{1 + x^2}}",
                primitive: "x.arctan(x) - \\frac{ln(x^2 + 1)}{2} + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "-\\frac{\\pi}{2}^+"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "-\\frac{\\pi}{2}^-"
                    }
                ],
                type: 'sensible',
                xDomain: [-10, 10],
                yDomain: [-2, 2],
                step : 0.1,
                xInterval: 49,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "cosh(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.cosh(x)},
                definition: "\\(\\mathcal{D} = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "sinh(x)",
                primitive: "sinh(x) + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "+\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }
                ],
                type: 'sensible',
                xDomain: [-10, 10],
                yDomain: [0, 20],
                step : 0.1,
                xInterval: 49,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "sinh(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.sinh(x)},
                definition: "\\(\\mathcal{D} = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "cosh(x)",
                primitive: "cosh(x) + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "-\\infty"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }
                ],
                type: 'sensible',
                xDomain: [-5, 5],
                yDomain: [0, 20],
                step : 0.1,
                xInterval: 24,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "tanh(x)",
                themeColor: getFunctionThemeColor(i),
                graphColor: getFunctionGraphColor(i),
                formula: (x) => {return Math.tanh(x)},
                definition: "\\(\\mathcal{D} = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\mathcal{D} = \\mathbb{R} \\)",
                derivative: "sech(x)^2",
                primitive: "ln(cosh(x)) + K",
                limits: [
                    {
                        id: j++,
                        where: "-\\infty",
                        value: "-1^+"
                    },
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "1^-"
                    }
                ],
                type: 'sensible',
                xDomain: [-10, 10],
                yDomain: [-2, 2],
                step : 0.1,
                xInterval: 49,
                aspect: 1
            }
        ]
}

export default buildUsualFunctions;