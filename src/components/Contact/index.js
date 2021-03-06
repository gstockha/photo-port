import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
    function handleChange(e){
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) { //if errorMessage is an empty string
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    }
    console.log(formState);
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" defaultValue={name} onChange={handleChange} name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address:</label>
              <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea name="message" defaultValue={message} onChange={handleChange} rows="5"  />
                {errorMessage && ( //functionally the same as 'if errorMessage{...}'
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
                )}
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
          </form>
        </section>
    );
}

export default ContactForm;