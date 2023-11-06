const useTableauRecapOperationsDerivees = () => {
   
    var tableauRecapOperationsDerivees = [];
    var k = 0;

    tableauRecapOperationsDerivees.push(
        {
            id: k++,
            title: "opération",
            values: ["d \\acute{e} riv \\acute{e} e"]
        }
    )
    
    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "\\lambda u \\enspace (avec \\enspace \\lambda \\in \\mathbb{R})",
            values: ["\\lambda u'"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "u + v",
            values: ["u' + v'"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "u v",
            values: ["u'.v + v'.u"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "\\frac{u}{v}",
            values: ["\\frac{u'.v - v'.u}{v^2} "]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "(f \\circ u) = f(u) \\enspace",
            values: ["u'.(f' \\circ u) = u'.(f'(u))"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "u^{-1} \\enspace (fonction \\enspace r\\acute{e}ciproque)",
            values: ["\\frac{1}{u' \\circ u^{-1}} = \\frac{1}{u'(u^{-1})} "]
        }
    )

    return tableauRecapOperationsDerivees;

};

export default useTableauRecapOperationsDerivees;