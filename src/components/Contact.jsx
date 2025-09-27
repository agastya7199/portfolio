import { useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Modal from './Modal.jsx';
import classes from './Contact.module.css';

const EMAILJS_IDs = {
    serviceId: 'service_4sbrx9r',
    templateId: 'template_f06m41k',
    publicKey: 'EP4lsC0IPdN2yamYX',
};
export default function Contact() {
    const [formData, dispatchFormData] = useReducer(formDataReducer, {
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const formRef = useRef();
    const modalRef = useRef();

    function formDataReducer(state, action) {
        if (action.type === 'name') {
            state.name = action.payload.value;
        } else if (action.type === 'email') {
            state.email = action.payload.value;
        } else if (action.type === 'subject') {
            state.subject = action.payload.value;
        } else {
            state.message = action.payload.value;
        }
        // console.log(state);

        return state;
    }

    function sendEmail(event) {
        event.preventDefault();
        if (formData.name && formData.email && formData.subject && formData.message) {
            emailjs
                .send(EMAILJS_IDs.serviceId, EMAILJS_IDs.templateId, formData, {
                    publicKey: EMAILJS_IDs.publicKey,
                })
                .then(
                    (response) => {
                        console.log('SUCCESS!', response.status, response.text);
                        if (response.status === 200) {
                            modalRef.current.open();
                            formRef.current.reset();
                        }
                    },
                    (err) => {
                        console.log('FAILED...', err);
                    }
                );
        }
    }

    return (
        <>
            <Modal ref={modalRef} />
            <section>
                <div className={classes.contactHeadSection}>
                    <h1 className={classes.connectMeHead}>Connect with me :)</h1>
                    <p className={classes.connectMeContent}>
                        I’m here for inquiries & job opportunities! 💥
                    </p>
                </div>
                <div className={classes.contactContainer}>
                    <h1 className={classes.contactFormHeader}>Contact Me</h1>
                    <form ref={formRef} className={classes.contactForm} onSubmit={sendEmail}>
                        <ul className={classes.formList}>
                            <li className={classes.formItem}>
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    className={classes.inputBox}
                                    onChange={(event) =>
                                        dispatchFormData({
                                            type: 'name',
                                            payload: {
                                                value: event.target.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                            <li className={classes.formItem}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    className={classes.inputBox}
                                    onChange={(event) =>
                                        dispatchFormData({
                                            type: 'email',
                                            payload: {
                                                value: event.target.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                            <li className={classes.formItem}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    required
                                    className={classes.inputBox}
                                    onChange={(event) =>
                                        dispatchFormData({
                                            type: 'subject',
                                            payload: {
                                                value: event.target.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                            <li className={classes.formItem}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    className={classes.textBox}
                                    onChange={(event) =>
                                        dispatchFormData({
                                            type: 'message',
                                            payload: {
                                                value: event.target.value,
                                            },
                                        })
                                    }
                                />
                            </li>
                        </ul>

                        <button className={classes.submitButton}>Send</button>
                    </form>
                </div>
            </section>
        </>
    );
}
