import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { BsQuestionLg } from 'react-icons/bs';

import MathJaxDisplay from './MathJaxDisplay';
import CustomLogger from '../general-content/CustomLogger';

import './TablesTestResultsList.css';

const TablesTestResultsList = ({ question, answer }) => {

    var equalsChar = "=";
    var model = question.enounceModel;
    var index = model.indexOf(equalsChar);

    var enounceWithUserInput = model.slice(0, index + 2) + answer.input + model.slice(index + 2);
    var answerToShow = <MathJaxDisplay 
                                    toShow={enounceWithUserInput}/>;

    var enounceWithGoodAnswer = model.slice(0, index + 2) + question.answer + model.slice(index + 2);
    var goodAnswerToShow = <MathJaxDisplay 
                                    toShow={enounceWithGoodAnswer}/>;

    return (
            <tr>
                <td className="AnswersResults">
                    {answerToShow}   
                </td>

                <td className="IconsResults">
                {
                answer.input == '' ?
                    <BsQuestionLg className="QuestionIcon"/> 
                : 
                    answer.isTrue ? 
                            <GiCheckMark className="CheckIcon"/> 
                                :  <GiCrossMark className="WrongIcon" />
                }
                </td>
                
                <td>
                {
                answer.input == '' ?
                    <div className="GoodAnswerToDisplay">
                        {goodAnswerToShow}
                    </div>
                : 
                    answer.isTrue ? 
                            ""
                                : 
                                    <div className="GoodAnswerToDisplay">
                                       {goodAnswerToShow}
                                    </div>
                }
                </td>
            </tr>
    );
}

export default TablesTestResultsList;