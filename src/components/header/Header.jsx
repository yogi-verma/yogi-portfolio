import { motion } from 'framer-motion';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
    return (
        <motion.header
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0 , opacity: 1 }}
            transition={{ duration: 1, type:"spring" }}
        >
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>
                    <Typewriter
                        words={[' Yogesh Verma', 'Web Developer', 'Fitness Freak']}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h1>
                <div>
                    <CTA />
                    <HeaderSocials />
                </div>
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>
                <a
                    href="#contact"
                    className='scroll__down'
                >
                    Scroll Down
                </a>
            </div>
        </motion.header>
    );
};



export default Header;