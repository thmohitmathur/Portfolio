import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

const ease = [0.16, 1, 0.3, 1];

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('Message sent successfully.');
        form.current.reset();
      })
      .catch((err) => {
        console.error('[v0] EmailJS error:', err);
        setStatus('Something went wrong. Please try again.');
      });
  };

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="container">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.span>

        <motion.h2
          className="display-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
        >
          Get in Touch
        </motion.h2>

        <div className="contact-grid">
          <motion.div
            className="contact-details"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease }}
          >
            <div className="detail-item">
              <h4>Email</h4>
              <a href="mailto:thmohitmathur@gmail.com">thmohitmathur@gmail.com</a>
            </div>
            <div className="detail-item">
              <h4>GitHub</h4>
              <a href="https://github.com/thmohitmathur" target="_blank" rel="noreferrer">
                github.com/thmohitmathur
              </a>
            </div>
            <div className="detail-item">
              <h4>Availability</h4>
              <p>Open to freelance &amp; full-time opportunities.</p>
            </div>
          </motion.div>

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25, ease }}
          >
            <input type="text" name="from_name" placeholder="Your name" required />
            <input type="email" name="from_email" placeholder="Your email" required />
            <textarea name="message" placeholder="Your message" rows="5" required />
            <button type="submit" className="btn-send">
              Send Message
            </button>
            {status && <p className="status">{status}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
