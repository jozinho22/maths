const useTableauTablesDeMultiplication = () => {
   
    var listI = []
    for(var i = 1; i < 10; i++) {
        listI.push(i)
    }
    var tableauTimesTable = [];
    var k = 0;

    tableauTimesTable.push(
        {
            id: k++,
            title: "nombre",
            values: listI.map(i => i.toString())
        }
    )

    for(var j = 0; j < listI.length; j++) {
         tableauTimesTable.push(
            {
                id: k++,
                title: listI[j],
                values: listI.map(i => {
                    if(i <= j) {
                        return "";
                    } else {
                        return  (i * listI[j]).toString()
                    }
                })
            }
        )
    }
    
    return tableauTimesTable;

};

export default useTableauTablesDeMultiplication;