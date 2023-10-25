import NiceTable from '../../../immutable/NiceTable';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';
import useFibonacciSequenceFormula from './useFibonacciSequenceFormula';

const FibonacciSequenceFormulasTable = () => {

    var values = useFibonacciSequenceFormula();
    var phiMain = "\\(F_{n+2} = F_{n+1} + F_{n} \\)";

    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={"\\( n \\)"} />
                        </th>
                        <td>
                            <MathJaxDisplay toShow={phiMain} />
                        </td>
                        <td>
                            <MathJaxDisplay toShow={"\\( Résultat \\)"} />
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
                            <td>
                                <MathJaxDisplay toShow={`\\( ${value.result} \\)`} /> 
                            </td> 
                        </tr>
                    ))}  
                </tbody>
            </NiceTable>   
    ); 
}

export default FibonacciSequenceFormulasTable;