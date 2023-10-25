const useTableauRecapOperationsLimitesSuites = () => {
   
    var tableauRecapOpLimSuites = [];
    var k = 0;

    tableauRecapOpLimSuites.push(
        {
            id: k++,
            title: "opération"
        }
    )

    tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "lim_{n \\to +\\infty} \\enspace | \\enspace u_n \\enspace | = | \\enspace  l \\enspace |"
        }
    )

    tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "lim_{n \\to +\\infty} \\enspace (\\lambda u_n) = \\lambda l "
        }
    )

    tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "lim_{n \\to +\\infty} \\enspace (u_n + v_n) =  l + l' "
        }
    )

    tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "lim_{n \\to +\\infty} \\enspace (u_n. v_n) =  l l' "
        }
    )

    tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "si \\enspace l \\neq 0, \\enspace lim_{n \\to +\\infty} \\enspace \\frac{1}{u_n} =  \\frac{1}{l} "
        }
    )

        tableauRecapOpLimSuites.push(
         {
            id: k++,
            title: "si \\enspace lim_{n \\to +\\infty} \\enspace u_n =  0^+ , \\enspace lim_{n \\to +\\infty} \\enspace \\frac{1}{u_n} =  +\\infty "
        }
    )

    return tableauRecapOpLimSuites;

};

export default useTableauRecapOperationsLimitesSuites;