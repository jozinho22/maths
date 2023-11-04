const usetableauRecapFonctionsDeriveesTrigo = () => {
   
    var tableauRecapFonctionsDeriveesTrigo = [];
    var k = 0;

    tableauRecapFonctionsDeriveesTrigo.push(
        {
            id: k++,
            title: "fonction",
            values: ["d \\acute{e} riv \\acute{e} e"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "sin(x)",
            values: ["cos(x)"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "cos(x)",
            values: ["-sin(x)"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "tan(x)",
            values: ["1 + tan^2(x)"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "Arcsin(x)",
            values: [" \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "Arccos(x)",
            values: ["- \\frac{1}{\\sqrt{1 - x^2}}"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "Arctan(x)",
            values: ["\\frac{1}{1 + x^2}"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "sh(x)",
            values: ["ch(x)"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "ch(x)",
            values: ["sh(x)"]
        }
    )

    tableauRecapFonctionsDeriveesTrigo.push(
         {
            id: k++,
            title: "th(x)",
            values: ["1 - tan^2(x)"]
        }
    )

    return tableauRecapFonctionsDeriveesTrigo;

};

export default usetableauRecapFonctionsDeriveesTrigo;