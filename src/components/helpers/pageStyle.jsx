const pageStyle = () => {
    return `
        @media print {
            html, body {
                height: initial !important;
                overflow: initial !important;
                print-color-adjust: exact; 
                -webkit-print-color-adjust: exact; 
            }
        }

        @page {
            size: A4;
        }
    `
}

export default pageStyle;