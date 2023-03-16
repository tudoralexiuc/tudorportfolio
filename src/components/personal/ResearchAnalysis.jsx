import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function SubQuestions() {
  return (
    <>
      <Link
        to="userResearch"
        spy={true}
        smooth={true}
        className="sectionButtonAnalysis flex flex-col items-center"
      >
        <div className="text-xl text-white">user research</div>
        <button className="text-xl text-white mt-4">
          <AiFillCaretDown />
        </button>
      </Link>
    </>
  );
}
