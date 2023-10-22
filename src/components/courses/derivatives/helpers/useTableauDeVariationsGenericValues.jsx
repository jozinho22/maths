const useTableauDeVariationsGenericValues = () => {
   
    var tableauxDeVariationsValues = [];
    var k = 0;

    tableauxDeVariationsValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_1", "\\enspace",  "x_2", "...", "+\\infty"]
        }
    )

    tableauxDeVariationsValues.push(
         {
            id: k++,
            title: "f'(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f'(x)", "\\left[signe \\enspace de \\enspace f' \\right]", "0", "\\left[signe \\enspace de \\enspace f' \\right]", "0", "\\left[signe \\enspace de \\enspace f' \\right]", "lim_{x \\to +\\infty} \\enspace f'(x)"]
        }
    )

    tableauxDeVariationsValues.push(
         {
            id: k++,
            title: "f(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f(x)", "\\left[variation \\enspace de \\enspace f \\right]", "extremum \\enspace local \\enspace si \\ f' \\enspace change \\enspace de \\enspace signe", "\\left[variation \\enspace de \\enspace f \\right]", "extremum \\enspace local \\enspace si \\ f' \\enspace change \\enspace de \\enspace signe", "\\left[variation \\enspace de \\enspace f \\right]", "lim_{x \\to +\\infty} \\enspace f(x)"]
        }
    )

    return tableauxDeVariationsValues;

};

export default useTableauDeVariationsGenericValues;