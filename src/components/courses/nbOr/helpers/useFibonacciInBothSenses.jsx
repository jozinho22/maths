import useRabbitsEvolution from './useRabbitsEvolution';

const useFibonacciInBothSenses = () => {

    const reversePattern = (fnPlus2, fnPlus1) => {
        return fnPlus2 - fnPlus1;
    }

    var fibo = useRabbitsEvolution();
  
    var k = 0;
    for(k; k > -14; k--) {
        fibo.unshift(
            {
                id: k,
                nb: reversePattern(fibo[1].nb, fibo[0].nb)
            }
        );
    }
    
    return fibo.slice(0, 26);
   
}

export default useFibonacciInBothSenses;