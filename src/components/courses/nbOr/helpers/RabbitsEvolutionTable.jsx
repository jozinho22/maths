import React from 'react';
import NiceTable from '../../../immutable/NiceTable';
import getRabbitsEvolution from './useRabbitsEvolution';

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
                                {value.id}    
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
                                {value.nb}    
                            </td>
                        ))}
                    </tr>   
                </tbody>
            </NiceTable>   
        );

}

export default RabbitsEvolutionTable;