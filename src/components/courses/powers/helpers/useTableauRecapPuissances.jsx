const useTableauRecapPuissances = () => {
   
    var tableauRecapPuissances = [];
    var k = 0;

    tableauRecapPuissances.push(
        {
            id: k++,
            title: "formules"
        }
    )
    
    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^0=1"
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^a.x^b = x^{a+b}"
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{x^a}{x^b} = x^{a-b}"
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "(x^a)^b = x^{ab}"
        }
    )

     tableauRecapPuissances.push(
         {
            id: k++,
            title: "(xy)^a = x^a.y^a",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\Big(\\frac{x}{y}\\Big)^{a} = \\frac{x^a}{y^a}",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x} = x^{-1}",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x^n} = x^{-n}",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x^{-n}} = x^{n}",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^{\\frac{1}{2}} = \\sqrt{x}",
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^{\\frac{1}{n}} = \\sqrt[n]{x}",
        }
    )
    
    return tableauRecapPuissances;

};

export default useTableauRecapPuissances;