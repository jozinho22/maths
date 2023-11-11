import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import NiceTable from '../../../immutable/NiceTable';

const SinCosFormulasTable = () => {

    var values = [];
    var k = 0;

    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2} + \\alpha $"} />,
            sin: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$-sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi + \\alpha$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$-cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2 \\pi + \\alpha$"} />,
            sin: <MathJaxInline toShow={"$sin(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$- \\alpha$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2} - \\alpha$"} />,
            sin: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi - \\alpha$"} />,
            sin: <MathJaxInline toShow={"$sin(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$-cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2\\pi - \\alpha$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />
        }
    );
    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            <MathJaxInline toShow={"$angle \\enspace A$"} />    
                        </th>
                        <th>
                            <MathJaxInline toShow={"$sin(A)$"} />   
                        </th>
                        <th>
                            <MathJaxInline toShow={"$cos(A)$"} />      
                        </th>
                    </tr>
                </thead>
                <tbody>    
                    {Array.from(values).map(value => (
                        <tr key={value.id}>
                            <td>
                                {value.alpha} 
                            </td>
                            <td>
                                {value.sin} 
                            </td>
                            <td>
                                {value.cos} 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </NiceTable>   
    );
}

export default SinCosFormulasTable;