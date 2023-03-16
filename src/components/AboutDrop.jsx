import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import { Link } from 'react-scroll';

export default function AboutDrop() {
  return (
    <>
      <Link
        to="section2"
        spy={true}
        smooth={true}
        className="absolute bottom-[20px] left-0 right-0 m-auto w-[40px] h-[40px] text-3xl text-white"
      >
        <button className="breathing-button">
          <AiOutlineDown />
        </button>
      </Link>
    </>
  );
}
