import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import useTableauRecapDerivees from '../helpers/useTableauRecapDerivees';

const TableauRecapDesDerivees = () => {

    return  <>
                <p>Dans ce tableau récapitulatif, par souci de simplicité nous utiliserons les notations <MathJaxInline toShow={"$ f $"} /> et <MathJaxInline toShow={"$ g $"} /> pour désigner des fonctions.</p>
                <GenericMathsNiceTable tableValues={useTableauRecapDerivees()} />
            </>
}

export default TableauRecapDesDerivees;