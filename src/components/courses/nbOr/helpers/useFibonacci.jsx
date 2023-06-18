import useRabbitsEvolution from './useRabbitsEvolution';

const useFibonacci = () => {

    const pattern = (fnPlus2, fnPlus1) => {
        return fnPlus2 + fnPlus1;
    }

    var fibo = useRabbitsEvolution();
  
    var k = 0;
    for(k; k < 14 ; k++) {
        fibo.push(
            {
                id: k,
                nb: pattern(fibo[1].nb, fibo[0].nb)
            }
        );
    }
    
    return fibo.slice(0, 14);
   
}

export default useFibonacci;