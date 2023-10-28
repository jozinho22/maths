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
            title: "\\forall x \\in I",
            values: ["pour \\enspace tout \\enspace x \\enspace appartenant \\enspace à \\enspace I"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\exists x, A",
            values: ["il \\enspace existe  \\enspace au  \\enspace moins \\enspace un \\enspace x \\enspace tel \\enspace que : \\enspace A"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\exists! x, A",
            values: ["il \\enspace existe \\enspace un \\enspace seul \\enspace  x \\enspace tel \\enspace que : \\enspace A"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "(AB) \\perp (CD)",
            values: ["la \\enspace droite \\enspace (AB) \\enspace perpendiculaire \\enspace à \\enspace (CD)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "(AB) \\parallel (CD)",
            values: ["la \\enspace droite \\enspace (AB) \\enspace parallele \\enspace à \\enspace (CD)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{N}",
            values: ["ensemble \\enspace des \\enspace entiers \\enspace naturels \\enspace (0,1,2...n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\mathbb{Z}",
            values: ["ensemble \\enspace des \\enspace entiers \\enspace relatifs \\enspace (-n, ... -2, -1, 0,1,2...n)"]
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
            title: "\\mathbb{R} \\backslash \\{0\\}",
            values: ["ensemble \\enspace des \\enspace r\\acute{e}els \\enspace moins \\enspace ses \\enspace valeurs \\enspace interdites"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: " (\\enspace a, \\enspace b) \\in \\mathbb{R}^2) ",
            values: ["a \\enspace et \\enspace b \\enspace appartiennent \\enspace à \\enspace l'ensemble \\enspace \\mathbb{R} "]
        }
    )

   

    return tableauRecapSymboles;

};

export default useTableauRecapSymboles;