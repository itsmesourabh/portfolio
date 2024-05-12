import React from 'react';
import { motion } from 'framer-motion';
import "./services.scss";

const skills = ['HTML', 'CSS', 'JavaScript', 'ReactJS', 'MongoDB' ,'SQL','Figma','SementicUI','Tailwind Css','NextJS','Github'];

const Services = () => {
  return (
    <div className='services'>
      <h2>Technologies and FrameWorks</h2>
      <div className='skill-buttons'>
        {/* Map over the skills array and render each skill inside a button */}
        {skills.map((skill, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
            transition={{ duration: 0.3 }}
            style={{ width: '200px', height: '60px', margin: '5px' }} // Adjust width, height, and margin
          >
            {skill}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Services;
