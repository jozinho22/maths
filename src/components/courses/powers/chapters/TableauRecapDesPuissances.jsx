import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';
import useTableauRecapPuissances from '../helpers/useTableauRecapPuissances';

const TableauRecapDesPuissances = () => {

    return  <>
                <p>Un tableau récapitulatif de toutes les formes sur les puissances de <MathJaxInline toShow={"$x$"} />.</p>
                <GenericMathsNiceTable tableValues={useTableauRecapPuissances()} />
            </>
}

export default TableauRecapDesPuissances;