import React, { useRef } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import RealisationButtons from './RealisationButtons';
import react from '../../pics/react.png';
import tailwind from '../../pics/tailwind.mp4';
import github from '../../pics/github.png';
import framer from '../../pics/framer.mp4';
import useScrollSnap from 'react-use-scroll-snap';
import BackButton from './BackButton';

function PRealisation() {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 1, delay: 1 });
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
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
      <div className="personal" ref={scrollRef} id="start">
        <BackButton />
        <div className="flex flex-col justify-around h-screen">
          <div className="flex justify-center">
            <motion.h1
              className="text-white text-7xl dmm"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              REALISATION
            </motion.h1>
          </div>
          <div className="flex justify-center">
            <motion.h1
              className="text-white text-xl dmr w-[700px]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              This section comprises the software, libraries, and frameworks
              utilized to accomplish the realization of the portfolio website.
              Since we had so much freedom, at the beginning of this project I
              realized I can use any frameworks/libraries I want to make the
              interactions and animations possible within this project.
            </motion.h1>
          </div>
          <div className="flex justify-center">
            <motion.div
              className="flex row justify-around w-[1000px]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              <RealisationButtons />
            </motion.div>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="react">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">react</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white text-xl dmr w-[700px]">
              after conducting my reasearch I realized React is the most
              suitable library to use for this project. The front end was
              constructed using functional components, which are simple
              JavaScript functions that serve as React Components. Functional
              components enhanced readability, reusability, and performance when
              compared to class components, which serve as a substitute for
              them.
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex row justify-around">
              <img src={react} className="rounded-lg shadow-2xl w-[800px]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="tailwind">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">tailwind</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white text-xl dmr w-[700px]">
              tailwind is a CSS framework. I chose to use Tailwind to enhance
              feature development and prevent clutter. Tailwind makes it quicker
              to write and maintain the code of the application. As shown in the
              video down below, I do not have to write custom CSS to style my
              application, instead, I can use utility classes to control the
              background color, width, height, margin, padding, and so on.
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex row justify-around">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-[800px]"
              >
                <source src={tailwind}></source>
              </video>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="github">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">github</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white text-xl dmr w-[700px]">
              GitHub serves as my version control. Even though I have used
              GitHub for almost 3 years now, in the past days I managed to mess
              up the repository, I forgot to add a gitignore file, therefore
              every time when I was developing my project and pushing them, the
              file size were too big than they should be. To fix that, I had to
              create a gitignore file where I had to ignore all the extra
              unnecessary files. Once that was done, the repository went back to
              normal and I could develop my project without anymore issues.
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex row justify-around w-[1000px]">
              <div className="flex row justify-around">
                <img src={github} className="rounded-lg shadow-2xl w-[800px]" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="framer">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">framer motion</h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-white text-xl dmr w-[700px]">
              after researching throughout the animation libraries, I came with
              a conclusion that “Framer motion” is suitable for my project.
              Framer motion was used to create animations and interactions
              within this project such as “progress bar” so the user knows where
              the end of the page is, “back to top” button so the user can click
              on it and instantly will be redirected to the top of the page and
              smooth animations once they open up a page.
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="flex row justify-around">
              {' '}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg shadow-2xl w-[800px]"
              >
                <source src={framer}></source>
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PRealisation;
