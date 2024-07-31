import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import "./testimonials.css";
import IMG1 from '../../assets/React_basics.png';
import IMG2 from '../../assets/Developing_frontend_apps.png';
import IMG3 from '../../assets/Advanced_react.png';
import IMG4 from '../../assets/NodeJS.png';
import IMG5 from '../../assets/Agile_Planning.png';
import IMG6 from '../../assets/software_processes_agile.png';
import IMG7 from '../../assets/pic1.png';
import IMG8 from '../../assets/Budgetting_and_schedueling.png';

const data1 = [
    {
        id: 1,
        image: IMG1,
        title: "React Basics by Coursera",
    },
    {
        id: 2,
        image: IMG2,
        title: "Developing Front-End Web Apps with React",
    },
    {
        id: 3,
        image: IMG3,
        title: "Advanced React",
    },
    {
        id: 4,
        image: IMG4,
        title: "Server side Javascript with NodeJS",
    },
    {
        id: 5,
        image: IMG5,
        title: "Agile Planning for Software Products",
    },
    {
        id: 6,
        image: IMG6,
        title: "Software Processes and Agile Practices",
    },
    {
        id: 7,
        image: IMG7,
        title: "Project Management Foundations and Initiation",
    },
    {
        id: 8,
        image: IMG8,
        title: "Budgeting and Scheduling Projects",
    },
]

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50% 0px' });

    const sectionVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delay: 0.2, duration: 0.8 } },
    };

    const itemVariants = {
        enter: { x: 100, opacity: 0 },
        center: { x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
        exit: { x: -100, opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
    };

    return (
        <motion.section
            id="testimonials"
            ref={ref}
            variants={sectionVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
        >
            <h5>My Certification</h5>
            <h2>Certificates</h2>
            <motion.div className="container testimonial__container">
                <Carousel
                    showArrows={false} 
                    infiniteLoop={true} 
                    showThumbs={false} 
                    showStatus={false} 
                    autoPlay={true} 
                    interval={3000}
                    swipeable={true}
                    centerMode={false}
                    renderItem={(item, { isSelected }) => (
                        <motion.div
                            initial="enter"
                            animate={isSelected ? "center" : "exit"}
                            exit="exit"
                            variants={itemVariants}
                        >
                            {item}
                        </motion.div>
                    )}
                >
                    {
                        data1.map(({ id, image, title }) => (
                            <div key={id} className='testimonial__item'>
                                <div className="testimonial__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                            </div>
                        ))
                    }
                </Carousel>
            </motion.div>
        </motion.section>
    )
}

export default Testimonials;
