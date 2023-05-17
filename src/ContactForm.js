import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import puppy from './media/puppy.gif';

function ContactForm() {
    const [state, handleSubmit] = useForm("xbjebwyb");

    if(state.succeeded) {
        return (
        <div className="success-banner">
            <h1>Thanks for your message!</h1>
            <p>I'll get back to you as soon as possible.</p>
            <img src={puppy} alt="Puppy" />
        </div>
        );
    }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          className="form-input-field f-input"
          placeholder="Name"
          required
        />
        <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
        <input
          type="email"
          name="email"
          className="form-input-field f-input"
          placeholder="E-Mail"
          required
        />
        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
        <input
            type="text"
            name="pronouns"
            className="form-input-field f-input"
            placeholder="Pronouns e.g. he/him, she/her, they/them"
            required
        />
        <ValidationError 
        prefix="Pronouns" 
        field="pronouns"
        errors={state.errors}
      />
        <textarea
          name="message"
          className="text-area-form-input f-input" 
          placeholder="Your message here..."
          required
        />
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" className="primary-button a-button" disabled={state.submitting}>Get in touch</button>
    </form>
  );
}

export default ContactForm;
