import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapOperationsLimitesSuites from '../helpers/useTableauRecapOperationsLimitesSuites';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const TableauRecapOperationsLimitesDeSuites = () => {

    return  <>
                <p>Soit <MathJaxInline toShow={"$ (u_n), (v_n) $"} /> deux suites.</p>
                <p><MathJaxInline toShow={"$ \\lambda \\in \\mathbb{R} $"} /> et <MathJaxInline toShow={"$ l, l' \\in \\mathbb{R} $"} /></p>
                <GenericMathsNiceTable tableValues={useTableauRecapOperationsLimitesSuites()} />
            </>
}

export default TableauRecapOperationsLimitesDeSuites;