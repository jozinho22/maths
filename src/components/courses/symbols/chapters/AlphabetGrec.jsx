import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauAlphabetGrec from '../helpers/useTableauAlphabetGrec';

const AlphabetGrec = () => {

    return  <>
                <GenericMathsNiceTable tableValues={useTableauAlphabetGrec()} />
            </>
}

export default AlphabetGrec;