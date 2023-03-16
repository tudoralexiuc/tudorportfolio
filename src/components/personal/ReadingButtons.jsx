import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function SubQuestions() {
  return (
    <>
      <Link
        to="assignment"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">the assignment</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="approach"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">approach</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="implementation"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">implementation</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="results"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">results</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="reflection"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">reflection</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
      <Link
        to="evidence"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-md text-white">evidence</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
    </>
  );
}
