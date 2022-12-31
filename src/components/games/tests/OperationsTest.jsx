import React from 'react';

import OperationsTestQuestionDisplay from './OperationsTestQuestionDisplay';
import OperationsTestManager from './OperationsTestManager';

export const OperationsTestContext = React.createContext(null);

const OperationsTest = () => {

    const [gameStarted, setGameStarted] =  React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(initUser());
    const [questions, setQuestions] = React.useState([]);

    var operationType = initOperationType();
    var levels = createLevels();
    var questionsByLevel = createQuestionsByLevel(operationType);

    function initOperationType() {
        let path = window.location.href;
        let relativePath = path.substring(path.lastIndexOf('/') + 1);

        let operationType = '';
        switch(relativePath) {
            case 'reviser-ses-tables' : operationType = 'x'; break;
            case 'additionner' : operationType = '+'; break;
        }
        return operationType;
    }

    function initUser() {
        return {
            name: '',
            score: 0,
            answers: []
        }
    }

    function createLevels() {
        var levelSlice = [];
        var easyLevel = {
            id: 0,
            title: "newb",
            maxInt: 9,
            bStyle: "Green"
        }
        var mediumLevel = {
            id: 1,
            title: "je gère",
            maxInt: 20,
            bStyle: "Orange"
        }
        var warriorLevel = {
            id: 2,
            title: "math warrior",
            maxInt: 99,
            bStyle: "Red"
        }
        
        levelSlice.push(easyLevel, mediumLevel, warriorLevel);
        return levelSlice;
    }

    function createQuestionsByLevel(operationType) {

        var nbQuestions = 10;
        var randomQuestionsByLevelSlice = [];
        for (var i = 0; i < levels.length; i++) {
            var randomQuestions = [];
            for (var j = 0; j < nbQuestions; j++) {
                var a = getRandomInt(levels[i].maxInt);
                var b = getRandomInt(levels[i].maxInt);
                var enounce = a + ' ' + operationType + ' ' + b + " = "; 
                var question = {
                    id: j,
                    a: a,
                    b: b,
                    enounce: enounce,
                    goodAnswer: operationType === 'x' ? a*b : operationType ==='+' ? a+b : <></>
                }
                randomQuestions.push(question);
            }
            randomQuestionsByLevelSlice.push(randomQuestions); 
        }

        return randomQuestionsByLevelSlice;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const next = () => {
        setCount (count + 1);
    }

    const reInit = (levelId) => {
        setCount(0);
        setUser(initUser());
        setQuestions(createQuestionsByLevel(operationType));
        launchGame(levelId);
    }

    const launchGame = (levelId) => {
        setQuestions(questionsByLevel[levelId]);
        setGameStarted(true);
    }

    var context = {
        operationType,
        levels,
        count,
        questions,
        user,
        setUser,
        launchGame,
        gameStarted,
        next,
        reInit
    }

    return (
            <OperationsTestContext.Provider value={context}>
                <OperationsTestManager>
                    <OperationsTestQuestionDisplay operationType={operationType} /> 
                </OperationsTestManager>
            </OperationsTestContext.Provider>         
    );

}

export default OperationsTest;