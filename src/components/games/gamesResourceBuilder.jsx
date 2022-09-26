import TablesTest from "./tables-test/TablesTest";

function gamesResourceBuilder() {

    var gameItems = [];
    var i = 0;

    var tablesTest = {
      id: i++,
      title: 'Jeu pour réviser ses tables de multiplication',
      relativePath: 'reviser-ses-tables',
      component: <TablesTest />
    }

    gameItems.push(
        tablesTest
      );

    return gameItems;

}

export default gamesResourceBuilder;