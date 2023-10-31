const useTableauRecapDeveloppementsLimites = () => {
   
    var tableauRecapDevLim = [];
    var k = 0;

    tableauRecapDevLim.push(
        {
            id: k++,
            title: "fonction", 
            values: ["DL_n(a)", "DL_n(a) \\enspace (somme)"]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "e^x",
            values: ["1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + ... + \\frac{x^n}{n!} + o(x^{n}) ", "\\sum_{k=0}^n \\frac{x^n}{n!} + o(x^{n}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "\\frac{1}{1+x}",
            values: ["1 - x + x^2 - x^3 + ... + (-1)^n.x^n +  o(x^{n}) ", "\\sum_{k=0}^n (-1)^n.x^n + o(x^{n}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "\\frac{1}{1-x}",
            values: ["1  + x + x^2  + x^3 + ... + x^n +  o(x^{n}) ", "\\sum_{k=0}^n x^n + o(x^{n}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "sin(x)", 
            values: ["x - \\frac{x^3}{3!} + \\frac{x^5}{5!} +...+ (-1)^n.\\frac{x^{2n+1}}{(2n+1)!} +  o(x^{2n+2}) ", "\\sum_{k=0}^n (-1)^n.\\frac{x^{2n+1}}{(2n+1)!} + o(x^{n}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "cos(x)",
            values: ["1 + \\frac{x^2}{2!} + \\frac{x^4}{4!} +...+ \\frac{x^{2n}}{(2n)!} +  o(x^{2n+1}) ", "\\sum_{k=0}^n\\frac{x^{2n}}{(2n)!} + o(x^{2n+1}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "ln(1 + x)",
            values: ["x - \\frac{x^2}{2} + \\frac{x^3}{3}  +...+ \\frac{(-1)^{n+1} }{n}x^{n} +  o(x^{n}) ", "\\sum_{k=0}^n \\frac{(-1)^{n+1} }{n}x^{n} +  o(x^{n} "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "tan(x)",
            values: ["x + \\frac{1}{3}x^3  + \\frac{2}{15}x^5 +... +  o(x^{6}) ", ""]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "\\sqrt{1 + x}",
            values: ["1 + \\frac{1}{2}x - \\frac{1}{8}x^2  +...+  \\frac{(-1)^{n-1}(2n-2)! }{2^{2n-1}(n-1)!n!} x^{n} +  o(x^{n}) ", "\\sum_{k=0}^n \\frac{(-1)^{n-1}(2n-2)! }{2^{2n-1}(n-1)!n!} x^{n} +  o(x^{n}) "]
        }
    )
    tableauRecapDevLim.push(
         {
            id: k++,
            title: "\\frac{1}{\\sqrt{1 + x}} ",
            values: ["1 - \\frac{1}{2}x + \\frac{3}{8}x^2  - \\frac{5}{16}x^3 +...  + ..+  \\frac{(-1)^{n}(2n)!}{2^{2n}(n!)^2} x^{n} +  o(x^{n}) ", "\\sum_{k=0}^n  \\frac{(-1)^{n}(2n)!}{2^{2n}(n!)^2}  x^{n} +  o(x^{n}) "]
        }
    )

    tableauRecapDevLim.push(
         {
            id: k++,
            title: "(1 + x)^{\\alpha}",
            values: ["1 + \\alpha x + \\frac{\\alpha(\\alpha -1)}{2!}x^2+ ... + \\binom{\\alpha}{n}x^{n} +  o(x^{n}) ", "\\sum_{k=0}^n \\binom{\\alpha}{n}  x^{n} +  o(x^{n}) "]
        }
    )


    tableauRecapDevLim.push(
         {
            id: k++,
            title: "sinh(x)",
            values: ["x + \\frac{1}{3!}x^3  + \\frac{1}{5!}x^5 +... + \\frac{x^{2n+1} }{(2n+1)!}+ o(x^{2n+2})", "\\sum_{k=0}^n  \\frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}) "]
        }
    )


    tableauRecapDevLim.push(
         {
            id: k++,
            title: "cosh(x)",
            values: ["1 + \\frac{1}{2!}x^2  + \\frac{1}{4!}x^4 +... + \\frac{x^{2n}}{(2n)!} + o(x^{2n+1})", "\\sum_{k=0}^n \\frac{x^{2n}}{(2n)!} + o(x^{2n+1}) "]
        }
    )

    
    return tableauRecapDevLim;

};

export default useTableauRecapDeveloppementsLimites;