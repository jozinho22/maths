import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';


const LeProduitEnCroix = () => {

    var abcd = "\\(\\frac{a}{b} = \\frac{c}{d}\\)";
    var adEqubc = "\\(ad = bc\\)";
    var abbEqucbd = "\\(\\frac{ab}{b} = \\frac{cb}{d}\\)";
    var aEqucbd = "\\(a = \\frac{cb}{d}\\)";
    var adEqucbdd = "\\(ad = \\frac{cb}{d}\\)";
    var adcb = "\\(ad = cb\\)";

    return (
        <Container className="CoursesContainer">   
            <p className="Title">Le produit en croix</p>
            <p>
                Le produit en croix (ou règle de 3) est une méthode servant à effectuer des conversions dans une autre unité, calculer le nombre de couverts pour un repas, calculer une surface à peindre...etc.
                {"\n"} Par simplicité, nous enlèverons les signes x dans les équations, inutiles ici.
            </p>
            <p className="Title1">a) Explication</p>
            <p>
                Pour tout b ≠ 0 et d ≠ 0
            </p>
            <MathJaxDisplay toShow={abcd}/>
            <p>
                Le produit en croix nous dit que :
            </p>
            <MathJaxDisplay toShow={adEqubc}/>
            <p>
                D'où la forme de croix.
            </p>

            <p className="Title1">b) Démonstration</p>
            <p>
                Partons à nouveau de notre équation de départ.
                {"\n"} Pour tout b ≠ 0 et d ≠ 0
            </p>
            <MathJaxDisplay toShow={abcd}/>
            <p>On multiplie les deux membres par le même nombre b</p>
            <MathJaxDisplay toShow={abbEqucbd}/>
            <MathJaxDisplay toShow={aEqucbd}/>
            <p>On multiplie les deux membres par le même nombre d</p>
            <MathJaxDisplay toShow={adEqucbdd}/>
            <MathJaxDisplay toShow={adcb}/>
            <MathJaxDisplay toShow={adEqubc}/>
            <p>On retrouve bien notre équation de départ </p>

            <p className="Title1">c) Application</p>
            <p className="Underline">Exo 1</p>
            <p>On sait que 1 kg = 1 000 g.
                {"\n"}Combien fait 3000 kg convertit en g ?
            </p>

            <p className="Underline">Exo 2</p>
            <p>On sait que 1 kg = 1 000 g.
                {"\n"}Combien fait 3000 kg convertit en g ?
            </p>
            <p>
                Ma voiture diesel consomme 3 litre / (100 km).
                {"\n"}Combien me faut-il de litre d’essence pour aller jusqu’à Paris depuis Rennes ?
            </p>
            <p className="Underline">Exo 2-bis</p>
            <p>
                Sachant que le gasoil vaut 1,45 € / litre, combien cela va-t-il me coûter pour un aller-retour ?
            </p>
        </Container>
    )

}

export default LeProduitEnCroix;