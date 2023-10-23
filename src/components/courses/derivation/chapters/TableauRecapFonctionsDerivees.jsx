import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapFonctionsDerivees from '../helpers/useTableauRecapFonctionsDerivees';

const TableauRecapFonctionsDerivees = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauRecapFonctionsDerivees()} />
            </>
}

export default TableauRecapFonctionsDerivees;