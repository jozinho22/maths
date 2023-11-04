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
            title: "\\lambda, \\enspace (avec \\enspace \\lambda \\in \\mathbb{R})",
            values: ["0"]
        }
    )

    tableauRecapFonctionsDerivees.push(
         {
            id: k++,
            title: "ax + b, \\enspace  (avec \\enspace (a, b) \\in \\mathbb{R}^2) ",
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

    return tableauRecapFonctionsDerivees;

};

export default useTableauRecapFonctionsDerivees;