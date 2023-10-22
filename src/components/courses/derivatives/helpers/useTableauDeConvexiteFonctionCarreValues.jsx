const useTableauDeConvexiteFonctionCarreValues = () => {
   
    var tableauDeConvexiteFonctionCarreValues = [];
    var k = 0;

    tableauDeConvexiteFonctionCarreValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", 0, "...", "+\\infty"]
        }
    )

    tableauDeConvexiteFonctionCarreValues.push(
         {
            id: k++,
            title: "f''(x) = 2",
            values: ["-\\infty", "+", "+", "+", "+\\infty"]
        }
    )

    tableauDeConvexiteFonctionCarreValues.push(
         {
            id: k++,
            title: "f(x) = x^2 + 1",
            values: ["+\\infty", "convexe", "convexe", "convexe", "+\\infty"]
        }
    )

    return tableauDeConvexiteFonctionCarreValues;

};

export default useTableauDeConvexiteFonctionCarreValues;