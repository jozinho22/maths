import React from 'react';
import MathJaxDisplay from '../../mathjax-display/MathJaxDisplay';

import NiceTable from '../../immutable/NiceTable';

const GenericMathsNiceTable = ( {tableValues} ) => {

    return  <>
                <NiceTable>
                    <thead>
                        <tr>
                            <th>
                                <MathJaxDisplay toShow={`\\( ${tableValues[0].title} \\)`} />
                            </th>
                           
                                    {
                                        tableValues[0].values.map( (headervalue, index) => {
                                            return <td key={index}>
                                                        <MathJaxDisplay toShow={`\\( ${headervalue}  \\)`} />
                                                    </td>
                                        })
                                    }
                        </tr>
                    </thead>
                    <tbody> 
                        {
                            tableValues.slice(1, tableValues.length).map( (bodyValues, index) => {
                                return <tr key={index}>
                                            <td>
                                                <MathJaxDisplay toShow={`\\( ${bodyValues.title}  \\)`} /> 
                                            </td>
                                        
                                                    {
                                                        bodyValues.values.map( (value, index) => {
                                                            return <td key={index}>
                                                                        <MathJaxDisplay toShow={`\\( ${value}  \\)`} />
                                                                    </td>

                                                        })
                                                    }
                                        </tr>
                            })
                        }
                    </tbody>
                </NiceTable>   
            </>
}

export default GenericMathsNiceTable ;