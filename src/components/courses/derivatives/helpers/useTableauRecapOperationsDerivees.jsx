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
            title: "kf",
            values: ["kf'"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "f + g",
            values: ["f' + g'"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "f \\times g",
            values: ["f'.g + g'.f"]
        }
    )

    tableauRecapOperationsDerivees.push(
         {
            id: k++,
            title: "\\frac{f}{g}",
            values: ["\\frac{f'.g - g'.f}{g^2} "]
        }
    )

    return tableauRecapOperationsDerivees;

};

export default useTableauRecapOperationsDerivees;