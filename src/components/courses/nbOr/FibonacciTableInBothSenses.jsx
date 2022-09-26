import NiceTable from '../../immutable/NiceTable';
import useFibonacciInBothSenses from './useFibonacciInBothSenses';

import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

const FibonacciTableInBothSenses = () => {

    var values = useFibonacciInBothSenses().slice(1);

    const F = (n) => {
        var begin = "\\(F_{";
        var end = "} \\)";
        return <MathJaxDisplay toShow={begin + n + end} />;
    }

    return (
            <NiceTable >
                <thead>
                    <tr>
                        {Array.from(values).map( (value, index) => (
                            <th key={index}>
                                {F(value.id)}  
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        {Array.from(values).map( (value, index) => (
                            <td key={index}>
                                {value.nb}    
                            </td>
                        ))}
                    </tr>   
                </tbody>
            </NiceTable>   
    ); 
}

export default FibonacciTableInBothSenses;