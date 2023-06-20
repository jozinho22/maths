import NiceTable from '../../../immutable/NiceTable';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import usePhiFormula1 from './usePhiFormula1';

const PhiFormula1Table = () => {

    var values = usePhiFormula1();
    var phiGen2 =  "\\(\\phi^{n+2} =  \\phi^{n+1} +  \\phi^{n} \\)";

    return (
            <NiceTable>
                <thead id="FibonacciFormulasTable">
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={"\\( n \\)"} />
                        </th>
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
                                <MathJaxDisplay toShow={value.formula} /> 
                            </td>  
                        </tr>
                    ))}  
                </tbody>
            </NiceTable>   
    ); 
}

export default PhiFormula1Table;