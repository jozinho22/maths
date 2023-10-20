import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapFonctionsPrimitives from '../helpers/useTableauRecapFonctionsPrimitives';

const TableauRecapFonctionsPrimitives = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauRecapFonctionsPrimitives()} />
            </>
}

export default TableauRecapFonctionsPrimitives;