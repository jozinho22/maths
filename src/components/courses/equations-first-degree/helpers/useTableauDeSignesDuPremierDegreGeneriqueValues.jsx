const useTableauDeSignesDuPremierDegreGeneriqueValues = () => {
   
    var tableauxDeVariationValues = [];
    var k = 0;

    tableauxDeVariationValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_0 = - \\frac{b}{a}", "...", "+\\infty"]
        }
    )

    tableauxDeVariationValues.push(
         {
            id: k++,
            title: "f(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f(x)", "- \\left[signe \\enspace de \\enspace a \\right]", "0", "\\left[signe \\enspace de \\enspace a \\right]", "lim_{x \\to +\\infty} \\enspace f(x)"]
        }
    )

    return tableauxDeVariationValues;

};

export default useTableauDeSignesDuPremierDegreGeneriqueValues;