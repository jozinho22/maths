import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauRecapFonctionsDeriveesTrigo from '../helpers/useTableauRecapFonctionsDeriveesTrigo';

const TableauRecapFonctionsDeriveesTrigo = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauRecapFonctionsDeriveesTrigo()} />
            </>
}

export default TableauRecapFonctionsDeriveesTrigo;