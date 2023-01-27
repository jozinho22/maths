import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const Exercices = () => {

    var nbExo = -1;

    const [showAnswers, setShowAnswers] = React.useState(
        [
            {id: ++nbExo,show: false},
            {id: ++nbExo,show: false},
            {id: ++nbExo,show: false}
        ]
    );

    var answerExo1 = "\\(\\frac{1 [kg]}{1000 [g]} = \\frac{3000 [kg]}{x [g]}\\)";
    var answerExo11 = "\\(x = \\frac{3000 \\times 1000}{1 } \\frac{[kg].[g]}{[kg]}\\)";
    var answerExo1Results = "\\(x = 3 \\times 10^6 [g]\\)";
    var answerExo13 = "\\(3000 [kg] = 3000 [1000 \\times g]\\)";

    var answerExo2 = "\\(\\frac{3[L]}{100 [km]} = \\frac{x [L]}{350 [km]}\\)";
    var answerExo21 = "\\(x = \\frac{3 \\times 350}{100 } \\frac{[L].[km]}{[km]} \\)";
    var answerExo2Results = "\\(x = 10,5 [L]\\)";

    var answerExo2b = "\\(\\frac{1,45 [euros]}{1 [L]} = \\frac{x [euros]}{10,5 [L]}\\)";
    var answerExo2b1 = "\\(x = \\frac{1,45 \\times 10,5}{1 } \\frac{[euros].[L]}{[L]} \\)";
    var answerExo2bResults = "\\(x = 15,225 [euros]\\)";

    var answerExo2b2 = "\\(x = 15,225 \\times 2 [euros]\\)";
    var answerExo2b2Results = "\\(x = 30,45 [euros]\\)";

    const showAnswer = (exoN) => {
        let showAnswersSlice = {...showAnswers};
        showAnswersSlice[exoN].show = !showAnswersSlice[exoN].show;
        setShowAnswers(showAnswersSlice);
    }

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <p className="Title1">Exo 1</p>
            <p>On sait que 1 kg = 1 000 g.
                {"\n"}Combien fait 3000 kg convertit en g ?
            </p>
            <Button 
                className=" DefaultButton GreenButton"
                onClick={() => showAnswer(0)}>
                {showAnswers[0].show ? 'Masquer les réponses' : 'Afficher les réponses'}
            </Button>
            <Container className={`CoursesAnswers ${showAnswers[0].show ? '' : "Hidden"}`} >
                <MathJaxDisplay toShow={answerExo1} demo />
                <MathJaxDisplay toShow={answerExo11} demo />
                <MathJaxDisplay toShow={answerExo1Results} demo />  
                <p>
                    Même si pour cet exemple on n'est pas obligé de se servir de la règle de trois
                    {"\n"}On peut juste faire :
                </p>
                <MathJaxDisplay toShow={answerExo13} demo />
                <MathJaxDisplay toShow={answerExo1Results} demo />
            </Container>

            <p className="Title1">Exo 2</p>
            <p>
                Ma voiture diesel consomme 3 litre / (100 km).
                {"\n"}Combien me faut-il de litre d’essence pour aller jusqu’à Paris depuis Rennes ?
            </p>   
            <Button 
                className="GreenButton DefaultButton"
                onClick={() => showAnswer(1)}>
                {showAnswers[1].show ? 'Masquer les réponses' : 'Afficher les réponses'}
            </Button>
            <Container className={`CoursesAnswers ${showAnswers[1].show ? '' : "Hidden"}`} >
                <p>Paris-Rennes fait environ 350 km.</p>
                <MathJaxDisplay toShow={answerExo2} demo />
                <MathJaxDisplay toShow={answerExo21} demo />
                <MathJaxDisplay toShow={answerExo2Results} demo />
            </Container>

            <p className="Title1">Exo 2-b</p>
            <p>
                Sachant que le gasoil vaut 1,45 € / litre, combien cela va-t-il me coûter pour un aller-retour Paris-Rennes ?
            </p>
            <Button 
                className="GreenButton DefaultButton"
                onClick={() => showAnswer(2)}>
                {showAnswers[2].show ? 'Masquer les réponses' : 'Afficher les réponses'}
            </Button>
            <Container className={`CoursesAnswers ${showAnswers[2].show ? '' : "Hidden"}`} >
                <p>Pour un aller seulement</p>
                <MathJaxDisplay toShow={answerExo2b} demo />
                <MathJaxDisplay toShow={answerExo2b1} demo />
                <MathJaxDisplay toShow={answerExo2bResults} demo />
                <p>Et pour l'aller-retour</p>
                <MathJaxDisplay toShow={answerExo2b2} demo />
                <MathJaxDisplay toShow={answerExo2b2Results} demo />
            </Container>
        </>
    )
}

export default Exercices;