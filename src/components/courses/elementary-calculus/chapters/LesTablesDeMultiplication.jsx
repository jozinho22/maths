import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauTablesDeMultiplication from '../helpers/useTableauTablesDeMultiplication';

const LesTablesDeMultiplication = () => {

    return  <>
                <p>Les tables de multiplication sont très importants dans le calcul élémentaire, voire indispensable.</p>
                <p>Sans elles, on ne peut rien faire en mathématiques.</p>
                <GenericMathsNiceTable tableValues={useTableauTablesDeMultiplication()} />
            </>
}

export default LesTablesDeMultiplication; 