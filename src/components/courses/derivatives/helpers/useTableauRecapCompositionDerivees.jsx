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
            title: "(f \\circ u) \\enspace (g \\acute{e} n \\acute{e} rale)",
            values: ["u'.(f'(u))"]
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
            values: ["u'.\\frac{u^{1-\\frac{1}{n}}}{n} = u'.\\left( \\frac{1}{n} . \\frac{1}{\\sqrt[n]{u}} \\right)^{n - 1} "]
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
            values: ["u'.(1 + tan(u)) = u'.\\frac{1}{cos^2(u)}"]
        }
    )


    return tableauRecapCompositionsDerivees;

};

export default useTableauRecapCompositionDerivees;