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
            title: "f(x) = ax + b",
            values: ["\\left[-(signe \\enspace de \\enspace a) \\right]\\infty", "\\left[-(signe \\enspace de \\enspace a) \\right]", "0", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]\\infty"]
        }
    )

    return tableauxDeVariationValues;

};

export default useTableauDeSignesDuPremierDegreGeneriqueValues;