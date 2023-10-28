const useTableauDeSignesDuSecondDegreGeneriqueValues = () => {
   
    var tableauxDeSignesValues = [];
    var k = 0;

    tableauxDeSignesValues.push(
        {
            id: k++,
            title: "x",
            values: ["-\\infty", "...", "x_1 = \\frac{ - b -\\sqrt{\\Delta}}{2a}", "...", "x_2 =  \\frac{ - b + \\sqrt{\\Delta}}{2a}", "...", "+\\infty"]
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_1(x) = a",
            values: ["\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]","\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_2(x) = x- x_1",
            values: ["-\\infty", "-", "0", "+", "+", "+", "+\\infty"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f_3(x) = x-x_2",
            values: ["-\\infty", "-", "-", "-", "0", "+", "+\\infty"] 
        }
    )

    tableauxDeSignesValues.push(
         {
            id: k++,
            title: "f(x) =f_1(x).f_2(x).f_3(x)",
            values: ["\\left[signe \\enspace de \\enspace a \\right]\\infty", "\\left[signe \\enspace de \\enspace a \\right]", "0", "\\left[-signe \\enspace de \\enspace a \\right]", "0", "\\left[signe \\enspace de \\enspace a \\right]", "\\left[signe \\enspace de \\enspace a \\right]\\infty"]
        }
    )

    return tableauxDeSignesValues;

};

export default useTableauDeSignesDuSecondDegreGeneriqueValues;