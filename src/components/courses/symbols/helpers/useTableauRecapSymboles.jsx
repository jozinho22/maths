const useTableauRecapSymboles = () => {
   
    var tableauRecapSymboles = [];
    var k = 0;

    tableauRecapSymboles.push(
        {
            id: k++,
            title: "symbole",
            values: ["signification"]
        }
    )
    
    tableauRecapSymboles.push(
         {
            id: k++,
            title: "A \\Longrightarrow B",
            values: ["A \\enspace  implique \\enspace  B"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "A \\Longleftrightarrow B",
            values: ["A \\enspace  \\acute{e}quivalent \\enspace  à \\enspace  B"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "I= [a, b]",
            values: ["intervalle  \\enspace  de  \\enspace  a  \\enspace  \\overset{‘}{a}  \\enspace  b "]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "I= ]a, b[",
            values: ["intervalle  \\enspace  de  \\enspace  a  \\enspace  \\overset{‘}{a}  \\enspace  b \\enspace (sans \\enspace a \\enspace ni \\enspace b) "]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\forall x \\in I",
            values: ["pour \\enspace tout \\enspace x \\enspace appartenant \\enspace  \\overset{‘}{a} \\enspace I"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\exists x, \\enspace A",
            values: ["il \\enspace existe  \\enspace au  \\enspace moins \\enspace un \\enspace x \\enspace tel \\enspace que : A"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\exists! x, \\enspace A",
            values: ["il \\enspace existe \\enspace un \\enspace seul \\enspace  x \\enspace tel \\enspace que : A"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "(AB) \\perp (CD)",
            values: ["la \\enspace droite \\enspace (AB) \\enspace perpendiculaire \\enspace  \\overset{‘}{a} \\enspace la \\enspace droite \\enspace (CD)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "(AB) \\parallel (CD)",
            values: ["la \\enspace droite \\enspace (AB) \\enspace parallele \\enspace \\overset{‘}{a} \\enspace la \\enspace droite \\enspace (CD)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{N}",
            values: ["ensemble \\enspace des \\enspace entiers \\enspace naturels \\enspace (0,1,2,...,n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{Z}",
            values: ["ensemble \\enspace des \\enspace entiers \\enspace relatifs \\enspace (-n, ... ,-2, -1, 0,1,2,...n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{Q}",
            values: ["ensemble \\enspace des \\enspace rationnels  \\enspace (qu'on \\enspace peut \\enspace écrire \\enspace sous \\enspace forme \\enspace \\frac{a}{b} \\enspace (a, b \\in \\mathbb{Z}))"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{R}",
            values: ["ensemble \\enspace des \\enspace r\\acute{e}els"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{C}",
            values: ["ensemble \\enspace des \\enspace nombres \\enspace  complexes"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{K}",
            values: ["\\mathbb{R} \\enspace ou \\enspace \\mathbb{C}"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{K}^n",
            values: ["ensemble \\enspace des \\enspace suites  \\enspace r\\acute{e}elles \\enspace ou \\enspace complexes"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{R} \\enspace \\backslash \\enspace \\{0\\}",
            values: ["ensemble \\enspace des \\enspace r\\acute{e}els \\enspace moins \\enspace sa(ses) \\enspace valeur(s) \\enspace interdite(s)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: " (a, \\enspace b) \\in \\mathbb{R}^2 ",
            values: ["a \\enspace et \\enspace b \\enspace appartiennent \\enspace à \\enspace l'ensemble \\enspace \\mathbb{R} "]
        }
    )

   

    return tableauRecapSymboles;

};

export default useTableauRecapSymboles;