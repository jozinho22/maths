import { GiCheckMark , GiCrossMark} from 'react-icons/gi';
import { BsQuestionLg } from 'react-icons/bs';

import MathJaxDisplay from './MathJaxDisplay';
import CustomLogger from '../general-content/CustomLogger';

import './TablesTestResultsList.css';
import { Col, Row } from 'react-bootstrap';

const TablesTestResultsList = ({ question, answer }) => {

    var equalsChar = "=";
    var model = question.enounceModel;
    var index = model.indexOf(equalsChar);

    var enounceWithUserInput = model.slice(0, index + 2) + answer.input + model.slice(index + 2);
    var answerToShow = <MathJaxDisplay 
                                    toShow={enounceWithUserInput}/>;

    var enounceWithGoodAnswer = model.slice(0, index + 2) + question.goodAnswer + model.slice(index + 2);
    var goodAnswerToShow = <MathJaxDisplay 
                                    toShow={enounceWithGoodAnswer}/>;

    return (
            <Row>
                <Col className="AnswersResults">
                    {answerToShow}   
                </Col>

                <Col className="IconsResults">
                {
                answer.input == '' ?
                    <BsQuestionLg className="QuestionIcon"/> 
                : 
                    answer.isTrue ? 
                            <GiCheckMark className="CheckIcon"/> 
                                :  <GiCrossMark className="WrongIcon" />
                }
                </Col>
                
                <Col className="GoodAnswerToDisplay">
                {
                answer.input == '' ?
                    <p>{goodAnswerToShow}</p> : 
                            answer.isTrue ? 
                            <p style={{color: "var(--back-color)"}}>{goodAnswerToShow}</p> : 
                                    <p>{goodAnswerToShow}</p>
                }
                </Col>
                <Col></Col>
            </Row>
    );
}

export default TablesTestResultsList;