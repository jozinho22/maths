const useTableauRecapFonctionsPrimitivesComposees = () => {
   
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
            title: "e^{ax+b}",
            values: ["\\frac{1}{a}.e^{ax+b} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
         {
            id: k++,
            title: "sin(ax)",
            values: ["-\\frac{1}{a}cos(ax)  + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "cos(ax)",
            values: ["\\frac{1}{a}sin(ax) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "1 + tan^2(ax)",
            values: ["\\frac{1}{a}tan(ax) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{sin^2(x)}",
            values: [" -\\frac{1}{tan(x)} + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{\\sqrt{x^2 - a^2}}",
            values: [" ln \\left|x+ \\sqrt{x^2 - a^2} \\right| + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{\\sqrt{x^2 + a^2}}",
            values: [" ln(x+ \\sqrt{x^2 + a^2}) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{\\sqrt{a^2 - x^2}}",
            values: [" Arcsin \\left(\\frac{x}{a}\\right) + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{a^2 - x^2}",
            values: [" \\frac{1}{2a} ln \\left|\\frac{a + x }{a - x}\\right| + k"]
        }
    )

    tableauRecapFonctionsPrimitives.push(
        {
            id: k++,
            title: "\\frac{1}{a^2 + x^2}",
            values: [" \\frac{1}{a} Arctan \\left(\\frac{x}{a} \\right) + k"]
        }
    )

    return tableauRecapFonctionsPrimitives;

};

export default useTableauRecapFonctionsPrimitivesComposees;