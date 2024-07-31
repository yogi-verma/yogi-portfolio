import { useRef } from 'react';
import './experience.css';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50% 0px' });

    const animationVariants = {
        hidden: { y: '100%', opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <section id="experience" ref={ref}>
            <h5>What skills I have</h5>
            <h2>My Technical Skills</h2>

            <div className="container experience__container">
                <motion.div
                    className="experience__frontend"
                    variants={animationVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h3>Frontend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </motion.div>

                <motion.div
                    className="experience__backend"
                    variants={animationVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Node JS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Express JS</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MySQL</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PostgreSQL</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                    </div>
                </motion.div>

                <motion.div
                    className="experience__additional"
                    variants={animationVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    <h3>Additional Skills</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Git</h4>
                                <small className="text-light">Beginner</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>GitHub</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Photoshop</h4>
                                <small className="text-light">Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>Canva</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
