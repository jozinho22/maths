import NiceTable from '../../../immutable/NiceTable';
import usePhiFormula2 from './usePhiFormula2';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const PhiFormula2Table = () => {

    var values = usePhiFormula2();    
    var phiGen =  "\\(\\phi^{n+1} =  F_{n+1}.\\phi +  F_{n} \\)";

    return (
            <NiceTable>
                <thead id="FibonacciFormulasTable">
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={"\\( n \\)"} />
                        </th>
                        <td>
                            <MathJaxDisplay toShow={phiGen} />
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
                                <MathJaxDisplay toShow={value.formula} /> 
                            </td>  
                        </tr>
                    ))}  
                </tbody>
            </NiceTable>   
    ); 
}

export default PhiFormula2Table;