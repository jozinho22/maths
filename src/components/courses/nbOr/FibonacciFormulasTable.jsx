import NiceTable from '../../immutable/NiceTable';
import useFibonacciFormulas from './useFibonacciFormulas';

import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

const FibonacciFormulasTable = () => {

    var values = useFibonacciFormulas();

    return (
            <NiceTable >
                <thead>
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={"\\( n \\)"} />
                        </th>
                        <td>
                            <MathJaxDisplay toShow={"\\( \\phi^{n} \\)"} />
                        </td>
                        
                    </tr>
                </thead>
                <tbody> 
                    {Array.from(values).map( (value, index) => (
                        <tr key={index}>
                            <td>
                                {value.id}  
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

export default FibonacciFormulasTable;