import NiceTable from '../../../immutable/NiceTable';
import usePhiPuissanceNPlus1Formulas from './usePhiPuissanceNPlus1Formulas';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const PhiPuissanceNPlus1Table = () => {

    var values = usePhiPuissanceNPlus1Formulas();    
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

export default PhiPuissanceNPlus1Table;