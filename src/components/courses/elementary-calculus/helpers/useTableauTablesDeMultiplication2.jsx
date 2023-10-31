const useTableauTablesDeMultiplication2 = (a) => {
   
    var listI = []
    for(var i = a; i < a + 10; i++) {
        listI.push(i)
    }
    var tableauTimesTable = [];
    var k = a + 10 ;

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
                    if(i <= j + a - 1) {
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

export default useTableauTablesDeMultiplication2;