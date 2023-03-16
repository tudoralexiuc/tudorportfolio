import React, { useRef } from 'react';
import { motion, useScroll, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, IoIosHome } from 'react-icons/io';
import myselfStick2 from '../../pics/myselfstick2.svg';
import dog from '../../pics/dog.svg';
import prototypes from '../../pics/prototypes.svg';
import useScrollSnap from 'react-use-scroll-snap';
import BackButton from './BackButton';

function PDesign() {
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
              DESIGN
            </motion.h1>
          </div>
          <div className=" flex justify-around">
            <div>
              <motion.h1
                className="text-white text-xl dmm"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                goal
              </motion.h1>
              <motion.h1
                className="text-white text-md dmr w-[500px] mt-[2rem]"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                the goal of this assignment is to develop a website portfolio
                that highlights my progress over the course of the semester. The
                end product is aimed to be a well- organized and user-friendly
                website.
              </motion.h1>
              <motion.img
                src={myselfStick2}
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.7 }}
              />
            </div>
            <div className="">
              <motion.img
                src={dog}
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 2, bounce: 0.6 }}
              />
              <motion.h1
                className="text-white text-xl dmm"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                figma
              </motion.h1>
              <motion.h1
                className="text-white text-md dmr w-[500px] mt-[2rem]"
                initial={{ x: '-50vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', duration: 1.5, bounce: 0.5 }}
              >
                figma is a design software that allows users to create a variety
                of designs, such as websites, applications, and more. I utilized
                Figma for developing my wireframes and interactive prototypes.
                Moreover, Figma is particularly beneficial for prototyping with
                animations, and it stands out as the only tool that allows users
                to work on multiple files without facing any merging errors.
                Having worked with Figma for three years, I have found it to be
                the most effective and user-friendly prototyping tool. Thus, I
                believed that it was highly relevant and suited for this
                assignment.
              </motion.h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around h-screen">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">STYLING GUIDE</h1>
          </div>
          <div className="pl-[5rem] pr-[5rem]">
            <h1 className="text-3xl text-white dmm">color palette</h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              the reason behind this palette of color is answered in one of my
              research sub questions “what are the current design trends useful
              for my portfolio?”. There I mentioned the “maximalism” trend which
              is defined by radical color combinations. Each color serves for a
              different page in my portfolio, olive is for the index page,
              pharlap for the about me page, norway for the resume page, baby
              blue for the individual project page, mac & cheese for
              international project page and lastly, salmon for the group
              project.
            </h1>
          </div>
          <div className="flex row justify-around">
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#616f39</h1>
              <h1 className="text-l text-white dmr">olive</h1>
              <div className="w-[70px] h-[70px] bg-[#616f39] border-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#a18276</h1>
              <h1 className="text-l text-white dmr">pharlap</h1>
              <div className="w-[70px] h-[70px] bg-[#a18276] border-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#aac0aa</h1>
              <h1 className="text-l text-white dmr">norway</h1>
              <div className="w-[70px] h-[70px] bg-[#aac0aa] border-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#bbc9fc</h1>
              <h1 className="text-l text-white dmr">baby blue</h1>
              <div className="w-[70px] h-[70px] bg-[#bbc9fc] border-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#ffb677</h1>
              <h1 className="text-l text-white dmr">mac & cheese</h1>
              <div className="w-[70px] h-[70px] bg-[#ffb677] border-2"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-l text-white dmr">#ff8364</h1>
              <h1 className="text-l text-white dmr">salmon</h1>
              <div className="w-[70px] h-[70px] bg-[#ff8364] border-2"></div>
            </div>
          </div>
          <div className="pl-[5rem] pr-[5rem]">
            <h1 className="text-3xl text-white dmm">typography</h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              the font used for this portfolio website is DMSans (Regular,
              Medium and Bold). Bold is used for main titles, Medium for sub
              titles and Regular for paragraphs/regular text.
            </h1>
            <h1 className="text-3xl text-white dmr w-full pt-[2rem]">
              DMSans Regular
            </h1>
            <h1 className="text-3xl text-white dmm w-full pt-[2rem]">
              DMSans Medium
            </h1>
            <h1 className="text-3xl text-white dmb w-full pt-[2rem]">
              DMSans Bold
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-around h-screen">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">DESIGN DECISIONS</h1>
          </div>
          <div className="pl-[5rem] pr-[5rem]">
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              there isn’t an idea or a mysterious goal behind the design I made.
              The only goal I wanted to achieve was to twist it a little bit and
              break out from the normal/common portfolio templates hence the
              childish text and illustrations displayed on the index page (a
              handmade touch) and radical color combinations (maximalism). At
              the same time, as much as I wanted the index page to be different,
              for the other pages I took into account some design principles
              such as Contrast, Emphasis, Movement, Repetition and White space.
            </h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              contrast is expressed between the background colors and the font
              color. The juxtaposition between the radical colors and white
              elements, like text and buttons/icons, result in a vibrant and
              engaging design.
            </h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              emphasis is defined by visual tools that help a specific element
              stand out. These handy tools include: animations/buttons.
            </h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              movement is attention-grabbing, capturing the eye and guiding it
              with an even more dynamic design. This can be seen in my portfolio
              whenever the user opens up a new page, the elements are dynamic
              for a tiny bit.
            </h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              repetition are patterns that are satisfactory to the eye. For
              instance, the structure for all my 3 projects is the same making
              it consistent for users.
            </h1>
            <h1 className="text-xl text-white dmr w-full pt-[2rem]">
              white space refers to the areas within a composition that are void
              of visual elements. White space can be seen between headings and
              paragraphs/icons and buttons.
            </h1>
          </div>
        </div>
        <div className="flex flex-col justify-around h-screen">
          <div className="flex justify-center">
            <h1 className="text-white text-7xl dmm">TESTING DECISIONS</h1>
          </div>
          <div className="flex justify-around">
            <div>
              <h1 className="text-white text-xl dmm">
                usability testing decision
              </h1>
              <h1 className="text-white text-md dmr w-[500px] mt-[2rem]">
                after testing Stephen I realized there is something missing in
                my design. For instance Stephen was on the index page, and I
                gave him the task to check out the content on the “about me
                page”, Stephen tried to click on the “about me” text instead of
                the button. “I do not like that I have to press on images and
                not on the text, it is not that intuitive” (Stephen, 2023),
                which made me realize I have to make the text clickable too.
                Therefore after testing Stephen the user now can click on both
                the text and the image.
              </h1>
              <div className="clickableButton mt-[2rem]">
                <a href="https://youtu.be/LdpxlZVMI8k" target="_blank">
                  <button className="text-lg dmr text-white ">VIEW MORE</button>
                </a>
              </div>
            </div>
            <div className="">
              <h1 className="text-white text-xl dmm">
                A/B survey testing decision
              </h1>
              <h1 className="text-white text-md dmr w-[500px] mt-[2rem]">
                one feature I wanted to implement on my portfolio website is the
                scroll snap. Scroll snap redirects the user whenever they scroll
                to the content I chose them to see. Personally, I like the
                scroll snap a lot, but I was not sure if the users will like it
                as much as I do therefore I had to test it out. What I did was
                to create a survey where I provided them two different websites.
                I explained that the content does not matter at all, but the
                only thing that it matters is the scrolling. After checking both
                websites, I gave the option to choose between them and justify
                their decision. The majority chose the website with the scroll
                snap 75%, whereas 25% voted for without scroll snap
              </h1>
              <div className="clickableButton mt-[2rem]">
                <a
                  href="https://docs.google.com/forms/d/1-sFhEV82ns98XwgO16m6EfOZHSi3CqkED0Kv97sA7Qc/edit?fbclid=IwAR0GXIP6Lid_OOOd7M7m0kEc-RLW76VATk8LjxGXGIKZ7nBVq7TY-JzPpCM"
                  target="_blank"
                >
                  <button className="text-lg dmr text-white ">VIEW MORE</button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around h-screen">
          <div className="flex flex-col justify-center items-center">
            <img src={prototypes} className="w-[1700px]" />
            <div className="clickableButton mt-[5rem]">
              <a
                href="https://www.figma.com/file/zSlpf6G6Az6BOveIhPbbLe/Untitled?node-id=0%3A1&t=yRjVOTSzyDtsz1sw-1"
                target="_blank"
              >
                <button className="text-lg dmr text-white ">VIEW MORE</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PDesign;
