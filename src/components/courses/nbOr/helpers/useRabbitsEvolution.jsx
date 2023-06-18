const useRabbitsEvolution = () => {
   
    var rabbitsValues = [];
    var k = 0;

    for(k; k < 14; k++) {
        rabbitsValues.push(
            {
                id: k + 1,
                nb: (rabbitsValues[k-2] ? rabbitsValues[k-2].nb : 0) + (rabbitsValues[k-1] ? rabbitsValues[k-1].nb : 1)
            }
        );
    }

    return rabbitsValues;

};

export default useRabbitsEvolution;