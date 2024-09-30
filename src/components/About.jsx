import React, { useRef, useEffect } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import myself from '../pics/myself.svg';
import myselfstick from '../pics/myselfstick.svg';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useScrollSnap from 'react-use-scroll-snap';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import BackButton from './personal/BackButton';

import Hotjar from '@hotjar/browser';

const siteId = 5153122;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

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
      <motion.div className="aboutme overflow-x-hidden overflow-y-scroll">
        <div className="flex h-screen flex-col w-full justify-between pt-[10rem] pb-[10rem] pl-[5rem] pr-[5rem] dmr snap-center">
          <div className="flex w-full justify-between">
            <div className="">
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }}
              >
                CREATIVE
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
              >
                DEVELOPER
              </motion.h1>
              <motion.img
                className="ml-[20rem] lg:ml-[10rem] w-[300px] md:w-[200px] md:ml-[2rem]"
                src={myself}
                initial={{ y: '100vw' }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }}
              />
            </div>
            <motion.h1
              className="text-7xl text-white lg:text-3xl"
              initial={{ x: '-50vw', overflow: 'hidden' }}
              animate={{ x: 0, overflow: 'hidden' }}
              transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
            >
              HE/HIM
            </motion.h1>
            <motion.img
              className="absolute right-0 lg:w-[300px] md:w-[200px] md:top-[12rem]"
              src={myselfstick}
              initial={{ x: '-50vw', overflow: 'hidden' }}
              animate={{ x: 0, overflow: 'hidden' }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }}
            />
          </div>
          <div className="flex w-full justify-between">
            <div className="">
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }}
              >
                BASED IN
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
              >
                EINDHOVEN
              </motion.h1>
            </div>
            <div>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.2 }}
              >
                TUDOR
              </motion.h1>
              <motion.h1
                className="text-7xl text-white lg:text-3xl"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
              >
                ALEXIUC
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="bg-about-me dmr snap-center">
          <div></div>
          <div className="md:flex-col justify-between" id="section2">
            <motion.div className="">
              <motion.h1 className="text-white text-[3.8rem] p-[1rem] text-justify uppercase first-letter lg:text-[1.5rem] md:text-[1rem]">
                I am a hard-working newly graduated Media Design individual with
                a passion for creating web designs that prioritize delivering an
                optimal user experience. I have a keen eye for detail and
                strongly believe that user experience is essential in crafting
                effective and enjoyable interfaces. I really love biking and I
                have an affinity for fashion and tattoos. Also, I like to
                broaden my horizons by reading non-fiction books from
                biographies to science, I find great joy in learning and
                discovering new things throughout the written word
              </motion.h1>
            </motion.div>
            <div className="">
              <h1 className="text-white text-[1rem] text-justify uppercase first-letter lg:text-[0.7rem]"></h1>
            </div>
            <div className="">
              <h1 className="text-white text-[1rem] text-justify uppercase first-letter lg:text-[0.7rem]"></h1>
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
    </>
  );
}

export default About;
