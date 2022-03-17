import MathJaxInline from '../../mathjax-display/MathJaxInline';
import { Container, Table } from 'react-bootstrap';

const CircleTrigoFormulasTable = () => {

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
            cos: <MathJaxInline toShow={"$-sin(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi + \\alpha$"} />,
            cos: <MathJaxInline toShow={"$-cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2 \\pi + \\alpha$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$- \\alpha$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2} - \\alpha$"} />,
            cos: <MathJaxInline toShow={"$sin(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$cos(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi - \\alpha$"} />,
            cos: <MathJaxInline toShow={"$-cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$sin(\\alpha)$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$2\\pi - \\alpha$"} />,
            cos: <MathJaxInline toShow={"$cos(\\alpha)$"} />,
            sin: <MathJaxInline toShow={"$-sin(\\alpha)$"} />
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
                            <MathJaxInline toShow={"$cos(\\alpha)$"} />      
                        </th>
                        <th>
                            <MathJaxInline toShow={"$sin(\\alpha)$"} />   
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
                                {value.cos} 
                            </td>
                            <td>
                                {value.sin} 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>   
    );
}

export default CircleTrigoFormulasTable;