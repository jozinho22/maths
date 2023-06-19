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
                definition: "\\(\\xi = ]-\\infty; +\\infty[  \\)",
                definition2: "\\(\\xi = \\mathbb{R} \\)",
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
                definition: "\\(\\xi = ]-\\infty; +\\infty[ \\)",
                definition2: "\\(\\xi = \\mathbb{R} \\)",
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
                definition: "\\(\\xi = [ 0 ; +\\infty[ \\hspace{4cm} \\)",
                definition2: "\\(\\xi = \\mathbb{R^+} \\)",
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
                definition: "\\(\\xi = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\xi = \\mathbb{R} \\)",
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
                definition: "\\(\\xi = ] 0 ; +\\infty[ \\)",
                definition2: "\\(\\xi = \\mathbb{R^{+*}} \\)",
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
                definition: "\\(\\xi =  ]-\\infty ; 0[\\bigcup] 0 ; +\\infty[ \\)",
                definition2: "\\(\\xi = \\mathbb{R^{*}} \\)",
                derivative: "-\\frac{1}{x^2}",
                primitive: "ln(|x|) + K",
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
                definition: "\\(\\xi  = ]-\\infty ; +\\infty[ \\)",
                definition2: "\\(\\xi = \\mathbb{R} \\)",
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
                definition: "\\(\\xi = ]-\\infty ; +\\infty[\\)",
                definition2: "\\(\\xi = \\mathbb{R} \\)",
                derivative: "cos(x)",
                primitive: "-cos(x) + K",
                type: 'trigo',
                xDomain: [-2*Math.PI, 2*Math.PI],
                yDomain: [-1, 1],
                step : Math.PI/4,
                xInterval: 1,
                aspect: 3
            }
        ]
}

export default buildUsualFunctions;