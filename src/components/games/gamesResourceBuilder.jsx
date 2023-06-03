import OperationsTest from "./tests/OperationsTest";

function gamesResourceBuilder() {

    var gameItems = [];
    var i = 0;

    var tablesTest = {
      id: i++,
      title: 'Tables de multiplication',
      metaContent: 'Jeux des tables de multiplications : un jeu original pour réviser ses tables et s\'entraîner à calculer des multiplications.',
      relativePath: 'reviser-ses-tables',
      component: <OperationsTest operationType={'x'} />
    }

    var additionsTest = {
      id: i++,
      title: 'Additions',
      metaContent: 'Jeux des tables de additions : un jeu original et s\'entraîner à calculer des additions.',
      relativePath: 'additionner',
      component: <OperationsTest operationType={'+'} />
    }

    gameItems.push(
        tablesTest,
        additionsTest
      );

    return gameItems;

}

export default gamesResourceBuilder;