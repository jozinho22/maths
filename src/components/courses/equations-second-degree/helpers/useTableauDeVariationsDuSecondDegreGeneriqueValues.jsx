const useTableauDeVariationsDuSecondDegreGeneriqueValues = () => {
   
    var tableauxDeVariationValues = [];
    var k = 0;

    tableauxDeVariationValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_1 = \\frac{ - b -\\sqrt{\\Delta}}{2a}", "...", "-\\frac{b}{2a}", "...", "x_2 = \\frac{ - b +\\sqrt{\\Delta}}{2a}", "...", "+\\infty"]
        }
    )

    tableauxDeVariationValues.push(
         {
            id: k++,
            title: "f'(x) = 2ax - b",
            values: ["\\left[-signe \\enspace de \\enspace a \\right]\\infty", "\\left[- signe \\enspace de \\enspace a \\right]", " \\left[-signe \\enspace de \\enspace a \\right]", " \\left[-signe \\enspace de \\enspace a \\right]", "0", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]\\infty"] 
        }
    )

    tableauxDeVariationValues.push(
         {
            id: k++,
            title: "f(x) =  ax^2 +bx + c",
            values: ["\\left[signe \\enspace de \\enspace a \\right]\\infty",  "\\left[ \\enspace \\searrow \\enspace si \\enspace a > 0, \\enspace \\nearrow \\enspace si \\enspace a < 0  \\enspace \\right]" , "0" , "\\left[\\enspace \\searrow \\enspace si \\enspace a > 0, \\enspace \\nearrow \\enspace si \\enspace a < 0  \\enspace \\right]", "f \\left(-\\frac{b}{2a}\\right) = \\frac{-\\Delta}{4a}", "\\left[ \\enspace \\nearrow \\enspace si \\enspace a > 0,  \\enspace \\searrow \\enspace si \\enspace a < 0  \\enspace \\right]", "0", "\\left[ \\enspace \\nearrow \\enspace si \\enspace a > 0, \\enspace \\searrow \\enspace si \\enspace a < 0  \\enspace \\right]", "\\left[signe \\enspace de \\enspace a \\right]\\infty"] 
        }
    )

    return tableauxDeVariationValues;

};

export default useTableauDeVariationsDuSecondDegreGeneriqueValues;