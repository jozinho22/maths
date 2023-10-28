import NiceTable from '../../../immutable/NiceTable';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import usePhiPuissanceNPlus2Formulas from './usePhiPuissanceNPlus2Formulas';

const PhiPuissanceNPlus2Table = () => {

    var values = usePhiPuissanceNPlus2Formulas();
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

export default PhiPuissanceNPlus2Table;