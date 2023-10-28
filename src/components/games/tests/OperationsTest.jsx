import React from 'react';

import OperationsTestQuestionDisplay from './OperationsTestQuestionDisplay';
import OperationsTestManager from './OperationsTestManager';

import './OperationsTest.css';

export const OperationsTestContext = React.createContext(null);

const OperationsTest = ( {operationType} ) => {

    const [gameStarted, setGameStarted] =  React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState({});
    const [questions, setQuestions] = React.useState([]);

    var levels = createLevels();

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
            maxInt: 10,
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
            maxInt: 100,
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

    const launchGame = (levelId) => { 
        setCount(0);
        setUser(initUser());
        setQuestions(createQuestionsByLevel(operationType)[levelId])
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
        next
    }

    return  <>
                <OperationsTestContext.Provider value={context}>
                    <OperationsTestManager>
                        <OperationsTestQuestionDisplay operationType={operationType} /> 
                    </OperationsTestManager>
                </OperationsTestContext.Provider>   
            </>      
    ;

}

export default OperationsTest;