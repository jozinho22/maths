import NiceTable from '../../../immutable/NiceTable';
import useFibonacciFormulas from './useFibonacciFormulas';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FibonacciFormulasTable = () => {

    var values = useFibonacciFormulas();
    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";
    var phiGen2 =  "\\(\\phi^{n+1} =  \\phi^{n} +  \\phi^{n - 1} \\)";

    return (
            <NiceTable >
                <thead>
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={"\\( n \\)"} />
                        </th>
                        <td>
                            <MathJaxDisplay toShow={phiGen} />
                        </td>
                        <td>
                            <MathJaxDisplay toShow={phiGen2} />
                        </td>
                    </tr>
                </thead>
                <tbody> 
                    {Array.from(values).map( (value, index) => (
                        <tr key={index}>
                            <td>
                                 <MathJaxDisplay toShow={`\\( ${value.id} \\)`} />  
                            </td>
                            <td>
                                <MathJaxDisplay toShow={value.formula1} /> 
                            </td>  
                            <td>
                                <MathJaxDisplay toShow={value.formula2} /> 
                            </td> 
                        </tr>
                    ))}  
                </tbody>
            </NiceTable>   
    ); 
}

export default FibonacciFormulasTable;