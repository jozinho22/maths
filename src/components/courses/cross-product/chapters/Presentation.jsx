import React from 'react';
import { Container,Button } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';

const Presentation = () => {

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

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <p>
                La règle de trois (ou produit en croix ) est une méthode servant à effectuer des conversions dans une autre unité, calculer le nombre de couverts pour un repas, calculer une surface à peindre...etc.
                {"\n"} Par simplicité, nous enlèverons les signes <MathJaxInline toShow={"$x$"} /> dans les équations, inutiles ici.
            </p>
            
            <Title1 title={"Explications"} />
            <p>
                Posons comme hypothèse que pour tout <MathJaxInline toShow={"$a,b,c,d \\neq 0$"} />
            </p>
            <MathJaxDisplay toShow={abcdBase} demo />
            <p style={{color: "red"}}>Rappel : il est interdit de diviser par 0 !</p>
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
            <p>De même, si je multiplie tout par <MathJaxInline toShow={"$d$"} /></p>
            <MathJaxDisplay toShow={multByD} demo />
            <MathJaxDisplay toShow={multByDResults} demo />
            <p>
                On effectuant ces deux étapes, on a interchangé <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$d$"} />.
                {"\n"}On peut faire de même avec <MathJaxInline toShow={"$b$"} /> et <MathJaxInline toShow={"$c$"} />. D'où l'appellation de produit en croix.
            </p>
        </>
    )

}

export default Presentation;