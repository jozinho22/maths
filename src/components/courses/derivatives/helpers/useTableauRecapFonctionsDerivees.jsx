const useTableauRecapFonctionsDerivees = () => {
   
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
            title: "k",
            values: ["0"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ax + b",
            values: ["a"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "\\frac{1}{x}",
            values: [" - \\frac{1}{x^2}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x^2",
            values: ["2x"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x^3",
            values: ["3x^2"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "x^n",
            values: ["n.x^{n - 1}"]
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
            title: "\\sqrt{x}",
            values: ["\\frac{1}{2\\sqrt{x}}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "\\sqrt[n]{x}",
            values: ["\\frac{1}{n.(\\sqrt[n]{x})^{n-1}}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "e^{x}",
            values: ["e^{x}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ln(x)",
            values: ["\\frac{1}{x}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "sin{x}",
            values: ["cos{x}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "cos{x}",
            values: ["-sin{x}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "tan(x)",
            values: ["1 + tan^2(x) = \\frac{1}{cos^2(x)}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "sin^{-1}(x)",
            values: [" \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "cos^{-1}(x)",
            values: ["- \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "tan^{-1}(x)",
            values: ["\\frac{1}{1 + x^2}"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "sh(x)",
            values: ["ch(x)"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ch(x)",
            values: ["sh(x)"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "th(x)",
            values: ["1 - tan^2(x) = \\frac{1}{ch^2(x)}"]
        }
    )

    return tableauRecapFonctionsDerivees;

};

export default useTableauRecapFonctionsDerivees;