const useTableauDeSignesDuPremierDegreExempleValues = () => {
   
    var tableauxDeVariationValues = [];
    var k = 0;

    tableauxDeVariationValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "- \\frac{3}{2}", "...", "+\\infty"]
        }
    )

    tableauxDeVariationValues.push(
         {
            id: k++,
            title: "f(x) = 2x + 3",
            values: ["-\\infty", "-", "0", "+", "+\\infty"]
        }
    )

    return tableauxDeVariationValues;

};

export default useTableauDeSignesDuPremierDegreExempleValues;