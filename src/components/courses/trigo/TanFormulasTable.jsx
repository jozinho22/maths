import MathJaxInline from '../../mathjax-display/MathJaxInline';
import { Table } from 'react-bootstrap';

const TanFormulasTable = () => {

    var values = [];
    var k = 0;
/*     values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\alpha $"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$sin(\\alpha)$"} />
        }
    ); */
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
            <Table className="ValuesTable" responsive >
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
            </Table>   
    );
}

export default TanFormulasTable;