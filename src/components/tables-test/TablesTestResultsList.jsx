import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { FaQuestion } from 'react-icons/fa';

import CustomLogger from '../general-content/CustomLogger';

import './TablesTestResultsList.css';

const TablesTestResultsList = ({ question, answer }) => {

    var answerToShow = question.enounce;
    var goodAnswerToShow = question.goodAnswer;
    
    return (
            <tr>
                <td className="AnswersResults">
                    {answerToShow} 
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
                <td className="GoodAnswerToDisplay">
                    {goodAnswerToShow}
                </td>
            </tr>
    );
}

export default TablesTestResultsList;