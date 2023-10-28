import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapSymboles2 from '../helpers/useTableauRecapSymboles2';

const IndexDesSymboles2 = () => {

    return  <>
                <p>Soit <MathJaxInline toShow={"$f$"} /> une fonction.</p>
                <GenericMathsNiceTable tableValues={useTableauRecapSymboles2()} />
            </>
}

export default IndexDesSymboles2;