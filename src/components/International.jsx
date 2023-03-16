import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosHome,
} from 'react-icons/io';

function International() {
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
        <Link to="/">
          <button className="text-3xl">
            <IoIosArrowRoundBack />
          </button>
        </Link>
      </motion.div>
      <div className="international flex flex-col justify-between">
        <div></div>
        <div className="flex justify-around">
          <motion.div
            className="sectionButton flex flex-col items-center"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
          >
            <h1 className="text-2xl dmr text-white">READING GUIDE</h1>
            <Link to="/">
              <button className="text-5xl text-white mt-3">
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="sectionButton flex flex-col items-center"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
          >
            <h1 className="text-2xl dmr text-white">ANALYSIS</h1>
            <Link to="/">
              <button className="text-5xl text-white mt-3">
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="sectionButton flex flex-col items-center"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
          >
            <h1 className="text-2xl dmr text-white">DESIGN</h1>
            <Link to="/">
              <button className="text-5xl text-white mt-3">
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="sectionButton flex flex-col items-center"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
          >
            <h1 className="text-2xl dmr text-white">REALISATION</h1>
            <Link to="/">
              <button className="text-5xl text-white mt-3">
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="sectionButton flex flex-col items-center"
            initial={{ x: '-50vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
          >
            <h1 className="text-2xl dmr text-white">RETROSPECTIVE</h1>
            <Link to="/">
              <button className="text-5xl text-white mt-3">
                <IoIosArrowRoundForward />
              </button>
            </Link>
          </motion.div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default International;
