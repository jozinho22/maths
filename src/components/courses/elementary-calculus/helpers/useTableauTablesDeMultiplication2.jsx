const useTableauTablesDeMultiplication2 = () => {
   
    var listI = []
    for(var i = 10; i < 20; i++) {
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
                    if(i <= j + 9) {
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