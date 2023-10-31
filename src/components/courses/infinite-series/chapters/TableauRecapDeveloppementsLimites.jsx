import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapDeveloppementsLimites from '../helpers/useTableauRecapDeveloppementsLimites';

const TableauRecapDeveloppementsLimites = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauRecapDeveloppementsLimites()} />
            </>
}

export default TableauRecapDeveloppementsLimites;