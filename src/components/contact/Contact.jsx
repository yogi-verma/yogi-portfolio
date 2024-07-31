import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { FaInstagram } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import toast, { Toaster } from 'react-hot-toast';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const { ref, inView } = useInView({ triggerOnce: true });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start({ x: 0, opacity: 1 });
        } else {
            controls.start({ x: -100, opacity: 0 });
        }
    }, [inView, controls]);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true); // Start loading

        emailjs
            .sendForm('service_tjcbns5', 'template_d25ijnp', form.current, {
                publicKey: '3p5bfZi5XpAWtIm6e',
            })
            .then(() => {
                toast.success('Email sent successfully');
                e.target.reset();
                setLoading(false); // End loading
            })
            .catch((error) => {
                toast.error('Error sending email: ' + error.text);
                setLoading(false); // End loading
            });
    };

    return (
        <motion.section
            id="contact"
            ref={ref}
            initial={{ x: -100, opacity: 0 }}
            animate={controls}
            transition={{ duration: 0.8 }}
        >
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <FaInstagram className='contact__option-icon'/>
                        <h4>Instagram</h4>
                        <a href="https://m.instagram.com/its_yogiiii_22" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>Whatsapp</h4>
                        <a href="https://api.whatsapp.com/send?phone=+919817289345" target="_blank" rel="noopener noreferrer">Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? (
                            <span className="loading-spinner"></span>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>

                <Toaster 
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
        </motion.section>
    );
};

export default Contact;
