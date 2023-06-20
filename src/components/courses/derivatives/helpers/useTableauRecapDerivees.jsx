const useTableauRecapDerivees = () => {
   
    var tableauRecapDerivees = [];
    var k = 0;

    tableauRecapDerivees.push(
        {
            id: k++,
            title: "fonction",
            values: ["dérivée"]
        }
    )
    
    tableauRecapDerivees.push(
         {
            id: k++,
            title: "h(x) = f + g",
            values: ["f' + g'"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "h(x) = f \\times g",
            values: ["f'.g + g'.f"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "h(x) = \\frac{f}{g}",
            values: ["\\frac{f'g - g'f}{g^2} "]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "h(x) = (f \\circ g)(x)",
            values: ["g'(x).(f'(g(x))"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = k",
            values: ["0"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = ax + b",
            values: ["a"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = x^2",
            values: ["2x"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = x^3",
            values: ["3x^2"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = \\frac{1}{x}",
            values: [" - \\frac{1}{x^2}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = x^n",
            values: ["n.x^{n - 1}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = \\sqrt{x}",
            values: ["\\frac{1}{2\\sqrt{x}}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = sin{x}",
            values: ["cos{x}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = cos{x}",
            values: ["-sin{x}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = tan(x)",
            values: ["1+ tan^2(x)"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = sin^{-1}(x)",
            values: [" \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = cos^{-1}(x)",
            values: ["- \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = tan^{-1}(x)",
            values: ["\\frac{1}{ 1 + x^2}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = e^{x}",
            values: ["e^{x}"]
        }
    )

    tableauRecapDerivees.push(
         {
            id: k++,
            title: "f(x) = ln(x)",
            values: ["\\frac{1}{x}"]
        }
    )

    return tableauRecapDerivees;

};

export default useTableauRecapDerivees;