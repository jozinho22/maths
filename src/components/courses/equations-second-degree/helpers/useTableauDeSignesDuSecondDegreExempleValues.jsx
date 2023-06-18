const useTableauDeSignesDuSecondDegreExempleValues = () => {
   
    var tableauxDeSignesValues = [];
    var k = 0;

    tableauxDeSignesValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "\\frac{1}{2}", "...", "1", "...", "+\\infty"]
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_1(x) = 2",
            values: ["-\\infty", "+", "+", "+", "+", "+", "+\\infty"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_2(x) = x-\\frac{1}{2}",
            values: ["-\\infty", "-", "0", "+", "+", "+", "+\\infty"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_3(x) = x-1",
            values: ["-\\infty", "-", "-", "-", "0", "+", "+\\infty"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f(x) =f_1(x).f_2(x).f_3(x)",
            values: ["+\\infty", "+", "0", "-", "0", "+", "+\\infty"]
        }
    )

    return tableauxDeSignesValues;

};

export default useTableauDeSignesDuSecondDegreExempleValues;