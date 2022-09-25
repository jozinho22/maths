import useFibonacci from './useFibonacci';

const useFibonacciFormulas = () => {

    var fibo = useFibonacci();
    var fiboFormulas = []

    for(var k = 0; k < fibo.length; k++) {
        if(fibo[k].id === -13) {
            continue;
        }

        var fiboFormula1 = "\\("
            .concat("\\phi^{" + (fibo[k].id) + "}")
            .concat(" = ")
            .concat(fibo[k].nb === 1 ? "\\phi" : fibo[k].nb === -1 ? "-\\phi" : fibo[k].nb === 0 ? "" : fibo[k].nb + "\\phi")
            .concat(fibo[k - 1].nb > 0 ? " + " + fibo[k - 1].nb : fibo[k - 1].nb < 0 ? fibo[k - 1].nb : "")
            .concat("\\)")
            /* + (fibo[k].nb === 1 ? "\\phi" : fibo[k].nb === -1 ? "-\\phi" : fibo[k].nb === 0 ? "" : fibo[k].nb + "\\phi") 
            + (fibo[k - 1].nb > 0 ? " + " + fibo[k - 1].nb : fibo[k - 1].nb < 0 ? fibo[k - 1].nb : "") + "\\)";
 */
        var fiboFormula2 = "\\(" 
            .concat("\\phi^{" + (fibo[k].id) + "}")
            .concat(" = ")
            .concat(fibo[k-1].id === 1 ? "\\phi" : fibo[k-1].id === 0 ? "1" : "\\phi^{" + (fibo[k-1].id) + "}")
            .concat(" + ")
            .concat(fibo[k-1].id - 1 === 1 ? "\\phi" : fibo[k-1].id - 1 === 0 ? "1" : "\\phi^{" + (fibo[k-1].id - 1) + "}")
            .concat(" \\)")
/*             + "\\phi^{" + (fibo[k-1].id) + "}" + " + " + "\\phi^{" + (fibo[k-1].id - 1) + "}" + "\\)";
 */
        fiboFormulas.push(
            {
                id: fibo[k].id,
                formula1: fiboFormula1,
                formula2: fiboFormula2
            }
        );
    }
    
    return fiboFormulas;
   
}

export default useFibonacciFormulas;