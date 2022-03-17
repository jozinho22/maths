import MathJaxInline from '../../mathjax-display/MathJaxInline';
import { Table } from 'react-bootstrap';

const CircleTrigoValuesTable = () => {

    var values = [];
    var k = 0;
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$0 /  2\\pi $"} />,
            alphaDeg: <MathJaxInline toShow={"$0° /  360° $"} />,
            cos: <MathJaxInline toShow={"$1$"} />,
            sin: <MathJaxInline toShow={"$0$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$30° $"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{1}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$45° $"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$60° $"} />,
            cos: <MathJaxInline toShow={"$\\frac{1}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2}$"} />,
            alphaDeg: <MathJaxInline toShow={"$90° $"} />,
            cos: <MathJaxInline toShow={"$0$"} />,
            sin: <MathJaxInline toShow={"$1$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{2\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$120° $"} />,
            cos: <MathJaxInline toShow={"$-\\frac{1}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{3\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$135° $"} />,
            cos: <MathJaxInline toShow={"$-\\frac{\\sqrt{2}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{5\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$150° $"} />,
            cos: <MathJaxInline toShow={"$-\\frac{\\sqrt{3}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{1}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi$"} />,
            alphaDeg: <MathJaxInline toShow={"$180°$"} />,
            cos: <MathJaxInline toShow={"$-1$"} />,
            sin: <MathJaxInline toShow={"$0$"} />
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
                                {value.alphaDeg} 
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

export default CircleTrigoValuesTable;