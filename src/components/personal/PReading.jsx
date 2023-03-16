import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import ReadingButtons from './ReadingButtons';
import useScrollSnap from 'react-use-scroll-snap';
import BackButton from './BackButton';

function PReading() {
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
          <motion.h1
            className="text-5xl text-white dmb flex justify-center"
            initial={{ y: '-50vw' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
          >
            READING GUIDE
          </motion.h1>
          <motion.div
            className="flex w-full justify-around"
            initial={{ y: '-50vw' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', duration: 2, bounce: 0.7 }}
          >
            <ReadingButtons />
          </motion.div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="assignment">
          <div>
            <h1 className="text-3xl text-white dmm ml-[5rem]">
              THE ASSIGNMENT
            </h1>
            <div className="text-xl text-white dmr ml-[5rem] mr-[5rem] mt-[2rem]">
              the main goal of this assignment is to create a portfolio website
              where the users can see my progress throughout the semester. The
              final product will result into an intuitive and well structured
              website. The content displayed on the website will be products
              done individually. Moreover, some of the requirements for this
              project are: a clear classification of the documents and (sub)
              products, interactive and user-friendly website and provide clear
              names for documents and (sub) products.
            </div>
          </div>
          <div>
            <div className="mb-[2rem]">
              <h1 className="text-3xl text-white dmm ml-[5rem]">
                RESEARCH QUESTIONS
              </h1>
            </div>
            <h1 className="text-2xl text-white dmm ml-[5rem] mt-[2rem]">
              MAIN QUESTION
            </h1>
            <div className="text-xl text-white dmr ml-[5rem] mt-[2rem]">
              how can I design and build a portfolio website which will target
              my audience?
            </div>
            <div className="mt-[3rem]">
              <h1 className="text-2xl text-white dmm ml-[5rem] mt-[2rem]">
                SUB RESEARCH QUESTIONS
              </h1>
              <div className="text-xl text-white dmr ml-[5rem] mt-[2rem]">
                how can I make my portfolio website intuitive?
              </div>
              <div className="text-xl text-white dmr ml-[5rem] mt-[2rem]">
                what are the optimal libraries/frameworks to use when coding?
              </div>
              <div className="text-xl text-white dmr ml-[5rem] mt-[2rem]">
                what are the current design trends useful for my portfolio?
              </div>
              <div className="text-xl text-white dmr ml-[5rem] mt-[2rem]">
                how can I make the portfolio website responsive on every screen
                size?
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="approach">
          <h1 className="text-3xl text-white dmm ml-[5rem]">APPROACH</h1>
          <div className="text-xl text-white dmr ml-[5rem] mr-[5rem] mt-[2rem]">
            <h1>
              The approach for this project is agile. I attended weekly meetings
              to discuss my progress and decide upon future tasks.
            </h1>
            <h1 className="mt-[2rem]">
              Phase 1 - Complete the project plan. (Week 1)
            </h1>
            <h1 className="mt-[2rem]">
              Phase 2 - Research and design. (Week 2)
            </h1>
            <h1 className="mt-[2rem]">
              Phase 3 - Build the web application. (Week 3)
            </h1>
            <h1 className="mt-[2rem]">
              Phase 4 - Test it and adjust the changes. (Week 4)
            </h1>
            <h1 className="mt-[2rem]">
              I started by setting up a{' '}
              <a
                href="https://docdro.id/pkgDcsu"
                target="_blank"
                className="text-black underline dmb"
              >
                project plan
              </a>{' '}
              so that I have a clear guideline on how the project should follow
              up. Next, I started doing research about{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/panalysis"
                target="_blank"
                className="text-black underline dmb"
              >
                my target audience and my sub questions
              </a>
              . To find the answers to these questions I used different CMD
              methods. Moving forward, after completing my research I started
              working on{' '}
              <a
                href="https://www.figma.com/file/zSlpf6G6Az6BOveIhPbbLe/Untitled?node-id=0%3A1&t=yRjVOTSzyDtsz1sw-1"
                target="_blank"
                className="text-black underline dmb"
              >
                my prototypes
              </a>{' '}
              using Figma and{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/pdesign"
                target="_blank"
                className="text-black underline dmb"
              >
                tested
              </a>{' '}
              them to gather insights about the workflow. Lastly, after
              finishing the prototypes I started building up{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/"
                target="_blank"
                className="text-black underline dmb"
              >
                the portfolio
              </a>{' '}
              using the technologies mentioned in the research section and test
              it out once again to see if it meets the goal.
            </h1>
          </div>
        </div>

        <div
          className="flex flex-col justify-around h-screen"
          id="implementation"
        >
          <h1 className="text-3xl text-white dmm ml-[5rem]">IMPLEMENTATION</h1>
          <div className="text-xl text-white dmr ml-[5rem] mr-[5rem] mt-[2rem]">
            <h1 className="mt-[2rem]">
              I have divided the project’s structure in 6 different buttons.
              There is a reference for each button to a different page where the
              user can see its content which can be found{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/"
                target="_blank"
                className="text-black underline dmb"
              >
                here.
              </a>
            </h1>
            <h1 className="mt-[2rem]">
              <a
                href="https://tudorportfoliosem6.vercel.app/about"
                target="_blank"
                className="text-black underline dmb"
              >
                About me
              </a>{' '}
              and{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/resume"
                target="_blank"
                className="text-black underline dmb"
              >
                My resume
              </a>{' '}
              sections are designated specifically for my target audience. In
              the About me section I want to elaborate about myself and what my
              interests are, whereas in the My resume section my skills are
              displayed.
            </h1>
            <h1 className="mt-[2rem]">
              Moving forward, the structure for{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/personal"
                target="_blank"
                className="text-black underline dmb"
              >
                Individual Project
              </a>
              ,{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/international"
                target="_blank"
                className="text-black underline dmb"
              >
                International project
              </a>{' '}
              and{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/group"
                target="_blank"
                className="text-black underline dmb"
              >
                Group project
              </a>{' '}
              page is the same, but the content is different, all three pages
              have a justification of deliverables and to go more in-depth there
              is a research material section where the user can see all the
              relevant products as evidence.
            </h1>
            <h1 className="mt-[2rem]">
              Last but not least, the Reading guide structure will be done once
              the Individual project, International project and Group project
              structure is finished. The Reading guide is serving in two ways,
              one as a{' '}
              <a
                href="https://docdro.id/7eOrTxl"
                target="_blank"
                className="text-black underline dmb"
              >
                PDF document
              </a>{' '}
              and one as{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/preading"
                target="_blank"
                className="text-black underline dmb"
              >
                digital
              </a>{' '}
              on the actual website so the user can interact with the content.
            </h1>
            <h1 className="mt-[2rem]">
              Once the web application was done, I moved on the{' '}
              <a
                href="https://tudorportfoliosem6.vercel.app/pdesign"
                target="_blank"
                className="text-black underline dmb"
              >
                testing part
              </a>
              which I tested the workflow of the website to gather data about
              its functionality and find out if it is intuitive.
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="results">
          <h1 className="text-3xl text-white dmm ml-[5rem]">RESULTS</h1>
          <div className="text-xl text-white dmr ml-[5rem] mr-[5rem]">
            <h1 className="">
              The whole project resulted in an interactive and intuitive
              portfolio website which will target my audience. It has some cool
              features due to the library and frameworks I made usage of and
              also provides a better UX experience for the users and makes it
              more appealing. Lastly, I am extremely proud of the end product
              and that this project has been successful.
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="reflection">
          <h1 className="text-3xl text-white dmm ml-[5rem]">REFLECTION</h1>
          <h1 className="ml-[5rem] mr-[5rem] dmr text-white text-xl">
            Out of all the projects I have worked on during my ICT & Media
            Design studies, this one has been the most captivating to me. I
            believe the reason for my interest in this project is my passion for
            developing web applications. The freedom to choose my preferred
            software, libraries, and frameworks without any restrictions added
            to the excitement of the project. Upon reflecting on my past
            development work, I can confidently say that this project has
            significantly enhanced my front-end development skills.
          </h1>
          <div className="ml-[5rem] mr-[5rem]">
            <h1 className="text-3xl text-white dmm">what went good?</h1>
            <h1 className="mt-[2rem] text-xl text-white dmr">
              The whole project resulted in an interactive and intuitive
              portfolio website which will target my audience. It has some cool
              features due to the library and frameworks I made usage of and
              also provides a better UX experience for the users and makes it
              more appealing. Lastly, I am extremely proud of the end product
              and that this project has been successful.
            </h1>
          </div>
          <div className=" dmr ml-[5rem] mr-[5rem]">
            <h1 className="text-3xl text-white dmm">what could go better?</h1>
            <h1 className="mt-[2rem] text-xl text-white dmr">
              The whole project resulted in an interactive and intuitive
              portfolio website which will target my audience. It has some cool
              features due to the library and frameworks I made usage of and
              also provides a better UX experience for the users and makes it
              more appealing. Lastly, I am extremely proud of the end product
              and that this project has been successful.
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-around h-screen" id="evidence">
          <h1 className="text-3xl text-white dmm ml-[5rem]">EVIDENCE</h1>
          <div className="flex flex-col justify-around h-[600px]">
            <div className="flex row justify-around">
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo1</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  in the{' '}
                  <a
                    href="https://tudorportfoliosem6.vercel.app/panalysis"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    analysis section
                  </a>{' '}
                  there is a clear definition of who the user is. Moreover,
                  there is research conducted for the main goal of this
                  assignment reflected on the main and sub questions of this
                  analysis.
                </h1>
              </div>
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo2</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  in the{' '}
                  <a
                    href="https://tudorportfoliosem6.vercel.app/pdesign"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    design section
                  </a>{' '}
                  there is an overview of the execution and validation process.
                </h1>
              </div>
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo3</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  in the{' '}
                  <a
                    href="https://tudorportfoliosem6.vercel.app/prealisation"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    realization section
                  </a>{' '}
                  there is an understanding of how I built the desired product.
                </h1>
              </div>
            </div>
            <div className="flex row justify-around">
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo4</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  in the{' '}
                  <a
                    href="https://docdro.id/pkgDcsu"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    project plan
                  </a>{' '}
                  there is a clear definition of the project goal, research
                  questions and methods, approach and planning, and project
                  organization.
                </h1>
              </div>
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo5</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  the{' '}
                  <a
                    href="https://tudorportfoliosem6.vercel.app/panalysis"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    analysis section
                  </a>{' '}
                  showcases both the primary question and the subsidiary
                  questions, along with my detailed elaboration on each of them.
                </h1>
              </div>
              <div className="w-[250px] h-[250px] border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
                <h1 className="text-5xl text-white dmm">lo6</h1>
                <h1 className="text-sm text-white dmr mt-[2rem] pl-[1rem] pr-[1rem]">
                  in the{' '}
                  <a
                    href="https://tudorportfoliosem6.vercel.app/pretrospective"
                    target="_blank"
                    className="text-black underline dmb"
                  >
                    retrospective section
                  </a>{' '}
                  there is an understanding of how my professional skills
                  evolved during this project.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PReading;
