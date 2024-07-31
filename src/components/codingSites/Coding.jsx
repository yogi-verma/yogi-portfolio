import React from 'react';
import './Coding.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import your logo images
import Logo1 from '../../assets/logo1.png';
import Logo2 from '../../assets/logo2.jpeg';
import Logo3 from '../../assets/logo3.jpeg';
import Logo4 from '../../assets/logo4.jpeg';
import Logo5 from '../../assets/logo5.jpeg';
import Logo6 from '../../assets/logo6.jpeg';


const Coding = () => {
  const platforms = [
    { id: 1, logo: Logo1, url: 'https://leetcode.com/u/yogi-verma/', name: 'Leetcode' },
    { id: 2, logo: Logo2, url: 'https://www.naukri.com/code360/profile/YogiVerma', name: 'Coding Ninjas' },
    { id: 3, logo: Logo3, url: 'https://www.hackerrank.com/profile/yogeshvermapys11', name: 'HackerRank' },
    { id: 4, logo: Logo4, url: 'https://www.geeksforgeeks.org/user/yogeshvermapys143/', name: 'GFG' },
    { id: 5, logo: Logo5, url: 'https://www.codechef.com/users/yogeshvermapys', name: 'CodeChef' },
    { id: 6, logo: Logo6, url: 'https://codolio.com/profile/yogi-verma', name: 'Codeolio' },
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      });
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="coding"
      className="coding-section"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <h5>Eat, Sleep, Coding, Repeat...</h5>
      <h2>My Coding Journey</h2>
      <div className="container coding-container">
        {platforms.map(({ id, logo, url, name }) => (
          <motion.a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="coding-item"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={logo} alt={name} className="coding-logo" />
            <p>{name}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Coding;
