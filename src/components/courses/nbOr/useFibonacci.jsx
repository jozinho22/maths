import useRabbitsEvolution from './useRabbitsEvolution';

const useFibonacci = () => {

    const reversePattern = (fnPlus2, fnPlus1) => {
        return fnPlus2 - fnPlus1;
    }

    var fibo = useRabbitsEvolution();
  
    var k = 0;
    for(k; k > -13; k--) {
        fibo.unshift(
            {
                id: k,
                nb: reversePattern(fibo[1].nb, fibo[0].nb)
            }
        );
    }

    console.log(fibo)
    
    return fibo;
   
}

export default useFibonacci;