import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  IoIosArrowRoundForward,
  IoIosArrowRoundBack,
  IoIosHome,
} from 'react-icons/io';

function Tuinexpress() {
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
      <div className=""></div>
    </>
  );
}

export default Tuinexpress;
