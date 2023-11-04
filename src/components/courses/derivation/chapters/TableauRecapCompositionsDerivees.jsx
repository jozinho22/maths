import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import useTableauRecapCompositionDerivees from '../helpers/useTableauRecapCompositionDerivees';

const TableauRecapCompositionsDerivees = () => {

    return  <>
                <p>Dans ce tableau récapitulatif, par souci de simplicité nous utiliserons les notations <MathJaxInline toShow={"$ f $"} /> et <MathJaxInline toShow={"$ g $"} /> pour désigner des fonctions.</p>
                <GenericMathsNiceTable tableValues={useTableauRecapCompositionDerivees()} />
            </>
}

export default TableauRecapCompositionsDerivees;