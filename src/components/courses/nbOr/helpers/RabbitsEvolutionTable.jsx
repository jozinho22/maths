import React from 'react';
import NiceTable from '../../../immutable/NiceTable';
import useRabbitsEvolution from './useRabbitsEvolution';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const RabbitsEvolutionTable = () => {

    var rabbitsEv = useRabbitsEvolution().slice(0, 12);

    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            <MathJaxDisplay toShow={`\\( Mois \\)`} /> 
                        </th>
                        {Array.from(rabbitsEv).map( (value, index) => (
                            <th key={index}>
                                <MathJaxDisplay toShow={`\\(${value.id} \\)`} /> 
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody> 
                    <tr>
                        <td>
                            <MathJaxDisplay toShow={`\\( Nombre \\enspace de \\enspace  couples \\)`} /> 
                        </td>
                        {Array.from(rabbitsEv).map( (value, index) => (
                            <td key={index}>
                                <MathJaxDisplay toShow={`\\(${value.nb} \\)`} />  
                            </td>
                        ))}
                    </tr>   
                </tbody>
            </NiceTable>   
        );

}

export default RabbitsEvolutionTable;