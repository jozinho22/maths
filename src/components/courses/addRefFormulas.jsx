const addRefFormulas = ( refFormulas, formula, index ) => {

    var found = false;
    for(var i = 0; i < refFormulas.length; i++) {
        if (refFormulas[i].formula === formula) {
            found = true;
            break;
        }
    }

    if(!found) {
        refFormulas.push(
            {
                id: index,
                formula: formula
            }
        );
    }
   
    return refFormulas;
}

export default addRefFormulas;