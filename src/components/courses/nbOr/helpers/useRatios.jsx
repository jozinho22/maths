import useRabbitsEvolution from './useRabbitsEvolution';

const useRatios = () => {
   
    var rabbitsEv = useRabbitsEvolution();
    var ratios = [];
  
    var k = 0;
    for(k; k < rabbitsEv.length ; k++) {
        var ratio = rabbitsEv[k].nb / (rabbitsEv[k - 1] ? rabbitsEv[k - 1].nb : 1);
        ratios.push(
                {
                    id: k + 1,
                    ratio: Number.isInteger(ratio) ? ratio : ratio.toFixed(5)
                }
            );
    }

    return ratios;

};

export default useRatios;