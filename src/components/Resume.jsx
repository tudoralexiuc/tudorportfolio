import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';

function Resume() {
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
      <motion.div className="resume flex flex-col justify-center">
        <div></div>
        <div className="flex justify-around">
          <div className="flex flex-col text-white">
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">EDUCATION</h1>
              <h5 className="text-xl dmm">
                Fontys University of Applied Sciences
              </h5>
              <h5 className="text-sm dmr">2020-2024</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2.5, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">COURSES</h1>
              <h5 className="text-xl dmm">Media Design </h5>
              <h5 className="text-sm dmr">2020</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 3, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">SKILLS</h1>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Adobe XD</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Figma</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Axure</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">HTML</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">CSS</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">JavaScript</h5>
                <h5 className="text-sm dmr">2 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">React</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">UX/UI</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">GIT</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Unity</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Blender</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col text-white">
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">CONTACT</h1>
              <h5 className="text-xl dmm pt-2">+31 (0)6-18395035</h5>
              <h5 className="text-xl dmm pt-2">talexiuc10@gmail.com</h5>
              <h5 className="text-xl dmm pt-2">Eindhoven, NL</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2.5, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">NATIONALITY</h1>
              <h5 className="text-xl dmm pt-2">Romanian</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 3, bounce: 0.5 }}
            >
              <h1 className="text-5xl dmb">PROJECTS</h1>
              <h5 className="text-xl dmm pt-2">F1 Grandmaster</h5>
              <h5 className="text-sm dmr w-[650px]">
                Part of a 4-member team, we had to create from scratch a website
                for our client, Team Liquid. The idea of the project was to make
                an innovative rewarding system that would make our client’s fans
                more engaged. We ended up with an innovative looking front-end,
                for which we used vanilla JavaScript that was approved by our
                client, whereas the back-end was implemented using Supabase. The
                wireframes and prototypes were done using AdobeXD.
              </h5>
              <div className="pt-2">
                <h5 className="text-xl dmm">Sauna Koning</h5>
                <h5 className="text-sm dmr w-[650px]">
                  Part of a 4-member team, we had to redesign and build a new
                  website for Sauna Koning. Our client was Webber and the main
                  goal was to focus on UI and a much better UX. Our product,
                  which had an unique and responsive design, was created using
                  vanilla JavaScript, fulfilled the client expectations.
                  Wireframes and prototypes were also done using Adobe XD.
                </h5>
              </div>
              <div className="pt-2">
                <h5 className="text-xl dmm">Tuinexpress</h5>
                <h5 className="text-sm dmr w-[650px]">
                  Part of a 4-member team, we had to redesign and build a new
                  website for Sauna Koning. Our client was Webber and the main
                  goal was to focus on UI and a much better UX. Our product,
                  which had an unique and responsive design, was created using
                  vanilla JavaScript, fulfilled the client expectations.
                  Wireframes and prototypes were also done using Adobe XD.
                </h5>
              </div>
            </motion.div>
          </div>
        </div>
        <div></div>
      </motion.div>
    </>
  );
}

export default Resume;
