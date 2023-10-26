import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapSymboles from '../helpers/useTableauRecapSymboles';

const IndexDesSymboles = () => {

    return  <>
                <p>Soit <MathJaxInline toShow={"$A, B$"} /> deux propositions.</p>
                <GenericMathsNiceTable tableValues={useTableauRecapSymboles()} />
            </>
}

export default IndexDesSymboles;