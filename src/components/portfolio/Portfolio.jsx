import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './portfolio.css';
import IMG1 from '../../assets/homyz3.png';
import IMG2 from '../../assets/Edusity.png';
import IMG3 from '../../assets/weather.png';
import IMG4 from '../../assets/currency.png';
import IMG5 from '../../assets/creative.png';
import IMG7 from '../../assets/chat-app.png';
import IMG6 from "../../assets/port.png"

const data = [
    {
        id: 1,
        image: IMG7,
        title: "Real Time Chat App Using ReactJs & NodeJs",
        github: "https://github.com/yogi-verma/mern-chat-app",
        demo: "https://mern-chat-app-vnb6.onrender.com",
    },
    {
        id: 2,
        image: IMG5,
        title: "CREATIVE Wing Using Javascript and Bootstrap",
        github: "https://github.com/yogi-verma/creative-wing.in",
        demo: "https://yogi-verma.github.io/creative-wing.in/",
    },
    {
        id: 3,
        image: IMG1,
        title: "Fully Responsive Real Estate Website Using ReactJs",
        github: "https://github.com/yogi-verma/homyz",
        demo: "https://homyz-ashy.vercel.app/",
    },
    {
        id: 4,
        image: IMG2,
        title: "University Website Called EduSity Using ReactJs",
        github: "https://github.com/yogi-verma/Edusity",
        demo: "https://edusity-vert.vercel.app/",
    },
    {
        id: 5,
        image: IMG6,
        title: "Personal Portfolio Website Using HTML, CSS & JavaScript",
        github: "https://github.com/yogi-verma/portfolio",
        demo: "https://yogi-verma.github.io/portfolio/",
    },
    {
        id: 6,
        image: IMG4,
        title: "Currency Converter Using HTML, CSS & JavaScript",
        github: "https://github.com/yogi-verma/Currency_Converter",
        demo: "https://yogi-verma.github.io/Currency_Converter/",
    },
]

const Portfolio = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50% 0px' });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <motion.section
            id="portfolio"
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <motion.div className="container portfolio__container" variants={containerVariants}>
                {data.map(({ id, image, title, github, demo }) => (
                    <motion.article key={id} className='portfolio__item' variants={itemVariants}>
                        <div className="portfolio__item-image">
                            <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                            <a href={demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </motion.section>
    );
}

export default Portfolio;
