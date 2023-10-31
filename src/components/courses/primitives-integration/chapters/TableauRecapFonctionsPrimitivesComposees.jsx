import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapFonctionsPrimitivesComposees from '../helpers/useTableauRecapFonctionsPrimitivesComposees';

const TableauRecapFonctionsPrimitivesComposees = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauRecapFonctionsPrimitivesComposees()} />
            </>
}

export default TableauRecapFonctionsPrimitivesComposees;