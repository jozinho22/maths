const useTableauRecapFonctionsPrimitives = () => {
   
    var tableauRecapFonctionsDerivees = [];
    var k = 0;

    tableauRecapFonctionsDerivees.push(
        {
            id: k++,
            title: "fonction",
            values: ["d \\acute{e} riv \\acute{e} e"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "0",
            values: ["k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "a",
            values: ["ax + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x",
            values: ["\\frac{1}{2}.x^2 + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x^2",
            values: ["\\frac{1}{3}.x^3 + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x^n",
            values: ["\\frac{1}{n}.x^n + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "n^x",
            values: ["ln(n).n^x"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "\\frac{1}{x}",
            values: ["ln|x| + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "\\sqrt{x}",
            values: ["\\frac{2}{3}.x^{\\frac{3}{2}} + k = \\frac{2}{3}.\\sqrt[3]{x^2} + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "\\sqrt[n]{x}",
            values: ["\\frac{n}{n+1}.x^{\\frac{n+1}{n}} + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "e^x",
            values: ["e^x + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "e^{-x}",
            values: ["-e^{-x} + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "e^{ax+b}",
            values: ["\\frac{1}{a}.e^{ax+b} + k"]
        }
    )


    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ln(x)",
            values: ["x.ln(x) - x + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "sin{x}",
            values: ["-cos{x} + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "cos{x}",
            values: ["sin{x} + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "tan(x)",
            values: ["-ln|cos(x)| + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "sh(x)",
            values: ["ch(x) + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ch(x)",
            values: ["sh(x) + k"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "th(x)",
            values: ["ln(ch(x)) + k"]
        }
    )

    return tableauRecapFonctionsDerivees;

};

export default useTableauRecapFonctionsPrimitives;