const mathJaxConfig = () => {

    return {
                loader: { load: ["[tex]/html"] },
                tex: {
                    packages: { "[+]": ["html"] },
                    inlineMath: [["$", "$"]],
                    displayMath: [["\\(", "\\)"]],
                }
            }
}

export default mathJaxConfig;