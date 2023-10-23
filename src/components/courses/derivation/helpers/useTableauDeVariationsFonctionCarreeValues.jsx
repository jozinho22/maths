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
            title: "f'",
            values: ["-\\infty", "-", 0, "+", "+\\infty"]
        }
    )

    tableauxDeVariationsValues.push(
         {
            id: k++,
            title: "f",
            values: ["+\\infty", "\\searrow", 1, "\\nearrow", "+\\infty"]
        }
    )

    return tableauxDeVariationsValues;

};

export default useTableauDeVariationsFonctionCarreeValues;