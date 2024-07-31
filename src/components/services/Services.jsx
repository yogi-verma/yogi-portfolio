import React, { useRef } from 'react';
import './services.css';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { BiCheck } from 'react-icons/bi';
import { useInView } from 'react-intersection-observer'; // Import useInView

const Services = () => {
    // Create a ref to attach to the section element
    const sectionRef = useRef(null);

    // Use the intersection observer hook
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
        // You can pass custom options here if needed
    });

    // Attach ref to the section element
    React.useEffect(() => {
        if (sectionRef.current) {
            ref(sectionRef.current);
        }
    }, [ref]);

    return (
        <motion.section
            id="services"
            ref={sectionRef} // Attach ref here
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h5>What I Have Done</h5>
            <h2>Education</h2>

            <div className="container services__container">
                <motion.article
                    className="service"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, ease: 'easeOut'}}
                >
                    <div className="service__head">
                        <h3>Btech</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Lovely Professional University</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>7.61 CGPA</p>
                        </li>
                    </ul>
                </motion.article>

                <motion.article
                    className="service"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="service__head">
                        <h3>XII-Standard</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Rao Phalad Singh sec. sr. school</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>85 %</p>
                        </li>
                    </ul>
                </motion.article>

                <motion.article
                    className="service"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
                    transition={{ duration: 0.6, ease: 'easeOut'}}
                >
                    <div className="service__head">
                        <h3>X-Standard</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Rao Phalad Singh sec. sr. school</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>9.6 CGPA</p>
                        </li>
                    </ul>
                </motion.article>
            </div>
        </motion.section>
    );
};

export default Services;
