import MathJaxInline from '../../mathjax-display/MathJaxInline';
import { Table } from 'react-bootstrap';

const TanValuesTable = () => {

    var values = [];
    var k = 0;
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$0 /  2\\pi $"} />,
            alphaDeg: <MathJaxInline toShow={"$0° /  360° $"} />,
            tan: <MathJaxInline toShow={"$0$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$30° $"} />,
            tan: <MathJaxInline toShow={"$ \\frac{1}{\\sqrt{3}}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$45° $"} />,
            tan: <MathJaxInline toShow={"$1$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$60° $"} />,
            tan: <MathJaxInline toShow={"$\\sqrt{3}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2}_{-}$"} />,
            alphaDeg: <MathJaxInline toShow={"$90°_{-} $"} />,
            tan: <MathJaxInline toShow={"$+\\infty$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2}_{+}$"} />,
            alphaDeg: <MathJaxInline toShow={"$90°_{+} $"} />,
            tan: <MathJaxInline toShow={"$-\\infty$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{2\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$120° $"} />,
            tan: <MathJaxInline toShow={"$-\\sqrt{3}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{3\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$135° $"} />,
            tan: <MathJaxInline toShow={"$-1$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{5\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$150° $"} />,
            tan: <MathJaxInline toShow={"$-\\frac{1}{\\sqrt{3}}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi$"} />,
            alphaDeg: <MathJaxInline toShow={"$180°$"} />,
            tan: <MathJaxInline toShow={"$0$"} />
        }
    );
    return (
            <Table className="ValuesTable" responsive >
                <thead>
                    <tr>
                        <th>
                            <MathJaxInline toShow={"$\\alpha  \\quad (rad)$"} />    
                        </th>
                        <th>
                            <MathJaxInline toShow={"$\\alpha  \\quad (°)$"} />    
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
                                {value.alphaDeg} 
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

export default TanValuesTable;