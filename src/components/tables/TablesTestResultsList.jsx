import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { BsQuestionLg } from 'react-icons/bs';

import CustomLogger from '../general-content/CustomLogger';

import './TablesTestResultsList.css';

const TablesTestResultsList = ({ question, answer }) => {

    var answerToShow = question.enounce + answer.input;
    if(answer.input !== '') {
        answerToShow = answerToShow + ' ';
    }
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
                answer.input == '' ?
                    <p>{goodAnswerToShow}</p> : 
                            answer.isTrue ? 
                            <p style={{color: "var(--back-color)"}}>{goodAnswerToShow}</p> : 
                                    <p>{goodAnswerToShow}</p>
                }
                </td>
            </tr>
    );
}

export default TablesTestResultsList;