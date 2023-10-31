const useTableauRecapFonctionsPrimitives = () => {
   
    var tableauRecapFonctionsPrimitives = [];
    var k = 0;

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "fonction",
            values: ["d \\acute{e} riv \\acute{e} e"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "0",
            values: ["k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "a",
            values: ["ax + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "x",
            values: ["\\frac{1}{2}.x^2 + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "x^2",
            values: ["\\frac{1}{3}.x^3 + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "x^n",
            values: ["\\frac{1}{n+1}.x^{n+1} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "n^x",
            values: ["\\frac{1}{ln(n)}.n^x"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "\\frac{1}{x}",
            values: ["ln|x| + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "\\sqrt{x}",
            values: ["\\frac{2}{3}.x^{\\frac{3}{2}} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "\\sqrt[n]{x}",
            values: ["\\frac{n}{n+1}.x^{\\frac{n+1}{n}} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "e^x",
            values: ["e^x + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "ln(x)",
            values: ["x.ln(x) - x + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "sin{x}",
            values: ["-cos{x} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "cos{x}",
            values: ["sin{x} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "1 + tan^2(x)",
            values: ["tan(x) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "tan(x)",
            values: ["-ln|cos(x)| + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "sinh(x)",
            values: ["cosh(x) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "cosh(x)",
            values: ["sinh(x) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "tanh(x)",
            values: ["ln(cosh(x)) + k"]
        }
    )

    return tableauRecapFonctionsPrimitives;

};

export default useTableauRecapFonctionsPrimitives;