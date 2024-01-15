import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const DecompositionDUnInverseDePolynomeEnElementsSimples = () => {

    var inversePolynome = "\\(f(x) = \\frac{1}{(x-x_1)(x-x_2)} \\enspace \\enspace \\enspace (avec \\enspace ( x_1, \\enspace x_2) \\in \\mathbb{R}^2 )\\)";
    
    var inversePolynomeSimp = "\\(f(x) = \\frac{a}{(x-x_1)} + \\frac{b}{(x-x_2)} \\enspace (avec \\enspace ( x_1, \\enspace x_2) \\in \\mathbb{R}^2 ) \\)";
    var inversePolynomeSimpMemeDen = "\\(f(x) = \\frac{a(x-x_1) + b(x-x_2) }{(x-x_1)(x-x_2)} \\)";

    var a = "\\( f(x)(x-x_1) = a + b.\\frac{x-x_1}{x-x_2} \\)";
    var aXEqualsLambda = "\\( (x =x_1) \\Longrightarrow f(x)(x-x_1) = a \\)";
    var aGen = "\\(f(x)(x-x_1) = \\frac{1}{x-x_2}  \\)";
    var aGenXEqualsLambda = "\\( (x =x_1) \\Longrightarrow a = \\frac{1}{x_1-x_2}  \\)";
    var bGenXEqualsMu = "\\( (x =x_2) \\Longrightarrow  b = \\frac{1}{x_2-x_1} \\)";

    var ab = "\\( \\Biggl \\{ a = \\frac{1}{x_1-x_2}, \\enspace b = \\frac{1}{x_2-x_1} \\Biggr \\} \\)";
    var fGen = "\\(f(x) = \\frac{1}{(x-x_1)(x-x_2)} = \\frac{1}{x_1-x_2}.\\frac{1}{(x-x_1)} + \\frac{1}{x_2-x_1}\\frac{1}{(x-x_2)} \\)";


    // a = \\frac{1}{x_1-x_2}, \\enspace b = \\frac{1}{x_2-\\l
    var exemple = "\\(f(x) = \\frac{1}{(x-2)(x+3)}\\)";
    var aXEquals2 = "\\( f(x)(x-2) = a = \\frac{1}{x+3} \\)";
    var aXEquals22 = "\\( (x =2) \\Longrightarrow f(x)(x-2) = a = \\frac{1}{2+3} = \\frac{1}{5} \\)";

    var bXEqualsMinus3 = "\\(  f(x)(x+3) = b = \\frac{1}{x-2} \\)";
    var bXEqualsMinus32 = "\\( (x =-3) \\Longrightarrow  f(x)(x+3) = b = \\frac{1}{-3 - 2} = -\\frac{1}{5} \\)";
    
    var exempleSimp = "\\(f(x) = \\frac{1}{5} .\\frac{1}{(x-2)}-\\frac{1}{5}.\\frac{1}{(x+3)} \\)";

    return  <>
                <p>
                    On cherche à trouver une écriture plus simple de l'inverse d'un polynôme du second degré, écrite sous une forme déjà factorisée.
                </p>
                <p>Cette forme simplifiée va nous permettre d'effectuer plus facilement des calculs de sommes, de primitives...etc.</p>
                <p>On aura une expression de ce type :</p>
                <MathJaxDisplay toShow={inversePolynome} fRef={1} demo />

                <p>On va chercher à obtenir une forme simplifiée avec les coefficients <MathJaxInline toShow={"$a$"} /> et <MathJaxInline toShow={"$b$"} /> telle que :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={inversePolynomeSimp}/>
                </Container>

                <p>En arrangeant l'expression, on obtient :</p>
                <MathJaxDisplay toShow={inversePolynomeSimpMemeDen} demo />

                <p>Lorsque l'on observe le comportement de <MathJaxInline toShow={"$f(x)(x-x_1)$"} />, on a : </p>
                <MathJaxDisplay toShow={a} demo />
                <p>Si on effectue ce calcul pour <MathJaxInline toShow={"$x = x_1$"} />, on a :</p>
                <MathJaxDisplay toShow={aXEqualsLambda} fRef={2} demo />
                <p>Or, grâce à <MathJaxInline toShow={"$(1)$"} /> on peut voir que : </p>
                <MathJaxDisplay toShow={aGen} fRef={3} demo />
                <p>Soit, si <MathJaxInline toShow={"$x = x_1$"} />, avec <MathJaxInline toShow={"$(2)$"} /> et <MathJaxInline toShow={"$(3)$"} />, on a : </p>
                <MathJaxDisplay toShow={aGenXEqualsLambda} demo />

                <p>On refait la même chose pour <MathJaxInline toShow={"$b$"} /> :</p>
                <MathJaxDisplay toShow={bGenXEqualsMu} demo />

                <p>On obtient alors le couple :</p>
                <MathJaxDisplay toShow={ab} demo />
                <p>Soit une expression générale de <MathJaxInline toShow={"$f$"} /> :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fGen}/>
                </Container>

                <Title1 title={"Exemple"} />
                <p>Simplifions l'expression :</p>
                <MathJaxDisplay toShow={exemple} demo />
                <p>Pour la première :</p>
                <MathJaxDisplay toShow={aXEquals2} demo />
                <MathJaxDisplay toShow={aXEquals22} demo />
                <p>Pour la seconde :</p>
                <MathJaxDisplay toShow={bXEqualsMinus3} demo />
                <MathJaxDisplay toShow={bXEqualsMinus32} demo />
                <p>Soit finalement :</p>
                <MathJaxDisplay toShow={exempleSimp} demo />
            </>

}

export default DecompositionDUnInverseDePolynomeEnElementsSimples;