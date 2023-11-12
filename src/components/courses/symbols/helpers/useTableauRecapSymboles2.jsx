const useTableauRecapSymboles2 = () => {
   
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
            title: "f: x \\longmapsto x^2",
            values: ["d\\acute{e}finition  \\enspace d'une  \\enspace fonction \\enspace f"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "f'",
            values: ["d\\acute{e}riv\\acute{e}e \\enspace de \\enspace f"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\frac{df}{dx}",
            values: ["d\\acute{e}riv\\acute{e}e \\enspace de \\enspace f \\enspace par \\enspace rapport \\enspace \\overset{‘}{a} \\enspace x"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "f^{(n)}",
            values: ["d\\acute{e}riv\\acute{e}e \\enspace n-i\\overset{‘}{e}me \\enspace de \\enspace f"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "fonction \\enspace de \\enspace classe \\enspace \\mathcal{C}^n \\enspace sur \\enspace I",
            values: ["fonction \\enspace continue \\enspace et \\enspace d\\acute{e}rivable \\enspace n \\enspace  fois \\enspace  sur \\enspace I"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "DL_n(a)",
            values: ["développement \\enspace limit\\acute{e} \\enspace d'ordre \\enspace n \\enspace au \\enspace point \\enspace a"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\int^x f(t)dt",
            values: ["une \\enspace primitive \\enspace de \\enspace f(x)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\int_a^b f(t)dt",
            values: ["int\\acute{e}grale \\enspace de \\enspace a \\enspace vers \\enspace b \\enspace de  \\enspace f(x)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\sum_{k=0}^n \\enspace f(k)",
            values: ["somme \\enspace des \\enspace images \\enspace d'une \\enspace fonction \\enspace f, \\enspace de \\enspace 0 \\enspace à \\enspace n : f(0) + f(1) + ... + f(n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\sum u_n",
            values: ["s\\acute{e}rie \\enspace num\\acute{e}rique \\enspace associ\\acute{e}e  \\enspace à \\enspace une \\enspace suite \\enspace (u_n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "S_n = \\sum_{k=0}^n u_n",
            values: ["somme \\enspace partielle \\enspace de \\enspace la \\enspace s\\acute{e}rie \\enspace \\sum u_n"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\prod_{k=0}^n \\enspace f(k)",
            values: ["produit \\enspace des \\enspace images \\enspace d'une \\enspace fonction \\enspace f, \\enspace de \\enspace 0 \\enspace à \\enspace n : f(0) \\times f(1) \\times ... \\times f(n)"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "lim_{x \\to a} \\enspace f(x) = l",
            values: ["limite \\enspace d'une \\enspace fonction \\enspace f \\enspace lorsque \\enspace x \\enspace tend \\enspace vers \\enspace a"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: " f(x) \\underset{a}{\\longrightarrow} l",
            values: ["limite \\enspace d'une \\enspace fonction \\enspace f \\enspace lorsque \\enspace x \\enspace tend \\enspace vers \\enspace a"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "n!",
            values: ["factorielle(n) = n\\times(n-1)\\times...\\times \\enspace 3 \\times 2 \\times 1"]
        }
    )

    tableauRecapSymboles.push(
         {
            id: k++,
            title: "\\binom{n}{k}",
            values: ["k \\enspace \\acute{e}l\\acute{e}ments \\enspace parmis \\enspace n = \\frac{n!}{k!(n-k)!}"]
        }
    )

    return tableauRecapSymboles;

};

export default useTableauRecapSymboles2;