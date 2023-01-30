const mathJaxConfig = () => {

    return {
                loader: { load: ["[tex]/html", "[tex]/color"] },
                tex: {
                    packages: { "[+]": ["color"] },
                    inlineMath: [["$", "$"]],
                    displayMath: [["\\(", "\\)"]],
                }
            }
}

export default mathJaxConfig;