import NiceTable from '../../../immutable/NiceTable';
import useFibonacci from './useFibonacci';

import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const FibonacciTable = () => {

    var values = useFibonacci().slice(0, 12);

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
                                <MathJaxDisplay toShow={`\\( ${value.nb} \\)`} />    
                            </td>
                        ))}
                    </tr>   
                </tbody>
            </NiceTable>   
    ); 
}

export default FibonacciTable;