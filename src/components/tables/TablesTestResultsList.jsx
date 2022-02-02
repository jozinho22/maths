import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { BsQuestionLg } from 'react-icons/bs';

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
                    answer.input == '' ?
                        <BsQuestionLg className="QuestionIcon Icon"/> 
                    : 
                        answer.isTrue ? 
                                <GiCheckMark className="CheckIcon Icon"/> 
                                    :  <GiCrossMark className="WrongIcon Icon" />
                } 
                </td>
                <td className="GoodAnswerToDisplay">
                {
                    <p style={{color: "var(--green-color)"}}>{goodAnswerToShow}</p> 
                }
                </td>
            </tr>
    );
}

export default TablesTestResultsList;