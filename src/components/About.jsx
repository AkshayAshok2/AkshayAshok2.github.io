import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>

      <div className="mt-5 mb-9 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] leading-[30px]"
      >
        I'm a third-year undergraduate student studying computer science at the University of Florida. I was introduced to programming and computer science in high school via an online data science bootcamp, and I quickly grew to love problem-solving with code and data. When I graduated, I decided to follow this interest in college. I am currently pursuing a Bachelor of Science in Computer Science at the UF College of Engineering, along with a minor in Mathematics and a Certificate in AI Fundamentals.<br></br><br></br>I spend my free time learning about generative AI in medical imaging, computer vision & image processing, and app development. This website is a medium to showcase my skills and passion for CS! I hope you enjoy your stay, and I always appreciate feedback. Thank you!
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")