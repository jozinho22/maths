import React from 'react';
import GenericMathsNiceTable from '../../helpers/GenericMathsNiceTable';
import useTableauTablesDeMultiplication2 from '../helpers/useTableauTablesDeMultiplication2';
import { Button } from 'react-bootstrap';
import MathJaxInline from '../../../mathjax-display/MathJaxInline';

const LesTablesDeMultiplication2 = () => {

    const [a, setA] = React.useState(10);

    return  <>
                <div className="RowAlignedButtons">
                    <Button className={`DefaultButton MiniButton`} disabled={a <= 10 ? true : false} onClick={() => {if(a > 10) setA(a-10) }} >-</Button>
                    <MathJaxInline toShow={`$a = ${a}$`} />
                    <Button className={`DefaultButton MiniButton`} disabled={a >= 90 ? true : false} onClick={() => {if(a < 90) setA(a+10) }} >+</Button>
                </div>
                <GenericMathsNiceTable tableValues={useTableauTablesDeMultiplication2(a)} />
            </>
}

export default LesTablesDeMultiplication2; 