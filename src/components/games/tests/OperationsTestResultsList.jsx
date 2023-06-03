import { Check2, X, Question} from 'react-bootstrap-icons';

const OperationsTestResultsList = ({ question, answer }) => {

    return (
            <tr>
                <td className="AnswersResults">
                    {question.enounce} 
                </td>
                <td className="AnswersResults">
                    {answer.input} 
                </td>
                <td>
                {
                    answer.input === '' ?
                        <Question className="QuestionIcon Icon" /> 
                            : 
                                answer.isTrue ? 
                                        <Check2 className="CheckIcon Icon" /> 
                                            :  <X className="WrongIcon Icon" />
                } 
                </td>
                <td className="AnswersResults GoodAnswer">
                    {question.goodAnswer}
                </td>
            </tr>
    );
}

export default OperationsTestResultsList;