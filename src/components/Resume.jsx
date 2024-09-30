import React from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';

import Hotjar from '@hotjar/browser';

const siteId = 5153122;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);

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
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Axure</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">HTML</h5>
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">CSS</h5>
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">JavaScript</h5>
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">React</h5>
                <h5 className="text-sm dmr">3 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">UX/UI</h5>
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">GIT</h5>
                <h5 className="text-sm dmr">4 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Unity</h5>
                <h5 className="text-sm dmr">1 year</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Blender</h5>
                <h5 className="text-sm dmr">2 years</h5>
              </div>
              <div className="flex w-[300px] justify-between pt-4">
                <h5 className="text-sm dmr">Vue.js</h5>
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
              className="pt-10 pb-10"
              initial={{ x: '-50vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'spring', duration: 3, bounce: 0.2 }}
            >
              <h1 className="text-5xl dmb lg:text-3xl">PROJECTS</h1>
              <h5 className="text-xl dmm pt-2">Shardfinders Interface</h5>
              <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-2">
                During my graduation internship I worked on a web application
                called Shardfinders Interface. Shardfinders is the name assigned
                for internal scripts that parse the information from scraped
                articles into key-value-based objects. Shardfinders Interface
                serves as an internal web application utilized exclusively
                within the company. It is utilized by scripters, who are
                employees tasked with script management to visualize the output
                of the same shardfinder on multiple articles. The application
                was constructed using Vue.js with Typescript and deployed within
                an established Kubernetes cluster. My task was to address the
                issue by improving it to a functional and updated web
                application, enhancing usability, and optimizing the overall
                UX/UI design
              </h5>
              <div className="pt-2 md:pt-4">
                <h5 className="text-xl dmm">Stress management</h5>
                <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-2">
                  During this project, my team and I tried to find a solution
                  that connects to the Moodmetric Ring and communicates stress
                  data to people suffering from PPS (Persistent physical
                  symptoms). This ring provides the wearer with real-time
                  insights as well as information on the progression of stress
                  levels over time. A challenge in this context was to provide
                  the user with more insights about their stress and stressors
                  in a more understandable way.
                </h5>
              </div>
              <div className="pt-2 md:pt-4">
                <h5 className="text-xl dmm">Personal</h5>
                <h5 className="text-sm dmr w-[650px] md:w-[350px] md:pt-2">
                  Out of all the projects I have worked on during my ICT & Media
                  Design studies, this one has been one of the most captivating
                  to me. I believe the reason for my interest in this project is
                  my passion for developing web applications. The freedom to
                  choose my preferred software, libraries, and frameworks
                  without any restrictions added to the excitement of the
                  project. Upon reflecting on my past development work, I can
                  confidently say that this project has enhanced my front-end
                  development skills
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
