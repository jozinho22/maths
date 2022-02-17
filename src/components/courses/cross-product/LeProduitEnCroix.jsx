import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

import '../GenericCourse.css'

const LeProduitEnCroix = () => {

    var abcdBase = "\\(\\frac{a}{b} = \\frac{c}{d}\\)";
    var adEqubc = "\\(ad = bc\\)";


    /* [a, d], [b, c]*/
    const [abcd, setABCD] = React.useState([['20', '2'], ['10', '4']]);
    var cross = "\\(\\frac{" + abcd[0][0] + "}{" + abcd[1][0] 
                + "} = \\frac{" + abcd[1][1] + "}{" + abcd[0][1] + "}\\)";

    const [abcd2, setABCD2] = React.useState([['a', 'd'], ['c', 'b']]);
    var cross2 = "\\(\\frac{" + abcd2[0][0] + "}{" + abcd2[1][0] 
                + "} = \\frac{" + abcd2[1][1] + "}{" + abcd2[0][1] + "}\\)";

    var abbEqucbd = "\\(\\frac{ab}{b} = \\frac{cb}{d}\\)";
    var aEqucbd = "\\(a = \\frac{cb}{d}\\)";
    var adEqucbdd = "\\(ad = \\frac{cb}{d}\\)";
    var adcb = "\\(ad = cb\\)";

    var nbExo = -1;

    const [showAnswers, setShowAnswers] = React.useState(
        [
            {id: ++nbExo,show: false},
            {id: ++nbExo,show: false},
            {id: ++nbExo,show: false}
        ]
    );
    var answerExo1 = "\\(\\frac{1 [kg]}{1000 [g]} = \\frac{3000 [kg]}{x [g]}\\)";
    var answerExo11 = "\\(x = \\frac{3000 \\times 1000}{1 }[g]\\)";
    var answerExo1Results = "\\(x = 3 \\times 10^6 [g]\\)";
    var answerExo13 = "\\(3000 [kg] = 3000 [1000 \\times g]\\)";

    var answerExo2 = "\\(\\frac{3[L]}{100 [km]} = \\frac{x [L]}{350 [km]}\\)";
    var answerExo21 = "\\(x = \\frac{3 \\times 350}{100 }[L]\\)";
    var answerExo2Results = "\\(x = 10,5 [L]\\)";

    var answerExo2b = "\\(\\frac{1,45 [euros]}{1 [L]} = \\frac{x [euros]}{10,5 [L]}\\)";
    var answerExo2b1 = "\\(x = \\frac{1,45 \\times 10,5}{1 }[euros]\\)";
    var answerExo2bResults = "\\(x = 15,225 [euros]\\)";

    var answerExo2b2 = "\\(x = 15,225 \\times 2 [euros]\\)";
    var answerExo2b2Results = "\\(x = 30,45 [euros]\\)";


    const changeExp = (expPos, mirrorExpPos) => {

        function processChange(abcd, expPos, mirrorExpPos) {
            let abcdSlice = {...abcd};
            let exp = abcdSlice[expPos[0]][expPos[1]];
            let mirrorExp = abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]];
            if(exp.includes("\\times")) {
                /* Mettre l'expression principale dans son mirroir */
                let firstExp = exp.slice(0, exp.indexOf("\\times"));
                let secondExp = exp.slice(exp.indexOf("\\times") + "\\times".length);
                abcdSlice[expPos[0]][expPos[1]] = secondExp;
                abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]] = firstExp;
                return abcdSlice;
            } else if(exp !== '1') {
                /* Mettre l'expression principale à 1 et mettre le mirroir en mode multiplier */
                abcdSlice[expPos[0]][expPos[1]] = '1';
                let mirrorExCopy = mirrorExp;
                mirrorExCopy = exp + "\\times " + mirrorExCopy;
                abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]] = mirrorExCopy;
                return abcdSlice;
            } else {
                /* cas où exp === '1', récup sa valeur et la mettre dans sa position */
                let firstExp = mirrorExp.slice(0, mirrorExp.indexOf("\\times"));
                let secondExp = mirrorExp.slice(mirrorExp.indexOf("\\times") + "\\times".length); 
                abcdSlice[expPos[0]][expPos[1]] = firstExp;
                abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]] = secondExp;
                return abcdSlice;
            }
        }

        setABCD(processChange(abcd, expPos, mirrorExpPos));
        setABCD2(processChange(abcd2, expPos, mirrorExpPos));
    }

    const showAnswer = (exoN) => {

        let showAnswersSlice = {...showAnswers};
        showAnswersSlice[exoN].show = !showAnswersSlice[exoN].show;
     
        console.log(showAnswersSlice)
        setShowAnswers(showAnswersSlice);
    }
    return (
        <>
            <p className="Title">La règle de trois</p>
            <Container className="CoursesContainer">    
                <p>
                    La règle de trois (ou produit en croix ) est une méthode servant à effectuer des conversions dans une autre unité, calculer le nombre de couverts pour un repas, calculer une surface à peindre...etc.
                    {"\n"} Par simplicité, nous enlèverons les signes x dans les équations, inutiles ici.
                </p>
                <p className="Title1">a) Explication</p>
                <p>
                    Pour tout b ≠ 0 et d ≠ 0
                </p>
                <MathJaxDisplay toShow={abcdBase}/>
                <p>
                    Le produit en croix nous dit que :
                </p>
                <MathJaxDisplay toShow={adEqubc}/>
                <p>
                    D'où la forme de croix.
                    Car {"\n"} Les éléments [a,d] et [b,c] sont interchangeables à souhait :
                </p>
                <MathJaxDisplay toShow={cross2}/>
                <MathJaxDisplay toShow={cross}/>
               
                <Row>
                    <Col>
                        <Button 
                            className="DefaultButton" 
                            onClick={() => changeExp( [0,0], [0,1] )}>
                            Changer a
                        </Button>
                    </Col>
                     <Col>
                        <Button 
                            className="DefaultButton" 
                            onClick={() => changeExp( [1,1], [1,0] )}>
                            Changer c
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button 
                            className="DefaultButton"
                            onClick={() => changeExp( [1,0], [1,1] )}>
                            Changer b
                        </Button>
                    </Col>
                     <Col>
                        <Button 
                            className="DefaultButton"
                            onClick={() => changeExp( [0,1], [0,0] )}>
                            Changer d
                        </Button>
                    </Col>
                </Row>
                <p className="Title1">b) Démonstration</p>
                <p>
                    Partons à nouveau de notre équation de départ.
                    {"\n"} Pour tout b ≠ 0 et d ≠ 0
                </p>
                <MathJaxDisplay toShow={abcdBase}/>
                <p>On multiplie les deux membres par le même nombre b</p>
                <MathJaxDisplay toShow={abbEqucbd}/>
                <MathJaxDisplay toShow={aEqucbd}/>
                <p>On multiplie les deux membres par le même nombre d</p>
                <MathJaxDisplay toShow={adEqucbdd}/>
                <MathJaxDisplay toShow={adcb}/>
                <p>On retrouve bien notre équation de départ </p>
                <MathJaxDisplay toShow={adEqubc}/>

                <p className="Title1">c) Application</p>
                <p className="Underline">Exo 1</p>
                <p>On sait que 1 kg = 1 000 g.
                    {"\n"}Combien fait 3000 kg convertit en g ?
                </p>
                <Button 
                    className="GreenButton DefaultButton"
                    onClick={() => showAnswer(0)}>
                    {showAnswers[0].show ? 'Masquer les réponses' : 'Afficher les réponses'}
                </Button>
                <Container className={`CoursesAnswers ${showAnswers[0].show ? '' : "Hidden"}`} >
                    <MathJaxDisplay toShow={answerExo1}/>
                    <MathJaxDisplay toShow={answerExo11}/>
                    <MathJaxDisplay toShow={answerExo1Results}/>  
                    <p>
                        Même si pour cet exemple on n'est pas obligé de se servir de la règle de trois
                        {"\n"}On peut juste faire :
                    </p>
                    <MathJaxDisplay toShow={answerExo13}/>
                    <MathJaxDisplay toShow={answerExo1Results}/>
                </Container>

                <p className="Underline">Exo 2</p>
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
                    <MathJaxDisplay toShow={answerExo2}/>
                    <MathJaxDisplay toShow={answerExo21}/>
                    <MathJaxDisplay toShow={answerExo2Results}/>
                </Container>

                <p className="Underline">Exo 2-b</p>
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
                    <MathJaxDisplay toShow={answerExo2b}/>
                    <MathJaxDisplay toShow={answerExo2b1}/>
                    <MathJaxDisplay toShow={answerExo2bResults}/>
                    <p>Et pour l'aller-retour</p>
                    <MathJaxDisplay toShow={answerExo2b2}/>
                    <MathJaxDisplay toShow={answerExo2b2Results}/>
                </Container>
            </Container>
        </>
    )

}

export default LeProduitEnCroix;