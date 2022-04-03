import NiceTable from '../immutable/NiceTable';
import MathJaxDisplay from '../mathjax-display/MathJaxDisplay';
import MathJaxInline from '../mathjax-display/MathJaxInline';

const RefFormulas = ( {formulasToShow} ) => {

    return (
            <>
                <p>Formules vues précemment</p>
                <NiceTable >
                    <thead>
                        <tr>
                            <th>
                                Indice
                            </th>
                            <td>
                                Formule
                            </td>
                        </tr>
                    </thead>
                    <tbody> 
                        {Array.from(formulasToShow).map( (formulaToShow, index) => (
                            <tr key={index}>
                                <td>
                                    <MathJaxInline toShow={`$ ${formulaToShow.id} $`} />  
                                </td>
                                <td>
                                    <MathJaxDisplay toShow={formulaToShow.formula} /> 
                                </td>  
                            </tr>
                        ))}  
                    </tbody>
                </NiceTable>   
            </>
        );
}

export default RefFormulas;