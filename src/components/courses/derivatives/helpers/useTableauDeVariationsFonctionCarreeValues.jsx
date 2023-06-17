const useTableauDeVariationsFonctionCarreeValues = () => {
   
    var tableauxDeVariationsValues = [];
    var k = 0;

    tableauxDeVariationsValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", 0, "...", "+\\infty"]
        }
    )

    tableauxDeVariationsValues.push(
         {
            id: k++,
            title: "(x^2)'",
            values: ["-\\infty", "-", 0, "+", "+\\infty"]
        }
    )

    tableauxDeVariationsValues.push(
         {
            id: k++,
            title: "x^2",
            values: ["+\\infty", "\\searrow", 0, "\\nearrow", "+\\infty"]
        }
    )

    return tableauxDeVariationsValues;

};

export default useTableauDeVariationsFonctionCarreeValues;