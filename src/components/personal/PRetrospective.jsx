import React, { useRef } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';

function PRetrospective() {
  return (
    <>
      <motion.div className="homeButton">
        <Link to="/">
          <button className="text-3xl">
            <IoIosHome />
          </button>
        </Link>
      </motion.div>
      <motion.div className="backButton">
        <Link to="/personal">
          <button className="text-3xl">
            <IoIosArrowRoundBack />
          </button>
        </Link>
      </motion.div>
      <div className="personal">
        <div className="flex flex-col h-screen justify-around">
          <div></div>
          <div className="flex flex-col ml-[5rem] mr-[5rem]">
            <motion.h1
              className="text-5xl dmr text-white dmb"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              REFLECTION
            </motion.h1>
            <motion.h1
              className="text-xl dmr text-white mt-[2rem]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              Out of all the projects I have worked on during my ICT & Media
              Design studies, this one has been the most captivating to me. I
              believe the reason for my interest in this project is my passion
              for developing web applications. The freedom to choose my
              preferred software, libraries, and frameworks without any
              restrictions added to the excitement of the project. Upon
              reflecting on my past development work, I can confidently say that
              this project has significantly enhanced my front-end development
              skills.
            </motion.h1>
          </div>

          <div className="flex flex-col ml-[5rem] mr-[5rem]">
            <motion.h1
              className="text-3xl dmr text-white dmb"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              what went good?
            </motion.h1>
            <motion.h1
              className="text-xl dmr text-white mt-[2rem]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              Personally, I take great pride in the end product of my
              portfolio.. The final product has turned out exactly how I wanted
              to be which makes me satisfied with the results. Finally, I am
              very proud in being able to successfully incorporate a variety of
              animations and interactions into this project, especially since I
              had limited prior experience.
            </motion.h1>
          </div>

          <div className="flex flex-col ml-[5rem] mr-[5rem]">
            <motion.h1
              className="text-3xl dmr text-white dmb"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              what could go better?
            </motion.h1>
            <motion.h1
              className="text-xl dmr text-white mt-[2rem]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              While reflecting on the project, I realized that the research
              aspect could have been improved as I feel that I could have
              invested more effort in that area. As my primary focus is on
              front-end development, I plan to balance my research efforts too.
              Additionally, I will adjust my meeting schedule with my mentor
              from the end of the week to the beginning of the week to better
              organize and allocate my tasks.
            </motion.h1>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default PRetrospective;
