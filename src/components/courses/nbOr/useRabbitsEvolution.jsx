const useRabbitsEvolution = () => {
   
    var values = [];
    var k = 0;

    for(k; k < 12; k++) {
        values.push(
            {
                id: k + 1,
                nb: (values[k-2] ? values[k-2].nb : 0) + (values[k-1] ? values[k-1].nb : 1)
            }
        );
    }

    return values;

};

export default useRabbitsEvolution;