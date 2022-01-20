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

    var resultToShow = <MathJaxDisplay 
                                    toShow={enounceWithUserInput}/>;

    return (
            <tr>
                <td style = {{width: "50%"}}>
                    {resultToShow}   
                </td>
                <td>
                {
                answer.input == '' ?
                    <BsQuestionLg className="QuestionIcon"/> 
                : 
                    answer.isTrue ? 
                            <GiCheckMark className="CheckIcon"/> 
                                : <GiCrossMark className="WrongIcon" /> 
                }
                </td>
            </tr>
    );
}

export default TablesTestResultsList;