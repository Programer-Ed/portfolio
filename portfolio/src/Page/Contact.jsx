import React from 'react';
import Button from '../components/Button';
const Contact = () => {
  return ( 
    <section id="contact">
      <h1 className="font-bold text-center mb-2">Let's Build Something Amazing Together!</h1>
      <p className="mt-4 text-base font-medium text-center flex flex-col items-center">
          <span className="mb-1 antialiased">Have a project in mind or a tech challenge you're facing?</span> 
          <span className="mb-1">Whether it's crafting a seamless user experience,</span>
          <span className="mb-1"> optimizing performance or creating cutting-edge solutions,</span> 
          <span className="mb-9">I'm here to help! Reach out, and let’s turn your ideas into code.</span>
      </p>
      <Button />
    </section>
  );
}

export default Contact;