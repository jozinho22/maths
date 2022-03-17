import React from 'react';
import NiceTable from '../../immutable/NiceTable';
import useRatios from './useRatios';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

const RatioTable = () => {

    var ratios = useRatios();
    var n = "\\(n \\)";
    var ratioMathJax = "\\(\\frac{F_{n+1}}{F_{n}}  \\)";

    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={n} />
                        </th>
                        {Array.from(ratios).map( (ratio, index) => (
                            <th key={index}>
                                {ratio.id}    
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>
                           <MathJaxDisplay toShow={ratioMathJax} />
                        </td>
                        {Array.from(ratios).map( (ratio, index) => (
                            <td key={index}>
                                {ratio.ratio}    
                            </td>
                        ))}
                    </tr>   
                </tbody>
            </NiceTable>   
    );
}

export default RatioTable;