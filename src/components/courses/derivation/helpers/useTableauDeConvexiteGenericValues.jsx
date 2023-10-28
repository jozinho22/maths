const useTableauDeConvexiteGenericValues = () => {
   
    var tableauDeConvexiteGenericValues = [];
    var k = 0;

    tableauDeConvexiteGenericValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_1", "\\enspace",  "x_2", "...", "+\\infty"]
        }
    )

    tableauDeConvexiteGenericValues.push(
         {
            id: k++,
            title: "f''(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f''(x)", "\\left[signe \\enspace de \\enspace f'' \\right]", "0", "\\left[signe \\enspace de \\enspace f'' \\right]", "0", "\\left[signe \\enspace de \\enspace f'' \\right]", "lim_{x \\to +\\infty} \\enspace f''(x)"]
        }
    )

    tableauDeConvexiteGenericValues.push(
         {
            id: k++,
            title: "f(x)",
            values: ["lim_{x \\to -\\infty} \\enspace f(x)", "\\left[convexit \\acute{e} \\enspace de \\enspace f \\right]", "inflexion \\enspace si \\enspace f'' \\enspace change \\enspace de \\enspace signe", "\\left[convexit \\acute{e} \\enspace de \\enspace f \\right]", "inflexion \\enspace si \\enspace f'' \\enspace change \\enspace de \\enspace signe", "\\left[convexit \\acute{e} \\enspace de \\enspace f \\right]", "lim_{x \\to +\\infty} \\enspace f(x)"]
        }
    )

    return tableauDeConvexiteGenericValues;

};

export default useTableauDeConvexiteGenericValues;