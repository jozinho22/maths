import useFibonacciInBothSenses from './useFibonacciInBothSenses';

const usePhiPuissanceNPlus1Formulas = () => {

    var fibo = useFibonacciInBothSenses();

    var phiPuissanceNPlus1Values = []

    for(var k = 0; k < fibo.length - 2; k++) {

        if(fibo[k].id < -12) {
            continue;
        }

        var formula = "\\("
            .concat("\\phi^{" + (fibo[k+ 1].id) + "}")
            .concat(" = ")
            .concat(fibo[k + 1].nb === 1 ? "\\phi" : fibo[k + 1].nb === -1 ? "-\\phi" : fibo[k + 1].nb === 0 ? "" : fibo[k + 1].nb + "\\phi")
            .concat(fibo[k + 1].nb !== 0 && fibo[k].nb > 0 ? " + " + fibo[k].nb : fibo[k].nb === 0 ? "" : fibo[k].nb)
            .concat("\\)")
      
        phiPuissanceNPlus1Values.push(
            {
                id: fibo[k].id,
                formula: formula,
            }
        );
    
    }
    
    return phiPuissanceNPlus1Values;
   
}

export default usePhiPuissanceNPlus1Formulas;