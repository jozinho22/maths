import useFibonacciInBothSenses from './useFibonacciInBothSenses';

const useFibonacciFormulas = () => {

    var fibo = useFibonacciInBothSenses();

    var fiboFormulas = []

    for(var k = 0; k < fibo.length - 2; k++) {

        if(fibo[k].id < -12) {
            continue;
        }

        var fiboFormula0 = "\\(" 
            .concat("F_{" + (fibo[k + 2].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].nb)
            .concat(fibo[k].nb >= 0 ? " + " + fibo[k].nb : fibo[k].nb)
            .concat(" = ")
            .concat(fibo[k + 1].nb + fibo[k].nb)
            .concat(" \\)")

        var fiboFormula1 = "\\("
            .concat("\\phi^{" + (fibo[k+ 1].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].nb === 1 ? "\\phi" : fibo[k + 1].nb === -1 ? "-\\phi" : fibo[k + 1].nb === 0 ? "" : fibo[k + 1].nb + "\\phi")
            .concat(fibo[k + 1].nb !== 0 && fibo[k].nb > 0 ? " + " + fibo[k].nb : fibo[k].nb === 0 ? "" : fibo[k].nb)
            .concat("\\)")
            /* + (fibo[k].nb === 1 ? "\\phi" : fibo[k].nb === -1 ? "-\\phi" : fibo[k].nb === 0 ? "" : fibo[k].nb + "\\phi") 
            + (fibo[k - 1].nb > 0 ? " + " + fibo[k - 1].nb : fibo[k - 1].nb < 0 ? fibo[k - 1].nb : "") + "\\)";
 */
        var fiboFormula2 = "\\(" 
            .concat("\\phi^{" + (fibo[k + 2].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].id === 1 ? "\\phi" : fibo[k + 1].id === 0 ? "1" : "\\phi^{" + (fibo[k + 1].id) + "}")
            .concat(" + ")
            .concat(fibo[k].id === 1 ? "\\phi" : fibo[k].id  === 0 ? "1" : "\\phi^{" + (fibo[k].id) + "}")
            .concat(" \\)")
/*             + "\\phi^{" + (fibo[k-1].id) + "}" + " + " + "\\phi^{" + (fibo[k-1].id - 1) + "}" + "\\)";
 */
        fiboFormulas.push(
            {
                id: fibo[k].id,
                formula0: fiboFormula0,
                formula1: fiboFormula1,
                formula2: fiboFormula2
            }
        );
    
    }
    
    return fiboFormulas;
   
}

export default useFibonacciFormulas;