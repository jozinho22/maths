const useNewtonSMethodComputation = () => {

    var k = 0;

    var nbIt = 10;
    var accuracy = 6;

    var a0_5 = 5;
    var a0_10 = 10;
    var a0_20 = 20;
    var a0_30 = 30;

    var a0s = [a0_5, a0_10, a0_20, a0_30];

    var listResults = [];

    for(let a = 0; a < a0s.length; a++) {
        var result = 
            {
                a0: a0s[a],
                values: []
            }
        listResults.push(result)
    }

    for(let i = 0; i < listResults.length; i++) {
        for(let k = 0; k < nbIt; k++) {
            var an;
            if(k === 0) {
                an = listResults[i].a0;
            } else {
                an = listResults[i].values[k - 1];
            }
            let aNPlus1 = an - ( (Math.pow(an, 2) - 2 ) / (2*an));
            listResults[i].values.push(Math.round(aNPlus1 * Math.pow(10, accuracy)) / Math.pow(10, accuracy));
        }

    }
        
    var results = [];

    var header = [];
    for(let k = 0; k < nbIt ; k++) {
        header.push("a" + (k + 1))
    }

    /* header  */
    results.push(
        {
            id: k++,
            title: "a_0 ",
            values: header
        }
    )

    /* vectors  */
    for(var j = 0; j < listResults.length; j++) {
        results.push(
            {
                id: k++,
                title: listResults[j].a0,
                values: listResults[j].values
            }
        )
    } 

    return results;

};

export default useNewtonSMethodComputation;