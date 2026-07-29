import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus('Message sent successfully!');
      form.current.reset();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setStatus('Something went wrong. Please try again.');
    });
  };

  return (
    <section id="contact" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <motion.form ref={form} onSubmit={sendEmail}>
<input type="text" name="from_name" placeholder="Your Name" required />
<input type="email" name="from_email" placeholder="Your Email" required />
<textarea name="message" placeholder="Your Message" rows="5" required />
          <button type="submit" className="btn primary">Send Message</button>
          <p className="status">{status}</p>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;