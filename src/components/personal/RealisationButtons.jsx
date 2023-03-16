import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function SubQuestions() {
  return (
    <>
      <Link
        to="react"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">react</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="tailwind"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">tailwind</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="github"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">github</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="framer"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">framer motion</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
    </>
  );
}
