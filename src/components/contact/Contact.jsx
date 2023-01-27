/* import React from 'react';
import { Container, Form, FormControl, InputGroup, Button, Col, Row } from 'react-bootstrap';
import Alert from '../alert/Alert';
import ContactManager from './ContactManager';
import { updateAlert, reInitAlert } from '../alert/alertFunctions';
import emailjs from 'emailjs-com';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

import './Contact.css';

export const ContactContext = React.createContext(null);

const Contact = () => {

    const [contactType, setContactType] =  React.useState("");
    const [firstName, setFirstName] =  React.useState("");
    const [lastName, setLastName] =  React.useState("");
    const [email, setEmail] =  React.useState("");
    const [subject, setSubject] =  React.useState("");
    const [message, setMessage] =  React.useState("");

    const [firstNameAlert, setFirstNameAlert] = React.useState({show: false, message: ''});
    const [lastNameAlert, setLastNameAlert] = React.useState({show: false, message: ''});
    var maxName = 20;
    const [emailAlert, setEmailAlert] = React.useState({show: false, message: ''});
    const [subjectAlert, setSubjectAlert] = React.useState({show: false, message: ''});
    var maxSubject = 40;
    
    const [messageAlert, setMessageAlert] = React.useState({show: false, message: ''});
    const [globalAlert, setGlobalAlert] = React.useState({show: false, message: '', color: ''});

    const maxLength = 500;

    const [captchaOk, setCaptchaOk] = React.useState(false);
    const [captchaText, setCaptchaText] = React.useState("");

    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);

    // init one time
    React.useEffect(() => {
        if(process.env.NODE_ENV === 'development') {
            setContactType("other");
            setFirstName("Joss");
            setLastName("Joss");
            setEmail("Joss@example.com");
            setSubject("C'est un test");
            setMessage("Un test pour le plaisir ");
        }
        loadCaptchaEnginge(6); 

        window.scrollTo(0, 0);
  
    }, []);

     // Prénom
    React.useEffect(() => {
        if(firstName.length > maxName - 1) {
            setFirstNameAlert(updateAlert(true, 'too long'))
        } else {
            setFirstNameAlert(reInitAlert())
        }
    }, [firstName]);

    // Nom
    React.useEffect(() => {
        if(lastName.length > maxName - 1) {
            setLastNameAlert(updateAlert(true, 'really bro ?'))
        } else {
            setLastNameAlert(reInitAlert())
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
        if(message.length > maxLength - 1) {
            setMessageAlert(updateAlert(true, 'Trop, trop, trop long !'));
        } else {
            setMessageAlert(reInitAlert());
        }
    }, [message]);

    const verifyCaptcha = () => {
        let user_captcha_value = document.getElementById('user_captcha_input').value;
        if (validateCaptcha(user_captcha_value, false) === true) {
            setCaptchaOk(true);
            setGlobalAlert(updateAlert(true, 'captcha verifié !', "Green"));
        } else {
            setCaptchaOk(false);
            setGlobalAlert(updateAlert(true, 'Non !'))
        }
    }

    const templateParams = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactType: contactType,
        subject: subject,
        message: message
    };

    const sendEmail = () => {
        if(verifyFields()) {
            emailjs.send(
                'service_oo4q3ja',
                'template_ts3dgfe', 
                templateParams, 
                'user_F9hDnNvI0w5QkE97hKg5n')
                .then((response) => {
                    if(response.ok) {
                        setIsLoading(true);
                    }
                    return true;
                }, (err) => {
                    setError(true);
                }
                ).then((ok) => {
                    if(ok) {
                        setSuccess(true);
                    }
                }
            );
        }
    }

    const verifyFields = () => {
        if(firstName === '' || lastName === '' || email === '' || contactType === ''
            || firstName === '' || subject === '' || message ==='') {
                setGlobalAlert(updateAlert(true, 'Tous les champs doivent être remplis !!!'));
                return false;
        } else {
            return true;
        }
    }
    
    const contactContext = {
        isLoading,
        success,
        error
    }

    return (

    <ContactContext.Provider value={contactContext}>
        <ContactManager >
            <Form className="ContactForm">
                <Container className="InfosContainer">
                    <Row>
                        <Col>
                            <Form.Group className="FirstName" >
                                <Form.Label>
                                    Prénom
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
                                <Alert 
                                    show={firstNameAlert.show}
                                    message={firstNameAlert.message}
                                    component="Contact" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="LastName" >
                                <Form.Label>
                                    Nom
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
                                <Alert                                     
                                    show={lastNameAlert.show}
                                    message={lastNameAlert.message}
                                    component="Contact" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="Email">
                                <Form.Label>
                                    @
                                </Form.Label>
                                <FormControl
                                    value={email} 
                                    onChange={e => setEmail(e.target.value)} />
                                <Alert 
                                    show={emailAlert.show}
                                    message={emailAlert.message}
                                    component="Contact" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="ContactType">
                                <Form.Label>Vous</Form.Label>
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
                </Container>
                <Form.Group className="Subject" >
                    <Form.Label>
                        Sujet
                    </Form.Label>
                    <FormControl 
                        value={subject} 
                        onChange={e => setSubject(e.target.value)}/>
                    <Alert 
                        show={subjectAlert.show}
                        message={subjectAlert.message}
                        component="Contact" />
                </Form.Group>

                <Form.Group className="Message" >
                    <Form.Label>
                        Message
                    </Form.Label>
                    <FormControl 
                        as="textarea" 
                        rows={4}
                        maxLength={maxLength}
                        value={message}
                        onChange={e => setMessage(e.target.value)} />
                    <Alert 
                        show={messageAlert.show}
                        message={messageAlert.message}
                        component="Contact" />
                </Form.Group>
            
                {captchaOk === false ?
                    <Container className="CaptchaContainer">
                        <LoadCanvasTemplate />
                        <InputGroup>
                            <FormControl id="user_captcha_input"
                                value={captchaText} 
                                onChange={e => setCaptchaText(e.target.value)} />
                        </InputGroup>
                        <Button 
                            className="DefaultButton" 
                            onClick={() => verifyCaptcha()} >
                            vérifier
                        </Button>
                    </Container>
                        :   <Button 
                                className="ContactButton DefaultButton"
                                onClick={(client) => sendEmail(client)}>Merci !
                            </Button>
                }

                <Alert 
                    show={globalAlert.show}
                    message={globalAlert.message}
                    color={globalAlert.color} />

            </Form>
        </ContactManager>
    </ContactContext.Provider>
    );
}

export default Contact; */