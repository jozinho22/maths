import TablesTest from "./tests/OperationsTest";

function gamesResourceBuilder() {

    var gameItems = [];
    var i = 0;

    var tablesTest = {
      id: i++,
      title: 'Tables de multiplication',
      relativePath: 'reviser-ses-tables',
      component: <TablesTest />
    }

    var additionsTest = {
      id: i++,
      title: 'Additions',
      relativePath: 'additionner',
      component: <TablesTest />
    }

    gameItems.push(
        tablesTest,
        additionsTest
      );

    return gameItems;

}

export default gamesResourceBuilder;