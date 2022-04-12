import MathJaxInline from '../../mathjax-display/MathJaxInline';
import NiceTable from '../../immutable/NiceTable';

const SinCosValuesTable = () => {

    var values = [];
    var k = 0;
    
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$0 /  2\\pi $"} />,
            alphaDeg: <MathJaxInline toShow={"$0° /  360° $"} />,
            sin: <MathJaxInline toShow={"$0$"} />,
            cos: <MathJaxInline toShow={"$1$"} />
        }
    );
/*     values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{10}$"} />,
            alphaDeg: <MathJaxInline toShow={"$18° $"} />,
            sin: <MathJaxInline toShow={"$ \\frac{\\sqrt{5} - 1}{4}$"} />,
            cos: <MathJaxInline toShow={"$ \\frac{ \\sqrt{ 10 + 2\\sqrt{5}} } {4} $"} />
        }
    ); */
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$30° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{1}{2}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$45° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$60° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />,
            cos: <MathJaxInline toShow={"$\\frac{1}{2}$"} />
        }
    );
/*     values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{2\\pi}{5}$"} />,
            alphaDeg: <MathJaxInline toShow={"$72° $"} />,
            sin: <MathJaxInline toShow={"$ \\frac{ \\sqrt{ 10 + 2\\sqrt{5}} } {4}$"} />,
            cos: <MathJaxInline toShow={"$ \\frac{\\sqrt{5} - 1}{4} $"} />
        }
    ); */
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{\\pi}{2}$"} />,
            alphaDeg: <MathJaxInline toShow={"$90° $"} />,
            sin: <MathJaxInline toShow={"$1$"} />,
            cos: <MathJaxInline toShow={"$0$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{2\\pi}{3}$"} />,
            alphaDeg: <MathJaxInline toShow={"$120° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{3}}{2}$"} />,
            cos: <MathJaxInline toShow={"$-\\frac{1}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$ \\frac{3\\pi}{4}$"} />,
            alphaDeg: <MathJaxInline toShow={"$135° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{\\sqrt{2}}{2}$"} />,
            cos: <MathJaxInline toShow={"$-\\frac{\\sqrt{2}}{2}$"} />           
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\frac{5\\pi}{6}$"} />,
            alphaDeg: <MathJaxInline toShow={"$150° $"} />,
            sin: <MathJaxInline toShow={"$\\frac{1}{2}$"} />,
            cos: <MathJaxInline toShow={"$-\\frac{\\sqrt{3}}{2}$"} />
        }
    );
    values.push(
        {
            id: ++k,
            alpha: <MathJaxInline toShow={"$\\pi$"} />,
            alphaDeg: <MathJaxInline toShow={"$180°$"} />,
            sin: <MathJaxInline toShow={"$0$"} />,
            cos: <MathJaxInline toShow={"$-1$"} />
        }
    );
    return (
            <NiceTable>
                <thead>
                    <tr>
                        <th>
                            <MathJaxInline toShow={"$\\alpha  \\quad (rad)$"} />    
                        </th>
                        <th>
                            <MathJaxInline toShow={"$\\alpha  \\quad (°)$"} />    
                        </th>
                        <th>
                            <MathJaxInline toShow={"$sin(\\alpha)$"} />   
                        </th>
                        <th>
                            <MathJaxInline toShow={"$cos(\\alpha)$"} />      
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

export default SinCosValuesTable;