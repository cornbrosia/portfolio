import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ask79y6',      // ✅ Your Service ID
      'template_svq5ksj',     // ✅ Your Template ID
      form.current,
      'WZeyI5CtSEyG9WS0e'     // ✅ Your Public Key
    )
    .then((result) => {
      console.log(result.text);
      alert('✅ Message sent successfully!');
    }, (error) => {
      console.error(error.text);
      alert('❌ Something went wrong. Please try again.');
    });

    e.target.reset();  // Clears the form after successful submission
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            required
          ></textarea>
          <div className="text-center mt-6">
            <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-md shadow-lg hover:from-blue-600 hover:to-purple-600 transition"
            >
                Send Message
            </button>
          </div>

        </form>
      </div>
    </section>
  );
};

export default Contact;
