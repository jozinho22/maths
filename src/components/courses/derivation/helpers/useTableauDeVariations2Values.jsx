const useTableauDeVariations2Values = () => {
   
    var tableauDeVariations2Values = [];
    var k = 0;

    tableauDeVariations2Values.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", 0, "...", "+\\infty"]
        }
    )

    tableauDeVariations2Values.push(
         {
            id: k++,
            title: "f' = 2x",
            values: ["-\\infty", "\\nearrow", "\\nearrow" , "\\nearrow", "+\\infty"]
        }
    )

    tableauDeVariations2Values.push(
         {
            id: k++,
            title: "f'' = (f')' = 2",
            values: ["+\\infty", "+", "+", "+", "+\\infty"]
        }
    )

    return tableauDeVariations2Values;

};

export default useTableauDeVariations2Values;