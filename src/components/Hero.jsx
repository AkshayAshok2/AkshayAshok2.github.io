import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import Tilt from 'react-parallax-tilt';
import profileImage from '../assets/headshot.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex flex-col flex-grow">
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Akshay</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Welcome to my portfolio website! {/*<br className="sm:block hidden" /> */}
          </p>
          {/* Links with icons */}
          <div className="flex mt-10">
            <a
              href="https://www.linkedin.com/in/akshayashok1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
            </a>
            <a
              href="https://github.com/akshayashok2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 ml-10"
            >
              <FontAwesomeIcon icon={faGithub} size="4x" />
            </a>
            <a
              href="/Akshay_Ashok_resume.pdf" // Replace with your resume file URL
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-300 ml-10"
            >
              <FontAwesomeIcon icon={faFilePdf} size="4x" />
            </a>
          </div>
        </div>

        <div className="hidden sm:flex justify-center items-center transition-width duration-300"> {/* Show the image only on desktop (hidden on mobile) */}
          <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} glare>
            <div className="rotating-image">
              <img
                src={profileImage}
                alt="Profile"
                className="w-72 h-auto rounded-b-[20%] rounded-t-[20%] border-4 border-[#915eff]"
              />
            </div>
          </Tilt>
        </div>
      </div>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1">
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero