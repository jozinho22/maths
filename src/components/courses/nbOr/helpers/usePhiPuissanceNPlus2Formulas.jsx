import useFibonacciInBothSenses from './useFibonacciInBothSenses';

const usePhiPuissanceNPlus2Formulas = () => {

    var fibo = useFibonacciInBothSenses();

    var phiPuissanceNPlus2Values = []

    for(var k = 0; k < fibo.length - 3; k++) {

        if(fibo[k].id < -12) {
            continue;
        }

        var formula = "\\("
            .concat(fibo[k+ 2].id === 1 ? "\\phi" : "\\phi^{" + (fibo[k+ 2].id) + "}")
            .concat(" = ")
            .concat(fibo[k+ 2].id === 0 ? "1" : fibo[k+ 1].id === 0 ? "1" : fibo[k+ 1].id === 1 ? "\\phi" : "\\phi^{" + (fibo[k+ 1].id) + "}")
            .concat(fibo[k+ 2].id === 0 ? "" : " + ")
            .concat(fibo[k+ 2].id === 0 ? "" : fibo[k].id === 0 ? "1" : fibo[k].id === 1? "\\phi" : "\\phi^{" + (fibo[k].id) + "}")
            .concat("\\)")
      
        phiPuissanceNPlus2Values.push(
            {
                id: fibo[k].id,
                formula: formula,
            }
        );
    
    }
    
    return phiPuissanceNPlus2Values;
   
}

export default usePhiPuissanceNPlus2Formulas;