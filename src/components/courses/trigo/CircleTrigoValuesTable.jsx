import MathJaxInline from '../../mathjax-display/MathJaxInline';
import { Container, Table } from 'react-bootstrap';

const CircleTrigoValuesTable = () => {

    var values = [];
    var k = 0;
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{6}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{1}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{4}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{3}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{1}{2}$"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />
        }
    );

    return (
            <Table responsive>
                {/* Valeurs de <MathJaxInline toShow={"$cos(\\alpha)$"} /> et <MathJaxInline toShow={"$sin(\\alpha)$"} /> pour un angle <MathJaxInline toShow={"$\\alpha$"} /> donné */}
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

export default CircleTrigoValuesTable;