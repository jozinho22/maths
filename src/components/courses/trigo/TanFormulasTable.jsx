import MathJaxInline from '../../mathjax-display/MathJaxInline';
import NiceTable from '../../immutable/NiceTable';

const TanFormulasTable = () => {

    var values = [];
    var k = 0;

    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2} + \\alpha $"} />,
            tan: <MathJaxInline toShow={"$- \\frac{1}{tan(\\alpha)}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi + \\alpha$"} />,
            tan: <MathJaxInline toShow={"$tan(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2 \\pi + \\alpha$"} />,
            tan: <MathJaxInline toShow={"$tan(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$- \\alpha$"} />,
            tan: <MathJaxInline toShow={"$-tan(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2} - \\alpha$"} />,
            tan: <MathJaxInline toShow={"$\\frac{1}{tan(\\alpha)}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi - \\alpha$"} />,
            tan: <MathJaxInline toShow={"$-tan(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2\\pi - \\alpha$"} />,
            tan: <MathJaxInline toShow={"$-tan(\\alpha)$"} />
        }
    );
    return (
            <NiceTable className="ValuesTable" >
                <thead>
                    <tr>
                        <th>
                            <MathJaxInline toShow={"$\\alpha$"} />    
                        </th>
                        <th>
                            <MathJaxInline toShow={"$tan(\\alpha)$"} />      
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
                                {value.tan} 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </NiceTable>   
    );
}

export default TanFormulasTable;