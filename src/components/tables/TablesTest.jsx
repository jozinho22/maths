import React from 'react';
import { Container } from 'react-bootstrap';

import TablesTestQuestionDisplay from './TablesTestQuestionDisplay';
import TablesTestManager from './TablesTestManager';
import MathJaxDisplay from './MathJaxDisplay';

import CustomLogger from '../general-content/CustomLogger';

const TablesTest = () => {

    const [gameStarted, setGameStarted] =  React.useState(false);

    const [count, setCount] = React.useState(0);
    const [user, setUser] = React.useState(
        {
            name: '',
            levelId: 1,
            score: 0,
            answers: []
        }
    );

    var levels = createLevels();
    var questionsByLevel = createQuestionsByLevel();
    const [questions, setQuestions]= React.useState([]);

    function createLevels() {
        var levelSlice = [];
        var easyLevel = {
            id: 1,
            title: "newb",
            maxInt: 9,
            style: "EasyLevel"
        }
        var mediumLevel = {
            id: 2,
            title: "je gère",
            maxInt: 20,
            style: "MediumLevel"
        }
        var warriorLevel = {
            id: 3,
            title: "math warrior",
            maxInt: 99,
            style: "WarriorLevel"
        }
        
        levelSlice.push(easyLevel, mediumLevel, warriorLevel);
        return levelSlice;
    }

    function createQuestionsByLevel() {

        var nbQuestions = 2;
        var randomQuestionsByLevelSlice = [];
        for (var i = 0; i < levels.length; i++) {
            var randomQuestions = [];
            for (var j = 0; j < nbQuestions; j++) {
                var a = getRandomInt(levels[i].maxInt);
                var b = getRandomInt(levels[i].maxInt);

                var enounceModel = "\\({" + a + "}\\times{"+ b + "} = \\)"; 
    
                var question = {
                    id: j,
                    a: a,
                    b: b,
                    enounceModel: enounceModel,
                    enounce: <MathJaxDisplay 
                                toShow={enounceModel}/>,
                    goodAnswer: a*b
                }
                randomQuestions.push(question);
                CustomLogger('randomQuestions',randomQuestions, 'createQuestionsByLevel')
            }
            randomQuestionsByLevelSlice.push(randomQuestions); 
        }
        
        CustomLogger('randomQuestionsByLevelSlice',randomQuestionsByLevelSlice, 'createQuestionsByLevel')
        return randomQuestionsByLevelSlice;
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const next = () => {
        setCount (count + 1);
    }

    return (

        <TablesTestManager
                    count={count} 
                    levels={levels}
                    questionsByLevel={questionsByLevel}
                    questions={questions}
                    setQuestions={setQuestions}
                    user={user} 
                    setUser={setUser}
                    gameStarted={gameStarted}
                    setGameStarted={setGameStarted} >
    
            <Container className="RelativeContainer">
                <TablesTestQuestionDisplay 
                            questions={questions}
                            count={count}
                            next={next} 
                            user={user}
                            setUser={setUser} /> 
            </Container>

        </TablesTestManager>
            
    );

}

export default TablesTest;