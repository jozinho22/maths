import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapDeveloppementsLimites from '../helpers/useTableauRecapDeveloppementsLimites';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const TableauRecapDeveloppementsLimites = () => {

    return  <>
                <p>Pour certains <MathJaxInline toShow={"$DL_n(0) $"} />, on a effectué un changement de variable <MathJaxInline toShow={"$ a= 1 + t$"} /> pour se ramener au voisinage de <MathJaxInline toShow={"$0$"} />, notamment dans le cas où la fonction ou une des ses dérivées n'est pas définie. </p>
                <GenericMathsNiceTable tableValues={useTableauRecapDeveloppementsLimites()} />
            </>
}

export default TableauRecapDeveloppementsLimites;