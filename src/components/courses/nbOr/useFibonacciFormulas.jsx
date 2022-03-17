import useFibonacci from './useFibonacci';

const useFibonacciFormulas = () => {

    var fibo = useFibonacci();
    var fiboFormulas = []

    for(var k = 0; k < fibo.length; k++) {
        if(fibo[k].id === -13) {
            continue;
        }

        var fiboFormula = "\\( \\phi^{" + (fibo[k].id) + "} = " 
            + (fibo[k].nb === 1 ? "\\phi" : fibo[k].nb === -1 ? "-\\phi" : fibo[k].nb === 0 ? "" : fibo[k].nb + "\\phi") 
            + (fibo[k - 1].nb !== 0 ? " + " + fibo[k - 1].nb : "") + "\\)";

        fiboFormulas.push(
            {
                id: fibo[k].id,
                formula: fiboFormula 
            }
        );
    }
    
    return fiboFormulas;
   
}

export default useFibonacciFormulas;