import React, { useRef } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import SubQuestions from './SubQuestions';
import ResearchAnalysis from './ResearchAnalysis';
import MainQuestion from './MainQuestion';
import literature from '../../pics/personal/literature.svg';
import available from '../../pics/personal/available.svg';
import expert from '../../pics/personal/expert.svg';
import peer from '../../pics/personal/peer.svg';
import practices from '../../pics/personal/practices.svg';
import prototyping from '../../pics/personal/prototyping.svg';
import usability from '../../pics/personal/usability.svg';
import useScrollSnap from 'react-use-scroll-snap';
import researchPDF from '../../pics/userresearch.pdf';
import firstL from '../../pics/1stL.pdf';
import firstU from '../../pics/1stU.pdf';
import thirdrdL from '../../pics/3rdL.pdf';
import thirdrdA from '../../pics/3rdA.pdf';
import secondL from '../../pics/2ndL.pdf';
import secondP from '../../pics/2ndP.pdf';
import fourthL from '../../pics/4thL.pdf';
import fourthP from '../../pics/4thP.pdf';
import fourthPE from '../../pics/4thP&E.pdf';
import BackButton from './BackButton';

function PAnalysis() {
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
        <div className="flex flex-col justify-between h-screen">
          <div></div>
          <div className="flex flex-col justify-between items-center h-[600px]">
            <div className="">
              <motion.h1
                className="text-white text-7xl dmm"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                ANALYSIS
              </motion.h1>
            </div>
            <motion.div
              className="flex row justify-around w-[900px]"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              <ResearchAnalysis />
            </motion.div>
            <motion.div
              className="flex row justify-around w-[900px]"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              <SubQuestions />
            </motion.div>
            <motion.div
              className="flex row justify-around w-[900px]"
              initial={{ y: '-50vw' }}
              animate={{ y: 0 }}
              transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
            >
              <MainQuestion />
            </motion.div>
          </div>
          <div></div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="userResearch"
        >
          <div className="text-white text-3xl dmb">user research</div>
          <div className="flex row justify-around w-[700px]">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">literature study</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={researchPDF} target="_blank">
                  <button>
                    <img
                      src={literature}
                      className=" w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-white text-3xl dmb">conclusion</h1>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              Having a strong portfolio is essential for myself to showcase my
              skills and expertise. However, it's equally important to create a
              personal connection with potential employers and allow them to get
              to know the person behind the work. By focusing on creating an
              interactive, responsive, and accessible portfolio that highlights
              my passion and skills, I can stand out in the competitive job
              market and demonstrate my value.
            </h1>
          </div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="researchQ1"
        >
          <div className="text-white text-3xl dmb">
            what are the current design trends useful for my portfolio?
          </div>
          <div className="flex row justify-around w-[700px]">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">literature study</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={thirdrdL} target="_blank">
                  <button>
                    <img
                      src={literature}
                      className=" w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">
                available product analysis
              </h1>
              <div className="sectionButton mt-[1rem]">
                <a href={thirdrdA} target="_blank">
                  <button>
                    <img src={available} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-white text-3xl dmb">conclusion</h1>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              In order to produce designs that are aesthetically attractive,
              it's crucial to keep current with the most recent trends. After
              researching various design trends, I have chosen two trends that I
              believe will fit my design style - "maximalism" and "a handmade
              touch." For my design, I will make partial usage of "maximalism,"
              which is characterized by radical color combinations, bold
              patterns, and contrasting textures. This trend is perfect for
              creating a dynamic and eye-catching design. Additionally, I will
              make total usage of "a handmade touch," which is defined by a
              hand-drawn appeal that adds a personal touch and warmth to the
              design.
            </h1>
            <h1 className="text-white text-l dmr mt-[2rem]">
              Moving forward, I took a look at Rick's and Vine's portfolios and
              found a lot of similarities between them. Most of the
              characteristics that they displayed in their portfolios align with
              my design style as well.
            </h1>
          </div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="researchQ2"
        >
          <div className="text-white text-3xl dmb">
            what are the optimal frameworks/libraries to use when coding?
          </div>
          <div className="flex row justify-around w-[700px]">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">literature study</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={secondL} target="_blank">
                  <button>
                    <img
                      src={literature}
                      className=" w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">
                best, good and bad practices
              </h1>
              <div className="sectionButton mt-[1rem]">
                <a href={secondP} target="_blank">
                  <button>
                    <img src={practices} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-white text-3xl dmb">conclusion</h1>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              One of the most important steps in presenting my skills and
              expertise in the front-end industry is to create a portfolio
              website. As I work on this project, I have decided to use a
              combination of React, Tailwind, and Vercel to create a modern and
              efficient website that is both visually appealing and
              user-friendly. To make the website more interactive and engaging,
              I will create animations that showcase my design skills and add a
              personal touch to the website. These animations will provide an
              opportunity for the audience to engage with the website and get a
              better understanding of my design style. Furthermore, to make the
              process of building the portfolio website more efficient, I will
              make usage of reusable code from my previous projects. This
              approach will not only save me time but also ensure consistency
              across my portfolio.
            </h1>
            <h1 className="text-white text-l dmr mt-[2rem]">
              To enhance the interactivity of the website, I will make usage of
              a framework called "Framer Motion." This framework provides a
              comprehensive set of tools to create interactive and responsive
              animations that will provide an immersive user experience.
            </h1>
            <h1 className="text-white text-l dmr mt-[2rem]">
              Finally, I plan to combine Vine's and Rick's ideas of having
              buttons on the index page and displaying only the necessary
              content. This approach will ensure that the website is easy to
              navigate, and the audience can find the information they need
              quickly and efficiently.
            </h1>
          </div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="researchQ3"
        >
          <div className="text-white text-3xl dmb">
            how can i make the portfolio website responsive on every screensize?
          </div>
          <div className="flex row justify-around w-[1000px]">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">literature study</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={fourthL} target="_blank">
                  <button>
                    <img
                      src={literature}
                      className=" w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">
                best, good and bad practices
              </h1>
              <div className="sectionButton mt-[1rem]">
                <a href={fourthP} target="_blank">
                  <button>
                    <img src={practices} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">expert interview</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={fourthPE} target="_blank">
                  <button>
                    <img src={expert} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">peer review</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={fourthPE} target="_blank">
                  <button>
                    <img src={peer} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-white text-3xl dmb">conclusion</h1>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              Having a website that is easily accessible and user-friendly
              across different devices is critical. This is where responsive
              design comes in. Responsive design makes the website function
              seamlessly on every screen size, whether it is a desktop, tablet,
              or phone. To achieve this, it's important to set up a few
              requirements to make the website responsive. One of the key
              requirements is to set up the right resolution size for different
              screens. This ensures that the website is optimized for different
              devices and users can easily navigate through the website. Another
              important requirement is to set up the right font size for
              different screens. This ensures that the text is readable and does
              not strain the user's eyes, regardless of the device being used.
            </h1>
            <h1 className="text-white text-l dmr mt-[2rem]">
              Expert interview and peer review will be used later on during this
              project to ensure that the website is fully responsive and meets
              the needs of its users. By incorporating feedback from experts and
              peers, the website can be fine-tuned and optimized for all
              devices, providing users with a seamless experience no matter
              where they are accessing the website from.
            </h1>
          </div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="researchQ4"
        >
          <div className="text-white text-3xl dmb">
            how can i make my portfolio website intuitive?
          </div>
          <div className="flex row justify-around w-[1000px]">
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">literature study</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={firstL} target="_blank">
                  <button>
                    <img
                      src={literature}
                      className=" w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">prototyping</h1>
              <div className="sectionButton mt-[1rem]">
                <a
                  href="https://www.figma.com/file/zSlpf6G6Az6BOveIhPbbLe/Untitled?node-id=0%3A1&t=yRjVOTSzyDtsz1sw-1"
                  target="_blank"
                >
                  <button>
                    <img
                      src={[prototyping]}
                      className="w-[100px] h-[100px] p-5"
                    />
                  </button>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-white text-l dmr">usability test</h1>
              <div className="sectionButton mt-[1rem]">
                <a href={firstU} target="_blank">
                  <button>
                    <img src={usability} className="w-[100px] h-[100px] p-5" />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <h1 className="text-white text-3xl dmb">conclusion</h1>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              It is essential to make sure that the website is intuitive when
              developing a portfolio, making it easy for users to navigate and
              find what they need. To achieve this, a usability test must be
              performed on users to ensure that the website is intuitive and
              appealing. There are five elements that will define my usability
              test, including scope, purpose, location, participants, and
              scenario. By defining these elements, I will be able to conduct a
              thorough usability test and gain valuable insights into the user
              experience.
            </h1>
            <h1 className="text-white text-l dmr mt-[2rem]">
              One technique that I plan to use during the usability test is the
              "5 second test." This technique involves showing participants the
              design for five seconds before asking them a series of questions.
              The purpose of this technique is to observe what the user is
              focusing on during those five seconds, providing valuable insights
              into how the design can be improved to meet the needs of the
              audience. By conducting a usability test and using the "5 second
              test" technique, I hope to gain valuable insights into the user
              experience and identify any areas of the website that may require
              improvement. By making these improvements, I can ensure that the
              website is intuitive and user-friendly, providing an optimal user
              experience.
            </h1>
          </div>
        </div>
        <div
          className="h-screen flex flex-col justify-around items-center"
          id="mainResearchQ"
        >
          <div className="text-white text-3xl dmb">
            how can I design and build a portfolio website which will target my
            audience?
          </div>
          <div className="mb-[5rem] w-[1000px]">
            <h1 className="text-white text-l dmr">
              Building a portfolio website that is intuitive, visually
              appealing, and user-friendly is essential for showcasing skills
              and expertise in the front-end industry. To achieve this, it's
              important to conduct a thorough usability test using techniques
              such as the "5 second test" to gain valuable insights into the
              user experience. By incorporating design trends such as
              "maximalism" and "a handmade touch," the website can be made
              aesthetically attractive. Using a combination of React, Tailwind,
              and Vercel, along with animations and reusable code, can help
              create a modern and efficient website that engages the audience.
              Responsive design is crucial for ensuring the website functions
              seamlessly on different devices, and setting up the right
              resolution and font size is necessary. Expert interviews and peer
              reviews can help fine-tune the website and optimize it for all
              devices, providing a seamless experience for the audience.
              Overall, following these requirements will help me out to design
              and build a portfolio which will target my audience.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default PAnalysis;
