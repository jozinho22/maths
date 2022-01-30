import React from 'react';

import TablesTestQuestionDisplay from './TablesTestQuestionDisplay';
import TablesTestManager from './TablesTestManager';

import CustomLogger from '../general-content/CustomLogger';

const TablesTest = () => {

    const [gameStarted, setGameStarted] =  React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(initUser());
    const [questions, setQuestions]= React.useState([]);

    var levels = createLevels();
    var questionsByLevel = createQuestionsByLevel();

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
            style: "GreenButton"
        }
        var mediumLevel = {
            id: 1,
            title: "je gère",
            maxInt: 20,
            style: "OrangeButton"
        }
        var warriorLevel = {
            id: 2,
            title: "math warrior",
            maxInt: 99,
            style: "RedButton"
        }
        
        levelSlice.push(easyLevel, mediumLevel, warriorLevel);
        return levelSlice;
    }

    function createQuestionsByLevel() {

        var nbQuestions = 10;
        var randomQuestionsByLevelSlice = [];
        for (var i = 0; i < levels.length; i++) {
            var randomQuestions = [];
            for (var j = 0; j < nbQuestions; j++) {
                var a = getRandomInt(levels[i].maxInt);
                var b = getRandomInt(levels[i].maxInt);

                var enounce = a + " x " + b + " = "; 
    
                var question = {
                    id: j,
                    a: a,
                    b: b,
                    enounce: enounce,
                    goodAnswer: a*b
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

    function initQuestions() {
        return createQuestionsByLevel();
    }

    const next = () => {
        setCount (count + 1);
    }

    const reInit = (levelId) => {
        setCount(0);
        setUser(initUser());
        setQuestions(initQuestions());
        launchGame(levelId);
    }

    const launchGame = (levelId) => {
        setQuestions(questionsByLevel[levelId]);
        setGameStarted(true);
    }

    return (

        <TablesTestManager
                    count={count} 
                    levels={levels}
                    questions={questions}
                    user={user} 
                    launchGame={launchGame}
                    gameStarted={gameStarted}
                    reInit={reInit}>
    
            <TablesTestQuestionDisplay 
                        questions={questions}
                        count={count}
                        next={next} 
                        user={user}
                        setUser={setUser} /> 

        </TablesTestManager>
            
    );

}

export default TablesTest;