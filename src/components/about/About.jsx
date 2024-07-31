import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { VscFolder } from 'react-icons/vsc';
import { GrCertificate } from 'react-icons/gr';
import { SiCodingninjas } from 'react-icons/si';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50% 0px' });

    return (
        <section id="about" ref={ref}>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <motion.div
                className="container about__container"
                initial={{ y: '7rem', opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
            >
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="About Image" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <motion.article 
                            className="about__card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                        >
                            <a href="#portfolio">
                            <VscFolder className="about__icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                            </a>
                        </motion.article>
                        
                        <motion.article
                            className="about__card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                        >
                            <a href="#testimonials"> 
                            <GrCertificate className="about__icon" />
                            <h5>Certificates</h5>
                            <small>20+ Overall</small>
                            </a>
                        </motion.article>
                        <motion.article
                            className="about__card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                        >
                            <a href="#coding">
                            <SiCodingninjas className="about__icon" />
                            <h5>Coding</h5>
                            <small>700+ Questions Solved</small>
                            </a>
                        </motion.article>

                    </div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5}}
                    >
                        I am a final year engineering student at Lovely Professional University in Punjab, I am deeply passionate about pursuing a career as a full-stack developer. I am eager to absorb all the knowledge and skills I can in this dynamic field and apply them to real-world projects. In addition, I value teamwork and am highly sociable, making me a strong asset to any team.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        className="btn btn-primary"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
                    >
                        Let's Talk
                    </motion.a>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
