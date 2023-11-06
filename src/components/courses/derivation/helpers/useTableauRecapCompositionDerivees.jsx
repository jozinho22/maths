const useTableauRecapCompositionDerivees = () => {
   
    var tableauRecapCompositionsDerivees = [];
    var k = 0;

    tableauRecapCompositionsDerivees.push(
        {
            id: k++,
            title: "composition",
            values: ["d \\acute{e} riv \\acute{e} e"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "(f \\circ u) = f(u) \\enspace",
            values: ["u'.(f' \\circ u) = u'.(f'(u))"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "\\left(\\frac{1}{u}\\right)",
            values: ["\\frac{-u'}{u^2}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "u^n",
            values: ["u'.n.u^{n-1}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "n^u",
            values: ["u'.ln(n).n^u"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "\\sqrt{u}",
            values: ["u'.\\frac{1}{2\\sqrt{u}}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "\\sqrt[n]{u}",
            values: ["u'.\\frac{u^{1-\\frac{1}{n}}}{n} "]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "e^u",
            values: ["u'.e^u"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "ln(u)",
            values: ["\\frac{u'}{u}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "sin(u)",
            values: ["u'.cos(u)"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "cos(u)",
            values: ["-u'.sin(u)"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "tan(u)",
            values: ["u'(1 + tan^2(u))"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "Arcsin \\left(\\frac{u}{a}\\right)",
            values: ["u'. \\frac{1}{\\sqrt{a^2 - u^2}}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "Arccos \\left(\\frac{u}{a}\\right)",
            values: ["-u' .\\frac{1}{\\sqrt{a^2 - u^2}}"]
        }
    )

    tableauRecapCompositionsDerivees.push(
         {
            id: k++,
            title: "Arctan \\left(\\frac{u}{a} \\right)",
            values: ["u'. \\frac{a^2}{\\sqrt{a^2 - u^2}}"]
        }
    )


    return tableauRecapCompositionsDerivees;

};

export default useTableauRecapCompositionDerivees;