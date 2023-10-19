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
        <div className="flex justify-around md:flex-col md:items-center">
          <div className="flex flex-col text-white">
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">EDUCATION</h1>
              <h5 className="text-xl dmm lg:text-sm">
                Fontys University of Applied Sciences
              </h5>
              <h5 className="text-sm dmr lg:text-sm">2020-2024</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2.5, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">COURSES</h1>
              <h5 className="text-xl dmm lg:text-sm">Media Design </h5>
              <h5 className="text-sm dmr lg:text-sm">2020</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 3, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">SKILLS</h1>
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
          <div className="flex flex-col text-white md:w-[300px]">
            <motion.div
              className="pt-[2rem]"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">CONTACT</h1>
              <h5 className="text-xl dmm pt-2 lg:text-sm">+31 (0)6-18395035</h5>
              <h5 className="text-xl dmm pt-2 lg:text-sm">
                talexiuc10@gmail.com
              </h5>
              <h5 className="text-xl dmm pt-2 lg:text-sm">Eindhoven, NL</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 2.5, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">NATIONALITY</h1>
              <h5 className="text-xl dmm pt-2 lg:text-sm">Romanian</h5>
            </motion.div>
            <motion.div
              className="pt-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 3, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">PROJECTS</h1>
              <h5 className="text-xl dmm pt-2">Personal</h5>
              <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-2">
                Out of all the projects I have worked on during my ICT & Media
                Design studies, this one has been the most captivating to me. I
                believe the reason for my interest in this project is my passion
                for developing web applications. The freedom to choose my
                preferred software, libraries, and frameworks without any
                restrictions added to the excitement of the project. Upon
                reflecting on my past development work, I can confidently say
                that this project has significantly enhanced my front-end
                development skills.
              </h5>
              <div className="pt-2 md:pt-4">
                <h5 className="text-xl dmm">F1 Grandstands</h5>
                <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-2">
                  Part of a 4-member team, we had to create from scratch a
                  website for our client, Team Liquid. The idea of the project
                  was to make an innovative rewarding system that would make our
                  client’s fans more engaged. We ended up with an innovative
                  looking front-end, for which we used vanilla JavaScript that
                  was approved by our client, whereas the back-end was
                  implemented using Supabase. The wireframes and prototypes were
                  done using AdobeXD.
                </h5>
              </div>
              <div className="pt-2 md:pt-4 md:pb-10">
                <h5 className="text-xl dmm">Tuinexpress</h5>
                <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-1">
                  During my internship, I decided to work for Tuinexpress in
                  Nieuwkuijk. I am very thankful for the opportunity and I have
                  managed to prove myself as a valuable colleague for the
                  company. Valuable experiences that I took away from this
                  internship are: extracting stakeholders' requirements and
                  adjusting to their needs, better managing my time to
                  successfully meet the deadlines, having regular meetings with
                  my stakeholders to discuss my progress, and learning to adapt
                  to new technologies and tools.
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
