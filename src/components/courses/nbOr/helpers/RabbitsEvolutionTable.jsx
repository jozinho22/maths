import React from 'react';
import NiceTable from '../../../immutable/NiceTable';
import getRabbitsEvolution from './useRabbitsEvolution';
import MathJaxDisplay from '../../../mathjax-display/MathJaxDisplay';

const RabbitsEvolutionTable = () => {

    var rabbitsEv = getRabbitsEvolution();

    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            Mois
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
                            Nombre de couples
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