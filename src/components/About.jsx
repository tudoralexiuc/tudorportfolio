import React, { useRef, useEffect } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import myself from '../pics/myself.svg';
import myselfstick from '../pics/myselfstick.svg';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useScrollSnap from 'react-use-scroll-snap';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import BackButton from './personal/BackButton';

function About() {
  return (
    <>
      <div className="noise"></div>
      <motion.div className="homeButton">
        <Link to="/">
          <button className="text-3xl">
            <IoIosHome />
          </button>
        </Link>
      </motion.div>
      <motion.div className="backButton">
        <Link to="/">
          <button className="text-3xl">
            <IoIosArrowRoundBack />
          </button>
        </Link>
      </motion.div>
      <motion.div className="aboutme">
        <div className="flex h-screen flex-col w-full justify-between pt-[10rem] pb-[10rem] pl-[5rem] pr-[5rem] dmr snap-center">
          <div className="flex w-full justify-between">
            <div className="">
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                CREATIVE
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
              >
                DEVELOPER
              </motion.h1>
              <motion.img
                className="ml-[20rem] lg:ml-[10rem] w-[300px]"
                src={myself}
                initial={{ y: '100vw' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
              />
            </div>
            <motion.h1
              className="text-7xl text-white lg:text-3xl"
              initial={{ x: '-50vw', overflow: 'hidden' }}
              animate={{ x: 0, overflow: 'hidden' }}
              transition={{ type: 'spring', duration: 2, bounce: 0 }}
            >
              HE/HIM
            </motion.h1>
            <motion.img
              className="absolute right-0 lg:w-[300px]"
              src={myselfstick}
              initial={{ x: '-50vw', overflow: 'hidden' }}
              animate={{ x: 0, overflow: 'hidden' }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0 }}
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="">
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0 }}
              >
                BASED IN
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0 }}
              >
                EINDHOVEN
              </motion.h1>
            </div>
            <div>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.4 }}
              >
                TUDOR
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.7 }}
              >
                ALEXIUC
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="bg-about-me h-screen dmr flex flex-col justify-between snap-center">
          <div></div>
          <div
            className="flex row justify-around items-center md:flex-col justify-between h-screen"
            id="section2"
          >
            <motion.div className="w-[300px] border-4 p-4">
              <motion.h1 className="text-white text-[1rem] text-justify uppercase first-letter lg:text-[0.7rem]">
                I am a hard-working third year Media Design student that loves
                creating web designs, while providing the best experience for
                users. I care about the details and consider the user experience
                to be crucial in creating effective and enjoyable interfaces.
              </motion.h1>
            </motion.div>
            <div className="border-4 p-4">
              <h1 className="text-white text-[1rem] text-justify uppercase first-letter lg:text-[0.7rem]">
                I really love biking and I have an affinity for fashion and
                tattoos.
              </h1>
            </div>
            <div className="w-[300px] border-4 p-4">
              <h1 className="text-white text-[1rem] text-justify uppercase first-letter lg:text-[0.7rem]">
                When I'm not writing code, I like to broaden my horizons by
                reading non-fiction books. From biographies to science, I find
                great joy in learning and discovering new things throughout the
                written word
              </h1>
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
