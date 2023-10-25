import React from 'react';
import { Container } from 'react-bootstrap';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import UnsplashCopyRight from '../../helpers/UnsplashCopyRight';
import ImageZoom from '../../helpers/ImageZoom';
import rabbits from '../assets/rabbits.png';
import rabbitsEvolution from '../assets/rabbitsEvolution.png';

import RabbitsEvolutionTable from '../helpers/RabbitsEvolutionTable';
import RatioTable from '../helpers/RatioTable';
import FibonacciTable from '../helpers/FibonacciTable';

import Link from '../../../immutable/nav/Link';
import CoursesConstants from '../../helpers/CoursesConstants';
import Title1 from '../../helpers/Title1';
import PagesConstants from '../../../immutable/nav/PagesConstants';


const EvolutionDeLapins = () => {

    var n = 0;
    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";
    var ratio = "$\\frac{F_{n+1}}{F_{n}}$";
    var ratioValue = "\\(\\phi = lim_{n \\to +\\infty} \\enspace \\frac{F_{n+1}}{F_{n}}\\)";

    var ratioValueR = "\\(\\phi \\approx 1,618  \\)";

    return (
            <>
                <p>
                    Voici le problème que s’est posé Fibonacci, un mathématicien italien en 1 202.
                    {"\n"}Il voulait étudier la progression de naissances de lapins, à partir d’un couple donné.
                 </p>
                 <ImageZoom src={rabbits} name="Couples de lapins" n={++n} />
                 <p>
                    {"\n"}Le 1 er mois, un jeune couple de lapins est réuni.
                    {"\n"}Le 2 ème mois, ce couple donne naissance à un couple de lapereaux.
                    {"\n"}{"\n"}Ensuite, les naissances répondent à la règle suivante :
                    {"\n"}- Un couple de lapereaux doit attendre un mois avant d’être mature et de pouvoir
                    donner naissance à un couple de lapereaux
                    {"\n"}- Un couple de lapins adultes donne naissance à un couple de lapereaux tous les mois
                    {"\n"}{"\n"}
                </p>

                <Title1 title={"Évolution du nombre de couples de lapins chaque mois"} />
                <ImageZoom src={rabbitsEvolution} name="Évolution du nombre de couple de lapins sur un an" n={++n} />
                <RabbitsEvolutionTable />
                <p>
                    On remarque l'évolution suit une certaine tendance.
                    {"\n"}En effet, le couple de lapins présents au mois en cours est toujours égal à l'addition de ceux présents les deux mois précédents.
                    {"\n"}{"\n"}On alors cette modélisation :
                </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={phiMain} />
                </Container>
                <p><MathJaxInline toShow={"$F_n$"} /> étant le nombre de couples de lapins au mois <MathJaxInline toShow={"$n$"} /></p>
                <p>
                    La suite de nombres correspondant au naissances de couples de lapins mensuelles s'appelle la suite de Fibonacci.
                </p>
                <FibonacciTable />
                <p>
                    Fibonacci s'est ensuite intéressé au ratio entre le nombre au mois suivant et le mois courant, soit <MathJaxInline toShow={ratio} />
                </p>
                <RatioTable />
                <p>On s'aperçoit que l'on tend vers une certaine valeur, mais sa valeur exacte est  :</p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={ratioValue} />
                </Container>
                <p>Sa valeur approchée est : </p>
                <Container className="Focus">
                    <MathJaxDisplay toShow={ratioValueR} />
                </Container>
                <p>
                    Ce nombre est le nombre d’or, autrement appelée la divine proportion, désignée par la
                    lettre grecque <MathJaxInline toShow={"$\\phi$"} /> . 
                    {"\n"}Un des plus célèbres nombres utilisés dans les mathématiques, notamment avec <Link url={`${PagesConstants.PREFIX}${PagesConstants.COURS}${CoursesConstants.PI}/presentation`} external>le nombre <MathJaxInline toShow={"$\\pi$"} /></Link> . 
                    {"\n"}Il est célèbre pour ces fascinantes caractéristiques mais aussi sa présence dans la nature.
                </p>
                <UnsplashCopyRight item="Images de lapins" />
            </>
    )
}

export default EvolutionDeLapins;