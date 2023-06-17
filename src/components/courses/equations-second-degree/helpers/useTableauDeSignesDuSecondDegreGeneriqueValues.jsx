const useTableauDeSignesDuSecondDegreGeneriqueValues = () => {
   
    var tableauxDeSignesValues = [];
    var k = 0;

    tableauxDeSignesValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_0 = - \\frac{b}{a}", "...", "+\\infty"]
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f(x)", "- \\left[signe \\enspace de \\enspace a \\right]", "0", "\\left[signe \\enspace de \\enspace a \\right]", "lim_{x \\to +\\infty} \\enspace f(x)"]
        }
    )

    return tableauxDeSignesValues;

};

export default useTableauDeSignesDuSecondDegreGeneriqueValues;