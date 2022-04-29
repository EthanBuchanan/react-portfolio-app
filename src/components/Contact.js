// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mwkywnwj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <main>
    <section id="section-contact-me">
    <div className="section-title">
                    <h2>
                        Contact
                    </h2>
                </div>
                <div className="section-main contact-me">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text" 
        name="name"
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
    </section>
            
    </main>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;