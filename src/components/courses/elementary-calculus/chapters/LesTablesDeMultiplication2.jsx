import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauTablesDeMultiplication2 from '../helpers/useTableauTablesDeMultiplication2';

const LesTablesDeMultiplication2 = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauTablesDeMultiplication2()} />
            </>
}

export default LesTablesDeMultiplication2; 