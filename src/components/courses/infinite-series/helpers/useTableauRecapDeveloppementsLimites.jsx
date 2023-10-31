const useTableauRecapDeveloppementsLimites = () => {
   
    var tableauRecapDevLim = [];
    var k = 0;

    tableauRecapDevLim.push(
        {
            id: k++,
            title: "a",
            values: ["fonction", "DL_n(a)", "DL_n(a) \\enspace (somme)"]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "0",
            values: ["e^x", "1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... + \\frac{x^n}{n!} + o(x^{n+1}) ", "\\sum_{k=0}^n \\frac{x^n}{n!} + o(x^{n+1}) "]
        }
    )

    return tableauRecapDevLim;

};

export default useTableauRecapDeveloppementsLimites;