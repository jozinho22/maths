const useTableauRecapPuissances = () => {
   
    var tableauRecapPuissances = [];
    var k = 0;

    tableauRecapPuissances.push(
        {
            id: k++,
            title: "formules",
            values: ["restriction"]
        }
    )
    
    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^0=1",
            values: [""]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^a.x^b = x^{a+b}",
            values: ["(a, \\enspace b) \\in \\mathbb{R}^2"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{x^a}{x^b} = x^{a-b}",
            values: ["(a, \\enspace b) \\in \\mathbb{R}^2, \\enspace x \\neq 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "(x^a)^b = x^{ab}",
            values: ["(a, \\enspace b) \\in \\mathbb{R}^2"]
        }
    )

     tableauRecapPuissances.push(
         {
            id: k++,
            title: "(xy)^a = x^a.y^a",
            values: ["a\\in \\mathbb{R}"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\Big(\\frac{x}{y}\\Big)^{a} = \\frac{x^a}{y^a}",
            values: ["a \\in \\mathbb{R}, y \\neq 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x} = x^{-1}",
            values: ["x \\neq 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x^a} = x^{-a}",
            values: ["x \\neq 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "\\frac{1}{x^{-a}} = x^{a}",
            values: ["x \\neq 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^{\\frac{1}{2}} = \\sqrt{x}",
             values: ["x \\geqslant 0"]
        }
    )

    tableauRecapPuissances.push(
         {
            id: k++,
            title: "x^{\\frac{1}{a}} = \\sqrt[a]{x}",
            values: ["x \\geqslant 0 \\enspace si \\enspace \\frac{a}{2} \\enspace fini \\enspace par \\enspace un \\enspace nombre \\enspace pair"]
        }
    )
    
    return tableauRecapPuissances;

};

export default useTableauRecapPuissances;