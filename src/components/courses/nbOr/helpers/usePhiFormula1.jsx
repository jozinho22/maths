import useFibonacciInBothSenses from './useFibonacciInBothSenses';

const usePhiFormula1 = () => {

    var fibo = useFibonacciInBothSenses();

    var phiFormula1Values = []

    for(var k = 0; k < fibo.length - 2; k++) {

        if(fibo[k].id < -12) {
            continue;
        }

        var phiFormula1 = "\\("
            .concat("\\phi^{" + (fibo[k+ 1].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].nb === 1 ? "\\phi" : fibo[k + 1].nb === -1 ? "-\\phi" : fibo[k + 1].nb === 0 ? "" : fibo[k + 1].nb + "\\phi")
            .concat(fibo[k + 1].nb !== 0 && fibo[k].nb > 0 ? " + " + fibo[k].nb : fibo[k].nb === 0 ? "" : fibo[k].nb)
            .concat("\\)")
      
        phiFormula1Values.push(
            {
                id: fibo[k].id,
                formula: phiFormula1,
            }
        );
    
    }
    
    return phiFormula1Values;
   
}

export default usePhiFormula1;