import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';

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
                        <FaQuestion className="QuestionIcon Icon" /> 
                            : 
                                answer.isTrue ? 
                                        <GiCheckMark className="CheckIcon Icon" /> 
                                            :  <GiCrossMark className="WrongIcon Icon" />
                } 
                </td>
                <td className="AnswersResults GoodAnswer">
                    {question.goodAnswer}
                </td>
            </tr>
    );
}

export default OperationsTestResultsList;