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
            title: "ku",
            values: ["ku'"]
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
            title: "u \\times v",
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
            title: "u^{-1}",
            values: ["\\frac{1}{u'(u^{-1})} "]
        }
    )

    return tableauRecapOperationsDerivees;

};

export default useTableauRecapOperationsDerivees;