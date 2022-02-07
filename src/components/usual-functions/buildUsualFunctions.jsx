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
                definition: "\\(\\xi = \\mathbb{R} = ]-\\infty; +\\infty[ \\)",
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
                height: 300,
                xInterval: 4,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "x^3",
                color: getFunctionColor(i),
                formula: (x) => {return x*x*x},
                definition: "\\(\\xi = \\mathbb{R} = ]-\\infty; +\\infty[ \\)",
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
                height: 400,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "\\sqrt(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.sqrt(x)},
                definition: "\\(\\xi = \\mathbb{R^+} = [ 0 ; +\\infty[ \\)",
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
                height: 200,
                xInterval: 9,
                beginAtZero: true,
                aspect: 2
            },
            {
                id: ++i,
                mathJaxTitle: "e^x",
                color: getFunctionColor(i),
                formula: (x) => {return Math.exp(x)},
                definition: "\\(\\xi = \\mathbb{R} = ]-\\infty ; +\\infty[ \\)",
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
                height: 300,
                xInterval: 1,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "ln(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.log(x)},
                definition: "\\(\\xi = \\mathbb{R^{+*}} = ] 0 ; +\\infty[ \\)",
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
                height: 200,
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
                definition: "\\(\\xi = \\mathbb{R} - \\{0\\} = \\mathbb{R^{*}} =  ]-\\infty ; 0[\\bigcup] 0 ; +\\infty[ \\)",
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
                height: 300,
                xInterval: 9,
                exclude: 0,
                aspect: 1
            },
            {
                id: ++i,
                mathJaxTitle: "cos(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.cos(x)},
                definition: "\\(\\xi = \\mathbb{R} = ]-\\infty ; +\\infty[ \\)",
                derivative: "-sin(x)",
                primitive: "sin(x) + K",
                type: 'trigo',
                scale : 2,
                step : 1/4,
                height: 150,
                xInterval: 1,
                aspect: 4
            },
            {
                id: ++i,
                mathJaxTitle: "sin(x)",
                color: getFunctionColor(i),
                formula: (x) => {return Math.sin(x)},
                definition: "\\(\\xi = \\mathbb{R} = ]-\\infty ; +\\infty[ \\)",
                derivative: "cos(x)",
                primitive: "-cos(x) + K",
                type: 'trigo',
                scale : 2,
                step : 1/4,
                height: 150,
                xInterval: 1,
                aspect: 4
            }
        ]
}

export default buildUsualFunctions;