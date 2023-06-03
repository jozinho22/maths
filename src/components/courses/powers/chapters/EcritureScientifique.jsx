import React from 'react';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const EcritureScientifique = () => {

    var terreLune = "\\(D_{Terre-lune} = 400 \\; 000 \\;km   \\)";
    var terreLune2 = "\\( D_{Terre-lune} = 4.0  \\times 10^5 \\;km  \\)";

    var terreSol = "\\( D_{Terre-soleil} = 150 \\;000 \\;000 \\;km  \\)";
    var terreSol2 = "\\( D_{Terre-soleil} = 1.5  \\times 10^{10}\\; km  \\)";

    var vLumiere = "\\( V_{lumiere (vide)} = 300 \\;000 \\;km.s^{-1}  \\)";
    var vLumiere2 = "\\( V_{lumiere (vide)} = 3.0  \\times 10^5 \\;km.s^{-1}  \\)";

    var aLumiere = "\\( annee-lumiere = 10 \\;000 \\;000 \\;000 \\;000 \\;000 \\;m \\)";
    var aLumiere2 = "\\( annee-lumiere = 10^{16} \\;m \\)";

    var mic = "\\( D_{microbe} = 0, 000 \\;001 \\;m \\)";
    var mic2 = "\\( D_{microbe} = 10^{-6} \\;m \\)";

    var atom = "\\( D_{atome} = 0, 000 \\;000 \\;000 \\;000 \\;001 \\;m \\)";
    var atom2 = "\\( D_{atome} = 10^{-16} \\;m \\)";

    return (
            <>
                <p>
                    Les puissances nous permettent d'écrire les nombres de l'infiniment grand et de l'infiniment petit.
                    L'écriture utilisée dans la norme internationale est l'écriture scientifique.
                    Elle se définit comme ceci :
                    {"\n"}{"\n"}
                    Un nombre avec au moins chiffre significatif avant la virgule (autre que <MathJaxInline toShow={"$0$"} />), multiplié par une puissance de <MathJaxInline toShow={"$10$"} />.
                    {"\n"}Le (les) nombre(s) va (vont) apporter une précision et la puissance de <MathJaxInline toShow={"$10$"} /> un ordre de grandeur.
                    {"\n"}{"\n"} Exemples :
                </p>
                <p className="Title1">Distance Terre-lune</p>
                <MathJaxDisplay toShow={terreLune} demo />
                <MathJaxDisplay toShow={terreLune2}  demo />
                <p className="Title1">Distance Terre-soleil</p>
                <MathJaxDisplay toShow={terreSol}  demo />
                <MathJaxDisplay toShow={terreSol2} demo  />
                <p className="Title1">Vitesse de la lumière dans le vide</p>
                <MathJaxDisplay toShow={vLumiere}  demo />
                <MathJaxDisplay toShow={vLumiere2} demo  />
                <p className="Title1">Année-lumière</p>
                <MathJaxDisplay toShow={aLumiere}  demo />
                <MathJaxDisplay toShow={aLumiere2}  demo />

                <p className="Title1">Microbe</p>
                <MathJaxDisplay toShow={mic}  demo />
                <MathJaxDisplay toShow={mic2} demo  />
                <p className="Title1">Atome</p>
                <MathJaxDisplay toShow={atom}  demo />
                <MathJaxDisplay toShow={atom2} demo  />
            </>
    );
}

export default EcritureScientifique;