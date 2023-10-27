import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import Title1 from '../../helpers/Title1';
import Title2 from '../../helpers/Title2';

const DecompositionDUnInverseDePolynomeEnElementsSimples = () => {

    var inversePolynome = "\\(f(x) = \\frac{1}{(x-\\lambda)(x-\\mu)} \\enspace \\enspace \\enspace (avec \\enspace \\lambda, \\enspace \\mu \\in \\mathbb{R})\\)";
    
    var inversePolynomeSimp = "\\(f(x) = \\frac{a}{(x-\\lambda)} + \\frac{b}{(x-\\mu)} \\enspace (avec \\enspace a, \\enspace b \\in \\mathbb{R})\\)";
    var inversePolynomeSimpMemeDen = "\\(f(x) = \\frac{a(x-\\lambda) + b(x-\\mu) }{(x-\\lambda)(x-\\mu)} \\)";

    var a = "\\( f(x)(x-\\lambda) = a + b.\\frac{x-\\lambda}{x-\\mu} \\)";
    var aXEqualsLambda = "\\( (x =\\lambda) \\Longrightarrow f(x)(x-\\lambda) = a \\)";
    var aGen = "\\(f(x)(x-\\lambda) = \\frac{1}{x-\\mu}  \\)";
    var aGenXEqualsLambda = "\\( (x =\\lambda) \\Longrightarrow a = \\frac{1}{\\lambda-\\mu}  \\)";
    var bGenXEqualsMu = "\\( (x =\\mu) \\Longrightarrow  b = \\frac{1}{\\mu-\\lambda} \\)";

    var ab = "\\( \\Biggl\\{ a = \\frac{1}{\\lambda-\\mu}, \\enspace b = \\frac{1}{\\mu-\\lambda} \\Biggr\\}\\)";
    var fGen = "\\(f(x) = \\frac{1}{(x-\\lambda)(x-\\mu)} = \\frac{1}{\\lambda-\\mu}.\\frac{1}{(x-\\lambda)} + \\frac{1}{\\mu-\\lambda}\\frac{1}{(x-\\mu)} \\)";


    var exemple = "\\(f(x) = \\frac{1}{(x-2)(x+3)}\\)";
    var aXEquals2 = "\\( (x =2) \\Longrightarrow f(x)(x-2) = a = \\frac{1}{x+3} \\)";
    var aXEquals22 = "\\( (x =2) \\Longrightarrow f(x)(x-2) = a = \\frac{1}{2+3} = \\frac{1}{5} \\)";

    var bXEqualsMinus3 = "\\( (x =-3) \\Longrightarrow f(x)(x+3) = b = \\frac{1}{x-2} \\)";
    var bXEqualsMinus32 = "\\( (x =-3) \\Longrightarrow  f(x)(x+3) = b = \\frac{1}{-3 - 2} = -\\frac{1}{5} \\)";
    
    var exempleSimp = "\\(f(x) = \\frac{1}{5} .\\frac{1}{(x-2)}-\\frac{1}{5}.\\frac{1}{(x+3)} \\)";

    var inversePolynomeDeg3 = "\\(f(x) = \\frac{1}{(x-\\lambda)(x-\\mu)(x-\\nu)} \\enspace \\enspace \\enspace (avec \\enspace \\lambda, \\enspace \\mu, \\enspace \\nu \\in \\mathbb{R})\\)";
    var fGenDegre3 = "\\(f(x) = \\frac{1}{(x-\\lambda)(x-\\mu)(x-\\nu)} = \\frac{1}{(\\lambda-\\mu)(\\lambda-\\nu)}.\\frac{1}{(x-\\lambda)} + \\frac{1}{(\\mu-\\lambda)(\\mu-\\nu)}\\frac{1}{(x-\\mu)}   + \\frac{1}{(\\nu-\\lambda)(\\nu-\\mu)}\\frac{1}{(x-\\nu)} \\)";
    
    var inversePolynomeDegN = "\\(f(x) = \\prod_{i=1}^n  \\frac{1}{x -\\lambda_{i}} \\)";
    var fGenDegreN = "\\(f(x) = \\sum_{i=1}^n \\Biggl[ \\prod_\\underset{j \\neq i}{j=1}^n \\frac{1}{\\lambda_{i}-\\lambda_{j}} \\Biggr]. \\frac{1}{x - \\lambda_{i}} \\)";

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

                <p>Lorsque l'on observe le comportement de <MathJaxInline toShow={"$f(x)(x-\\lambda)$"} />, on a : </p>
                <MathJaxDisplay toShow={a} demo />
                <p>Si on effectue ce calcul pour <MathJaxInline toShow={"$x = \\lambda$"} />, on a :</p>
                <MathJaxDisplay toShow={aXEqualsLambda} fRef={2} demo />
                <p>Or, grâce à <MathJaxInline toShow={"$(1)$"} /> on peut voir que : </p>
                <MathJaxDisplay toShow={aGen} fRef={3} demo />
                <p>Soit, si <MathJaxInline toShow={"$x = \\lambda$"} />, avec <MathJaxInline toShow={"$(2)$"} /> et <MathJaxInline toShow={"$(3)$"} />, on a : </p>
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
                <MathJaxDisplay toShow={aXEquals2} demo />
                <MathJaxDisplay toShow={aXEquals22} demo />
                <MathJaxDisplay toShow={bXEqualsMinus3} demo />
                <MathJaxDisplay toShow={bXEqualsMinus32} demo />
                <MathJaxDisplay toShow={exempleSimp} demo />

                <Title1 title={"Inverse de polynôme de degré supérieur à 2"} />
                <Title2 title={"Inverse de polynôme de degré 3"} />
                <p>Soit un inverse de polynôme de degré 3 tel que :</p>
                <MathJaxDisplay toShow={inversePolynomeDeg3} demo />
                <p>En effectuant la même démarche que précédemment, pour un polynôme de degré 3, nous aurons la forme simplifiée suivante :</p>
                <MathJaxDisplay toShow={fGenDegre3} demo />

                <Title2 title={"Inverse de polynôme de degré n"} />
                <p>On a alors l'expression suivante pour un inverse de polynôme de degré <MathJaxInline toShow={"$ n \\geqslant 2$"} />.</p>
                <MathJaxDisplay toShow={inversePolynomeDegN} demo />
                <p>Soit une forme simplifiée générale suivante :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={fGenDegreN}/>
                </Container>
            </>

}

export default DecompositionDUnInverseDePolynomeEnElementsSimples;