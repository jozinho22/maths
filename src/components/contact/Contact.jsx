import React from 'react';
import { Container, Form, FormControl, InputGroup, Button, Col, Row } from 'react-bootstrap';
import Alert from '../general-content/alert/Alert';
import ContactManager from './ContactManager';
import { updateAlert, reInitAlert } from '../general-content/alert/alertFunctions';
/* import { SMTPClient } from 'emailjs';
 */
import emailjs from 'emailjs-com';

import './Contact.css';

const Contact = () => {

    const [contactType, setContactType] =  React.useState();
    const [firstName, setFirstName] =  React.useState("");
    const [lastName, setLastName] =  React.useState("");
    const [email, setEmail] =  React.useState("");
    const [subject, setSubject] =  React.useState("");
    const [message, setMessage] =  React.useState("");

    const alertTarget = React.useRef(null);

    const [firstNameAlert, setFirstNameAlert] = React.useState({show: false, message: ''});
    const [lastNameAlert, setLastNameAlert] = React.useState({show: false, message: ''});
    var maxName = 20;
    const [emailAlert, setEmailAlert] = React.useState({show: false, message: ''});
    const [subjectAlert, setSubjectAlert] = React.useState({show: false, message: ''});
    var maxSubject = 40;
    
    const [messageAlert, setMessageAlert] = React.useState({show: false, message: ''});
    const [nbLines, setNbLines] = React.useState(4);
    const maxLength = 500;

    const [captchaOK, setCaptchaOK] = React.useState(false);
    const [captchaText, setCaptchaText] = React.useState("");

    const [success, setSuccess] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    // init one time
    React.useEffect(() => {
        setContactType("DEVELOPER");
        if(process.env.NODE_ENV ==='development') {
            setFirstName("Joss");
            setLastName("Joss");
            setEmail("Joss@example.com");
            setSubject("C'est un test");
            setMessage("Un test pour le plaisir ");
        }
    }, []);

     // Prénom
    React.useEffect(() => {

        if(firstName.length > maxName - 1) {
            setFirstNameAlert(updateAlert(true, 'trop long !!!'));
        } else {
            setFirstNameAlert(reInitAlert());
        }

    }, [firstName]);

    // Nom
    React.useEffect(() => {

        if(lastName.length > maxName - 1) {
            setLastNameAlert(updateAlert(true, 'really bro ?'));
        } else {
            setLastNameAlert(reInitAlert());
        }

    }, [lastName]);

    // Email
    React.useEffect(() => {

        let validEmail = false;
   
        if(email.indexOf('@') !== -1) {
            let atIndex = email.indexOf('@');
            let suffix = email.slice(atIndex + 1);
            if(email.indexOf('.') !== -1) {
                let dotIndex = suffix.indexOf('.');
                let suffix1 = suffix.slice(0, dotIndex);
                if(suffix1.length >= 1) {
                    let suffix2 = suffix.slice(dotIndex + 1);
                    if(suffix2.length >= 1) {
                        validEmail = true;
                    }
                }
            }
        } 
        if(!validEmail && email.length > 0) {
            setEmailAlert(updateAlert(true, 'mail valide plz ^^'))
        } else {
            setEmailAlert(reInitAlert());
        }

    }, [email]); 

    // Sujet
    React.useEffect(() => {

        if(subject.length > maxSubject) {
            setSubjectAlert(updateAlert(true, 'Oula pas un roman ici svp...'));
        } else {
            setSubjectAlert(reInitAlert());
        }

    }, [subject]);

    // Hauteur de la zone de texte
    React.useEffect(() => {
        var nbLinesToCheck = message.split(/\r\n|\r|\n/).length;
        setNbLines(nbLinesToCheck);
        if(message.length > maxLength - 1) {
            setMessageAlert(updateAlert(true, 'Trop, trop, trop long !'));
        } else {
            setMessageAlert(reInitAlert());
        }
    }, [message]);

/*     const client = new SMTPClient({
        user: 'josselin.douineau.1987@gmail.com',
        password: 'uanwsdghsbgwjglw',
        host: 'smtp.gmail.com',
        ssl: true,
    }); */

    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactType: contactType,
        subject: subject,
        message: message
    };

    const sendEmail = () => {
        emailjs.send(
            'service_oo4q3ja',
            'template_ts3dgfe', 
            templateParams, 
            'user_F9hDnNvI0w5QkE97hKg5n')
            .then((response) => {
                if(response.ok) {
                    setIsLoading(true);
                }
                console.log('SUCCESS!', response.status, response.text);
                return true;
            }, (err) => {
                console.log('FAILED...', err);
            }
            ).then((ok) => {
                if(ok) {
                    setSuccess(true);
                }
            });
    }
    
    return (

    <ContactManager isLoading={isLoading} success={success}>
         <Form className="Form">
            <Row>
                <Col>
                    <Form.Group className="FirstName" >
                        <Form.Label>
                            Prénom
                            <Alert 
                                show={firstNameAlert.show}
                                message={firstNameAlert.message}
                                component="Contact" />
                        </Form.Label>
                        <FormControl
                            value={firstName} 
                            onChange={e => {
                                if(firstName.length < maxName) {
                                    setFirstName(e.target.value)
                                } else {
                                    setFirstName(e.target.value.slice(0, e.target.value.length - 1))
                                }
                            }} />
                     </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="LastName" >
                        <Form.Label>
                            Nom
                            <Alert 
                                show={lastNameAlert.show}
                                message={lastNameAlert.message}
                                component="Contact" />
                        </Form.Label>
                        <FormControl
                            value={lastName} 
                            onChange={e => {
                                if(lastName.length < maxName) {
                                    setLastName(e.target.value);
                                } else {
                                    setLastName(e.target.value.slice(0, e.target.value.length - 1))
                                }
                            }} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Group className="Email" id="emailForm">
                        <Form.Label>
                            @
                            <Alert 
                                show={emailAlert.show}
                                message={emailAlert.message}
                                component="Contact" />
                        </Form.Label>
                        <FormControl
                            value={email} 
                            onChange={e => setEmail(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="ContactType">
                        <Form.Label>Vous êtes ?</Form.Label>
                        <Form.Control 
                            value={contactType} 
                            as="select" 
                            onChange={e => setContactType(e.target.value)}>
                            <option value="student">un élève</option>
                            <option value="teacher">un professeur</option>
                            <option value="company">une société</option>
                            <option value="other">autre</option >
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="Subject" >
                <Form.Label>
                    Sujet
                    <Alert 
                        show={subjectAlert.show}
                        message={subjectAlert.message}
                        component="Contact" />
                </Form.Label>
                <FormControl 
                    value={subject} 
                    onChange={e => setSubject(e.target.value)}/>
            </Form.Group>

            <Form.Group className="Message" >
                <Form.Label>
                    Message
                    <Alert 
                        show={messageAlert.show}
                        message={messageAlert.message}
                        component="Contact" />
                </Form.Label>
                <FormControl 
                    as="textarea" 
                    rows={nbLines}
                    maxLength={maxLength}
                    value={message}
                    onChange={e => setMessage(e.target.value)} />
            </Form.Group>
            <Button 
                className="DefaultButton ContactButton"
                onClick={(client) => sendEmail(client)}>Merci !</Button>
        </Form>
    </ContactManager>
    );
}

export default Contact;