const useTableauDeSignesEtDeVariationsDuSecondDegreExempleValues = () => {
   
    var tableauxDeSignesEtDeVariationValues = [];
    var k = 0;

    tableauxDeSignesEtDeVariationValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "\\frac{1}{2}", "...", "\\frac{3}{4}", "...", "1", "...", "+\\infty"]
        }
    )

    tableauxDeSignesEtDeVariationValues.push(
         {
            id: k++,
            title: "f(x) =  2x^2 -3x + 1",
            values: ["+\\infty", "+", "0", "-", "f \\left(\\frac{3}{4}\\right) = - \\frac{1}{8}", "-", "0", "+", "+\\infty"]
        }
    )

    tableauxDeSignesEtDeVariationValues.push(
         {
            id: k++,
            title: "f(x) =  2x^2 -3x + 1",
            values: ["+\\infty",  "\\searrow", "0" , "\\searrow", "f \\left(\\frac{3}{4}\\right) = - \\frac{1}{8}", "\\nearrow", "0", "\\nearrow", "+\\infty"] 
        }
    )

    return tableauxDeSignesEtDeVariationValues;

};

export default useTableauDeSignesEtDeVariationsDuSecondDegreExempleValues;