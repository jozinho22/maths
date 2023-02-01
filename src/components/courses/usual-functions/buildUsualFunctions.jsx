const buildUsualFunctions = () => {

    var i = -1;
    var j = -1;

    const getFunctionColor = (id) => {
        var modulo = 3;
        if(id % modulo === 0) {
            return "Default";
        } else if(id % modulo === 1) {
            return "Green";
        } else if(id % modulo === 2) {
            return "Red";
        } 
    } 

    return [
            {
                id: ++i,
                mathJaxTitle: "x^2",
                color: getFunctionColor(i),
                formula: (x) => {return x*x},
                definition: "\\(\\xi = ]-\\infty; +\\infty[ (\\mathbb{R} )\\)",
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
                scale : 10,
                step : 1,
                width: 200,
                xInterval: 4,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "x^3",
                color: getFunctionColor(i),
                formula: (x) => {return x*x*x},
                definition: "\\(\\xi = ]-\\infty; +\\infty[ (\\mathbb{R}) \\)",
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
                scale : 10,
                step : 1,
                width: 200,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "\\sqrt(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.sqrt(x)},
                definition: "\\(\\xi = [ 0 ; +\\infty[ (\\mathbb{R^+}) \\)",
                derivative: "\\frac{1}{2\\sqrt{x}}",
                primitive: "\\frac{2x^{\\frac{3}{2}}}{3} + K",
                limits: [
                    {
                        id: j++,
                        where: "+\\infty",
                        value: "+\\infty"
                    }

                ],
                scale : 100,
                step : 1,
                width: 150,
                xInterval: 9,
                beginAtZero: true,
                aspect: 2
            },
            {
                id: ++i,
                mathJaxTitle: "e^x",
                color: getFunctionColor(i),
                formula: (x) => {return Math.exp(x)},
                definition: "\\(\\xi = ]-\\infty ; +\\infty[ (\\mathbb{R})\\)",
                derivative: "e^x",
                primitive: "e^x+ K",
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
                scale : 3,
                step : 1,
                width: 200,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "ln(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.log(x)},
                definition: "\\(\\xi = ] 0 ; +\\infty[ (\\mathbb{R^{+*}}) \\)",
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
                scale : 10,
                step : 0.1,
                width: 150,
                xInterval: 10,
                beginAtZero: true,
                exclude: 0,
                aspect: 2
            },
            {
                id: ++i,
                mathJaxTitle: "\\frac{1}{x}",
                color: getFunctionColor(i),
                formula: (x) => {return 1 / x},
                definition: "\\(\\xi =  ]-\\infty ; 0[\\bigcup] 0 ; +\\infty[ (\\mathbb{R^{*}})\\)",
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
                scale : 100,
                step : 1,
                width: 150,
                xInterval: 9,
                exclude: 0,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "cos(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.cos(x)},
                definition: "\\(\\xi  = ]-\\infty ; +\\infty[ (\\mathbb{R})\\)",
                derivative: "-sin(x)",
                primitive: "sin(x) + K",
                type: 'trigo',
                scale : 2*Math.PI,
                domain:[-Math.PI, Math.PI],
                step : Math.PI/4,
                width: 200,
                height: 100,
                xInterval: 1,
                aspect: 3
            },
            {
                id: ++i,
                mathJaxTitle: "sin(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.sin(x)},
                definition: "\\(\\xi = ]-\\infty ; +\\infty[ (\\mathbb{R})\\)",
                derivative: "cos(x)",
                primitive: "-cos(x) + K",
                type: 'trigo',
                scale : 2*Math.PI,
                domain:[-Math.PI, Math.PI],
                step : Math.PI/4,
                width: 200,
                height: 100,
                xInterval: 1,
                aspect: 3
            }
        ]
}

export default buildUsualFunctions;