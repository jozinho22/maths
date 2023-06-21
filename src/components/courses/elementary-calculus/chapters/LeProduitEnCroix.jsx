import React from 'react';
import { Container, Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

import Constants from '../../../immutable/Constants';

const LeProduitEnCroix = () => {

    var abcdBase = "\\(\\frac{a}{b} = \\frac{c}{d}\\)";
    var adEqubc = "\\(a.d = b.c\\)";

    /* [a, d], [b, c]*/
    const [abcd, setABCD] = React.useState([["20", "4"], ["10", "2"]]);
    var cross = "\\(\\frac{" + abcd[0][0] + "}{" + abcd[0][1] 
                + "} = \\frac{" + abcd[1][0] + "}{" + abcd[1][1] + "}\\)";

    const [abcd2, setABCD2] = React.useState([["a", "b"], ["c","d"]]);
    var cross2 = "\\(\\frac{" + abcd2[0][0] + "}{" + abcd2[0][1] 
                + "} = \\frac{" + abcd2[1][0] + "}{" + abcd2[1][1] + "}\\)";

    var divByA = "\\(\\frac{a}{b} \\times \\frac{1}{a}= \\frac{c}{d} \\times \\frac{1}{a}\\)";
    var divByAResult = "\\(\\frac{1}{b} = \\frac{c}{ad} \\)";
    var multByD = "\\(\\frac{1}{b} \\times d = \\frac{c}{a.d} \\times d\\)";
    var multByDResults = "\\(\\frac{b}{d} = \\frac{c}{a}\\)";

    const changeOne = (expPos, mirrorExpPos) => {

        function processChangeOne(abcd, expPos, mirrorExpPos) {
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

        setABCD(processChangeOne(abcd, expPos, mirrorExpPos));
        setABCD2(processChangeOne(abcd2, expPos, mirrorExpPos));
    }

    const invert = (expPos, mirrorExpPos) => {

        function processInvert(abcd, expPos, mirrorExpPos) {
            let abcdSlice = {...abcd};
            let exp = abcdSlice[expPos[0]][expPos[1]];
            let mirrorExp = abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]];
            
            abcdSlice[expPos[0]][expPos[1]] = mirrorExp;
            abcdSlice[mirrorExpPos[0]][mirrorExpPos[1]] = exp;
            return abcdSlice;
           
        }

        setABCD(processInvert(abcd, expPos, mirrorExpPos));
        setABCD2(processInvert(abcd2, expPos, mirrorExpPos));
    }

    var abbEqucbd = "\\(\\frac{a.b}{b} = \\frac{c.b}{d}\\)";
    var aEqucbd = "\\(a = \\frac{c.b}{d}\\)";
    var adEqucbdd = "\\(a.d = \\frac{c.b.d}{d}\\)";
    var adcb = "\\(a.d = c.b\\)";
    var abcdBaseEquivadcb = "\\( \\frac{a}{b} = \\frac{c}{d}\\ \\Leftrightarrow a.d = c.b\\)";

    var nbExo = 0;

    const [showAnswers, setShowAnswers] = React.useState(
        [
            {id: nbExo++,show: false},
            {id: nbExo++,show: false},
            {id: nbExo++,show: false}
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
   
    return  <>
                <p>
                    La règle de trois (ou produit en croix ) est une méthode servant à effectuer des conversions dans une autre unité, calculer le nombre de couverts pour un repas, calculer une surface à peindre...etc.
                    {"\n"} Par simplicité, nous enlèverons les signes <MathJaxInline toShow={"$x$"} /> dans les équations, inutiles ici.
                </p>
                
                <Title1 title={"Explications"} />
                <p>
                    Posons comme hypothèse que pour tout <MathJaxInline toShow={"$a,b,c,d \\neq 0$"} />
                </p>
                <MathJaxDisplay toShow={abcdBase} demo />
                <p style={{color: Constants.RED_COLOR}}>Rappel : il est interdit de diviser par 0 !</p>
                <p>
                    Le produit en croix nous dit que :
                </p>
                <MathJaxDisplay toShow={adEqubc} fRef={1} demo />
                <p>
                    D'où la forme de croix car :
                    {"\n"} Les éléments <MathJaxInline toShow={"$[a,d]$"} /> et <MathJaxInline toShow={"$[b,c]$"} /> sont interchangeables à souhait :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={cross2}/>
                    <MathJaxDisplay toShow={cross}/>
                </Container>
                <div className="DoubleLineButtons">
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => invert( [0,0], [1,1] )}>
                        Inverser a et d
                    </Button>
                    <Button 
                        className="DefaultButton MiniButton" 
                        onClick={() => changeOne( [0,0], [1,1] )}>
                        Changer a
                    </Button>
                    <Button 
                        className="DefaultButton GreenButton MiniButton"
                        onClick={() => changeOne( [0,1], [1,0] )}>
                        Changer b
                    </Button>
                    <Button 
                        className="DefaultButton MiniButton"
                        onClick={() => invert( [0,1], [1,0] )}>
                        Inverser b et c
                    </Button>
                    <Button 
                        className="DefaultButton OrangeButton MiniButton" 
                        onClick={() => changeOne( [1,0], [0,1] )}>
                        Changer c
                    </Button>
                    <Button 
                        className="DefaultButton RedButton MiniButton"
                        onClick={() => changeOne( [1,1], [0,0] )}>
                        Changer d
                    </Button>
                </div>

                <p>Dans ce cas, diviser chaque membre par  <MathJaxInline toShow={"$a$"} /> (ou multiplier par son inverse) revient à le transposer de l'autre côté, au dénominateur.</p>
                <MathJaxDisplay toShow={abcdBase} demo />
                <MathJaxDisplay toShow={divByA} demo />
                <MathJaxDisplay toShow={divByAResult} demo />
                <p>De même, si on multiplie tout par <MathJaxInline toShow={"$d$"} /></p>
                <MathJaxDisplay toShow={multByD} demo />
                <MathJaxDisplay toShow={multByDResults} demo />
                <p>
                    On effectuant ces deux étapes, on a interchangé <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$d$"} />.
                    {"\n"}On peut faire de même avec <MathJaxInline toShow={"$b$"} /> et <MathJaxInline toShow={"$c$"} />. D'où l'appellation de produit en croix.
                </p>

                <Title1 title="Démonstration" />
                <p>
                    Prenons comme hypothèse de départ que :
                    {"\n"} Pour tout <MathJaxInline toShow={"$a,b,c,d \\neq 0$"} />
                </p>
                <MathJaxDisplay toShow={abcdBase} demo/>
                <p>On multiplie les deux membres par le même nombre <MathJaxInline toShow={"$b$"} /></p>
                <MathJaxDisplay toShow={abbEqucbd} demo />
                <MathJaxDisplay toShow={aEqucbd} demo />
                <p>À présent, on multiplie les deux membres par le même nombre <MathJaxInline toShow={"$d$"} /></p>
                <MathJaxDisplay toShow={adEqucbdd} demo />
                <MathJaxDisplay toShow={adcb} demo />
                <p>On retrouve bien notre équation <MathJaxInline toShow={"$ (1) $"} />.</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={abcdBaseEquivadcb}/>
                </Container>

                <Title1 title={"Exercices"} />
                <Title2 title={"Exo 1"} />
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

                <Title2 title={"Exo 2"} />
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

                <Title2 title={"Exo 3"} />
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
}

export default LeProduitEnCroix;