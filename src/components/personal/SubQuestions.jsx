import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function SubQuestions() {
  return (
    <>
      <Link
        to="researchQ1"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">subquestion 1</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="researchQ2"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">subquestion 2</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="researchQ3"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">subquestion 3</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="researchQ4"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">subquestion 4</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
    </>
  );
}
