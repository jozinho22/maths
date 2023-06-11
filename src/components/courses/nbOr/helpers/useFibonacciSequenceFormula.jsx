import useFibonacciInBothSenses from './useFibonacciInBothSenses';

const useFibonacciSequenceFormula = () => {

    var fibo = useFibonacciInBothSenses();

    var fiboSequenceFormulaValues = []

    for(var k = 0; k < fibo.length - 2; k++) {

        if(fibo[k].id < -12) {
            continue;
        }

        var fiboSequenceFormula = "\\(" 
            .concat("F_{" + (fibo[k + 2].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].nb)
            .concat(fibo[k].nb >= 0 ? " + " + fibo[k].nb : fibo[k].nb)
            .concat(" \\)")


        fiboSequenceFormulaValues.push(
            {
                id: fibo[k].id,
                formula: fiboSequenceFormula,
                result: fibo[k + 1].nb + fibo[k].nb
            }
        );
    
    }
    
    return fiboSequenceFormulaValues;
   
}

export default useFibonacciSequenceFormula;